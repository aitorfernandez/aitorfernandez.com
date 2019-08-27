import { projectsHTML } from './projectsHTML'
import { template } from './template'

function appendProject({ detail, target }) {
  const container = document.createElement('div')
  const [details] = document.getElementsByClassName('project-details')

  details.append(container)
  target.innerHTML = projectsHTML[detail.slug]
  container.appendChild(target)

  container.style.cssText = `
    opacity: 1;
    display: block;
  `

  TweenMax.from(container, 0.3, {
    autoAlpha: 0,
    delay: .2,
    display: 'none',
    x: 96
  })
}

export default class ProjectDetailsElement extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(template.content.cloneNode(true))

    this.addEventListener('append-project', appendProject)
  }
}

if (!customElements.get('project-details')) {
  customElements.define('project-details', ProjectDetailsElement)
}
