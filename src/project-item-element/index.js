import { humanize } from '../utils'
import { theme } from '../theme'

function dispatchEvents(shadowRoot, event) {
  const nodes = shadowRoot.querySelector('slot').assignedNodes()

  nodes.forEach((node) => {
    if (node instanceof HTMLElement) {
      node.dispatchEvent(new CustomEvent(event))
    }
  })
}

function onTitleEnter({ target }) {
  dispatchEvents(target.parentNode, 'show-languages')
}

function onTitleLeave({ target }) {
  dispatchEvents(target.parentNode, 'hide-languages')
}

function onTitleClick(el) {
  const projectList = el.shadowRoot.host.parentNode
  projectList.dispatchEvent(
    new CustomEvent('hide-project-list')
  )

  const details = document.createElement('project-details')
  details.dispatchEvent(
    new CustomEvent('append-project', {
      detail: { slug: 'lorem-ipsum' }
    })
  )

  const [backgroundController] = document.getElementsByTagName('background-controller')
  backgroundController.dispatchEvent(
    new CustomEvent('hide-background-controller')
  )

  const [backgroundSketch] = document.getElementsByTagName('background-sketch')
  backgroundSketch.dispatchEvent(
    new CustomEvent('hide-background-sketch')
  )
}

export default class ProjectItemElement extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: relative;
        }
        a {
          border: none;
          color: ${theme.palette.primary};
          cursor: pointer;
          font-size: 1rem;
          line-height: 36px;
          position: relative;
          transition: all .3s cubic-bezier(.12, .12, .36, .96);
        }
        a:hover {
          padding-left: 36px
        }
        a:before {
          background-color: ${theme.palette.secondary};
          content: '';
          display: block;
          height: 1px;
          left: 0;
          position: absolute;
          top: 50%;
          transition: all .3s cubic-bezier(.12, .12, .36, .96);
          width: 0;
        }
        a:hover:before {
          width: 24px;
        }
      </style>
      <a class="title">${humanize(this.slug)}</a>
      <slot></slot>
    `
  }

  get slug() {
    return this.getAttribute('slug')
  }

  connectedCallback() {
    const title = this.shadowRoot.querySelector('.title')

    title.addEventListener('mouseenter', onTitleEnter)
    title.addEventListener('mouseleave', onTitleLeave)
    title.addEventListener('click', (e) => {
      e.preventDefault()
      onTitleClick(this)
    })
  }
}

if (!customElements.get('project-item')) {
  customElements.define('project-item', ProjectItemElement)
}
