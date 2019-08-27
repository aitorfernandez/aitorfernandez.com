function tween(target, props) {
  TweenMax.to(target, 0.3, props)
}

function showLanguages({ target }) {
  tween(target, {
    display: 'inline-block',
    autoAlpha: 1
  })
}

function hideLanguages({ target }) {
  tween(target, {
    display: 'none',
    autoAlpha: 0
  })
}

export default class ProgrammingLanguageElement extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = `
      <style>
        :host {
          display: none;
          opacity: 0;
        }
        .name {
          font-size: 1rem;
          margin: 0 .5em;
          opacity: .3;
          text-transform: capitalize;
        }
        .name::before {
          content: "|";
          margin-right: 1em;
        }
      </style>
      <span class="name">${this.name}</span>
    `
  }

  get name() {
    return this.getAttribute('name')
  }

  connectedCallback() {
    this.addEventListener('show-languages', showLanguages)
    this.addEventListener('hide-languages', hideLanguages)
  }
}

if (!customElements.get('programming-language')) {
  customElements.define('programming-language', ProgrammingLanguageElement)
}
