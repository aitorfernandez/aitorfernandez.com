import { theme } from '../theme'

export const template = document.createElement('template')

template.innerHTML = `
  <style>
    * {
      box-sizing: border-box;
    }
    .details {
      padding: 6px;
    }
    @media (max-width: ${theme.breakpoints.sm}) {
      .details {
        padding: 3px;
      }
    }
    ::slotted(h2) {
      font-size: 1.5rem;
      font-weight: 300;
      opacity: .9;
    }
  </style>
  <section class="details">
    <slot name="title"></slot>
  </section>
  <section class="media">
    <slot name="gallery"></slot>
  </section>
`
