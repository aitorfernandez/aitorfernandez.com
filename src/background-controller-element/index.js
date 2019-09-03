import { humanize } from '../utils'
import { theme } from '../theme'

let bg = null
let dots = null
let title = null

function titleHTML(value) {
  title.innerHTML = `
    See more about <a href="https://github.com/aitorfernandez/${value}" target="_blank">${humanize(value)}</a> background
  `
}

function onDotClick({ target }) {
  if (target.hasAttribute('selected')) {
    return
  }

  dots.forEach((dot) => {
    dot.removeAttribute('selected')
  })

  target.setAttribute('selected', '')

  titleHTML(target.getAttribute('slug'))
  bg.setAttribute('slug', target.getAttribute('slug'))
}

function tween(target, props) {
  TweenMax.to(target, 0.3, props)
}

function showBackgroundController({ target }) {
  tween(target, { autoAlpha: 1, delay: 0.3 })
}

function hideBackgroundController({ target }) {
  tween(target, { autoAlpha: 0 })
}

function onPause({ target }) {
  const dispatchEvent = (event) => {
    bg.dispatchEvent(new CustomEvent(event))
  }

  if (target.className === 'fas fa-pause') {
    target.className = 'fas fa-stop'
    dispatchEvent('stop-sketch')
  } else {
    target.className = 'fas fa-pause'
    dispatchEvent('play-sketch')
  }
}

function onSync() {
  bg.dispatchEvent(new CustomEvent('reset-sketch'))
}

export default class BackgroundControllerElement extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = `
      <style>
        :host {
          display: none;
          opacity: 0;
        }
        @media (min-width: ${theme.breakpoints.md}) {
          :host {
            display: block;
            opacity: 1;
          }
        }
        .wrapper {
          align-items: center;
          bottom: 1.75rem;
          display: flex;
          position: fixed;
          right: calc(8% + 12px);
          z-index: 1;
        }
        .wrapper .title a {
          color: rgba(17, 17, 17, .7);
          transition: opacity .3s;
        }
        .wrapper .title a:hover {
          opacity: .5;
        }
        .title {
          color: rgba(17, 17, 17, .5);
          font-size: .9rem;
        }
        .controls {
          margin: 0 1.5em;
        }
        .fas {
          color: ${theme.palette.secondary};
          cursor: pointer;
          margin: 0 0.35em;
        }
        .fas:hover {
          color: ${theme.palette.secondary};
          outline: none;
          text-shadow: 0 0 12px ${theme.palette.secondary};
        }
      </style>
      <div class="wrapper">
        <div class="title"></div>
        <div class="controls">
          <i class="fas fa-pause"></i>
          <i class="fas fa-sync-alt"></i>
        </div>
        <slot name="dot" class="dots"></slot>
      </div>
    `

    const fontAwesome = document.querySelector('link[href*="font-awesome"]')
    shadowRoot.appendChild(fontAwesome.cloneNode())
  }

  connectedCallback() {
    ([bg] = document.getElementsByTagName('background-sketch'))

    title = this.shadowRoot.querySelector('.title')
    dots = this.shadowRoot.querySelector('.dots').assignedNodes()

    dots.forEach((dot) => {
      dot.addEventListener('click', onDotClick)

      if (dot.hasAttribute('selected')) {
        const slug = dot.getAttribute('slug')
        titleHTML(slug)
        bg.setAttribute('slug', slug)
      }
    })

    this.addEventListener('show-background-controller', showBackgroundController)
    this.addEventListener('hide-background-controller', hideBackgroundController)

    const pause = this.shadowRoot.querySelector('.fa-pause')
    pause.addEventListener('click', onPause)

    const sync = this.shadowRoot.querySelector('.fa-sync-alt')
    sync.addEventListener('click', onSync)
  }
}

if (!customElements.get('background-controller')) {
  customElements.define('background-controller', BackgroundControllerElement)
}
