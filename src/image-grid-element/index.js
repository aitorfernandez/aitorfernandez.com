import { theme } from '../theme'

export default class ImageGridElement extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          flex-wrap: wrap;
        }
        ::slotted(img) {
          padding: 6px;
          vertical-align: middle;
          width: 100%;
        }
        @media (max-width: ${theme.breakpoints.sm}) {
          ::slotted(img) {
            padding: 3px;
          }
        }
        .wrapper {
          flex: 100%;
          max-width: 100%;
        }
      </style>
      <div class="wrapper">
        <slot name="md"></slot>
      </div>
    `
  }
}

if (!customElements.get('image-grid')) {
  customElements.define('image-grid', ImageGridElement)
}
