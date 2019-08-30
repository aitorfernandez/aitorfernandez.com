import { humanize } from '../utils'
import { theme } from '../theme'

function dispatchEvent(target, event, props = null) {
  target.dispatchEvent(new CustomEvent(event, props))
}

function dispatchEventByTagName(tag, event) {
  const [el] = document.getElementsByTagName(tag)
  dispatchEvent(el, event)
}

function removeProject() {
  const [detailsContainer] = document.getElementsByClassName('project-details-container')
  const projectDetails = detailsContainer.firstElementChild.firstElementChild
  dispatchEvent(projectDetails, 'remove-child')
}

function onClick({ target }) {
  if (target.slug) {
    removeProject()

    const details = document.createElement('project-details')
    dispatchEvent(details, 'append-project', {
      detail: { slug: target.slug }
    })
  } else {
    removeProject()

    dispatchEventByTagName('project-list', 'show-project-list')
    dispatchEventByTagName('background-controller', 'show-background-controller')
    dispatchEventByTagName('background-sketch', 'show-background-sketch')
  }
}

export default class ProjectNavElement extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = `
      <style>
        :host {
          cursor: pointer;
          text-align: ${this.align};
        }
        .action {
          font-size: .5rem;
          font-weight: 500;
          letter-spacing: .16em;
          line-height: 24px;
          margin: .5em 0;
          opacity: .3;
          text-transform: uppercase;
        }
        .title {
          display: ${this.hasAttribute('include-title') ? 'block' : 'none'};
          font-size: 1.5rem;
          opacity: .9;
        }
        .fas {
          color: ${theme.palette.secondary};
          font-size: 1.5rem;
          opacity: .7;
        }
      </style>
      <div>
        <i class="fas fa-${this.icon}"></i>
      </div>
      <div class="action">
        <slot></slot>
      </div>
      <div class="title">
        ${humanize(this.slug)}
      </div>
    `

    const fontAwesome = document.querySelector('link[href*="font-awesome"]')
    shadowRoot.appendChild(fontAwesome.cloneNode())
  }

  get align() {
    return this.getAttribute('align')
  }

  get icon() {
    return this.getAttribute('icon')
  }

  get slug() {
    return this.getAttribute('slug') || ''
  }

  connectedCallback() {
    this.addEventListener('click', onClick)
  }
}

if (!customElements.get('project-nav')) {
  customElements.define('project-nav', ProjectNavElement)
}
