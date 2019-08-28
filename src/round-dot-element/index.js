import { theme } from '../theme'

function updateStyle(el) {
  const { shadowRoot } = el
  shadowRoot.querySelector('style').textContent = `
    :host {
      background-color: ${theme.palette.secondary};
      border-radius: 50%;
      cursor: ${el.hasAttribute('selected') ? 'default' : 'pointer'};
      display: inline-block;
      height: 12px;
      margin: 0 0.15em;
      opacity: ${el.hasAttribute('selected') ? '0.3' : '0.7'};
      transition: opacity .6s;
      width: 12px;
    }
  `
}

export default class RoundDotElement extends HTMLElement {
  static get observedAttributes() {
    return ['selected', 'slug']
  }

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    const style = document.createElement('style')
    shadowRoot.appendChild(style)
  }

  connectedCallback() {
    updateStyle(this)
  }

  attributeChangedCallback() {
    updateStyle(this)
  }
}

if (!customElements.get('round-dot')) {
  customElements.define('round-dot', RoundDotElement)
}
