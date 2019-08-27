import { theme } from '../theme'

export default class AppFooterElement extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
        }
        ::slotted(*) {
          color: ${theme.palette.secondary};
          font-size: 1.5rem;
          opacity: .7;
        }
        ::slotted(a) {
          margin-right: .5em;
          text-decoration: none;
          transition: .15s;
        }
        ::slotted(a:hover) {
          color: ${theme.palette.secondary};
          outline: none;
          text-shadow: 0 0 12px ${theme.palette.secondary};
        }
      </style>
      <slot></slot>
    `
  }
}

if (!customElements.get('app-footer')) {
  customElements.define('app-footer', AppFooterElement)
}
