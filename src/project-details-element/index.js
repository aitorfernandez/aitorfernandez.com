import { projectsHTML } from './projectsHTML'
import { template } from './template'
import { theme } from '../theme'

function appendProject({ detail, target }) {
  const container = document.createElement('div')
  const [details] = document.getElementsByClassName('project-details')

  details.append(container)
  target.innerHTML = projectsHTML[detail.slug]
  container.appendChild(target)

  container.style.cssText = `
    display: block;
    max-width: ${theme.sizes.maxWidth};
    opacity: 1;
    margin-bottom: 1.5em;
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
