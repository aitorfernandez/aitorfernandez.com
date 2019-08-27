import { theme } from '../theme'

export default class AppHeaderElement extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = `
      <style>
        :host {
          align-items: center;
          display: flex;
          margin-top: 1.5em;
        }
        .more-action {
          position: relative;
          width: calc(6% + 12px);
          z-index: 9;
        }
        .wrapper {
          left: calc(8% + 12px);
          position: absolute;
          z-index: 1;
        }
        .wrapper a h1 {
          font-size: 2rem;
          font-weight: 300;
          line-height: 36px;
        }
        .wrapper a h1 span {
          display: block;
          font-size: 1.5rem;
          opacity: .5;
        }
        .wrapper a {
          color: ${theme.palette.primary};
          text-decoration: none;
        }
      </style>
      <div class="more-action">
        <slot></slot>
      </div>
      <div class="wrapper">
        <a href="/">
          <h1>
            Lorem ipsum dolor sit amet
            <span>
              consectetur adipisicing elit
            </span>
          </h1>
        </a>
      </div>
    `
  }
}

if (!customElements.get('app-header')) {
  customElements.define('app-header', AppHeaderElement)
}
