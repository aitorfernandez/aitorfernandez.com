import { humanize } from '../utils'
import { theme } from '../theme'

export default class ProjectNavElement extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = `
      <style>
        :host {
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
}

if (!customElements.get('project-nav')) {
  customElements.define('project-nav', ProjectNavElement)
}
