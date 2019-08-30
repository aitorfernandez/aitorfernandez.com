import { projectsHTML } from './projectsHTML'
import { template } from './template'
import { theme } from '../theme'

function appendProject({ detail, target }) {
  const wrapper = document.createElement('div')
  const [detailsContainer] = document.getElementsByClassName('project-details-container')

  detailsContainer.append(wrapper)
  target.innerHTML = projectsHTML[detail.slug]
  wrapper.appendChild(target)

  wrapper.style.cssText = `
    display: block;
    max-width: ${theme.sizes.maxWidth};
    opacity: 1;
    margin-bottom: 1.5em;
  `

  TweenMax.from(wrapper, 0.3, {
    autoAlpha: 0,
    delay: 0.3,
    display: 'none',
    x: 96
  })
}

function removeChild({ target }) {
  const onComplete = () => target.parentNode.remove()

  TweenMax.to(target.parentNode, 0.3, {
    onComplete,
    autoAlpha: 0,
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
    this.addEventListener('remove-child', removeChild)
  }
}

if (!customElements.get('project-details')) {
  customElements.define('project-details', ProjectDetailsElement)
}
