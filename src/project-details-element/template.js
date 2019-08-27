import { theme } from '../theme'

export const template = document.createElement('template')

template.innerHTML = `
  <style>
    * {
      box-sizing: border-box;
    }
  </style>
  <section class="media">
    <slot name="gallery"></slot>
  </section>
`
