import { theme } from '../theme'

function dispatchWelcomeResumeEvent(event) {
  const [resume] = document.getElementsByTagName('welcome-resume')
  resume.dispatchEvent(new CustomEvent(event))
}

function tween(target, props) {
  TweenMax.to(target, .3, props)
}

function onClick({ target }) {
  const fas = target.shadowRoot.querySelector('.fas')

  if (fas.className === 'fas fa-bars') {
    dispatchWelcomeResumeEvent('show-welcome-resume')

    tween(target, { backgroundColor: 'white' })
    tween(fas, { color: theme.palette.secondary })

    fas.className = 'fas fa-times'
  } else {
    dispatchWelcomeResumeEvent('hide-welcome-resume')

    tween(target, { backgroundColor: theme.palette.secondary })
    tween(fas, { color: 'white' })

    fas.className = 'fas fa-bars'
  }
}

export default class MoreActionElement extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = `
      <style>
        :host {
          background-color: ${theme.palette.secondary};
          cursor: pointer;
          display: flex;
          justify-content: center;
          padding: 1em;
          transition: width .3s;
          width: 100%;
        }
        @media (min-width: ${theme.breakpoints.sm}) {
          :host {
            justify-content: flex-end;
          }
          :host(:hover) {
            width: calc(100% + 12px);
          }
        }
        .fas {
          color: white;
        }
      </style>
      <i class="fas fa-bars"></i>
    `

    const fontAwesome = document.querySelector('link[href*="font-awesome"]')
    shadowRoot.appendChild(fontAwesome.cloneNode())
  }

  connectedCallback() {
    this.addEventListener('click', onClick)
  }
}

if (!customElements.get('more-action')) {
  customElements.define('more-action', MoreActionElement)
}