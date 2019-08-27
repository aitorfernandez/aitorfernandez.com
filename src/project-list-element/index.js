function showProjectList({ target }) {
  // ...
}

function hideProjectList({ target }) {
  TweenMax.to(target.parentNode, 0.3, {
    x: -96,
    opacity: 0,
    display: 'none'
  })
}

export default class ProjectListElement extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = `
      <style>
        h3 {
          font-size: .7rem;
          letter-spacing: .16em;
          line-height: 60px;
          opacity: .3;
          text-transform: uppercase;
        }
      </style>
      <nav>
        <section>
          <h3>Work</h3>
          <slot name="work"></slot>
        </section>
        <section>
          <h3>Side Projects</h3>
          <slot name="side"></slot>
        </section>
        <section>
          <h3>Lab & Prototyping</h3>
          <slot name="lab"></slot>
        </section>
      </nav>
    `
  }

  connectedCallback() {
    this.addEventListener('show-project-list', showProjectList)
    this.addEventListener('hide-project-list', hideProjectList)
  }
}

if (!customElements.get('project-list')) {
  customElements.define('project-list', ProjectListElement)
}
