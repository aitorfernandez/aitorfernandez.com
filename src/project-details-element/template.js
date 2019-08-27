import { theme } from '../theme'

export const template = document.createElement('template')

template.innerHTML = `
  <style>
    * {
      box-sizing: border-box;
    }
    section ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    .details, .description, .tools, .controls-top {
      padding: 6px;
    }
    @media (max-width: ${theme.breakpoints.sm}) {
      .details, .description, .tools, .controls-top {
        padding: 3px;
      }
    }
    .controls-top {
      display: flex;
      justify-content: flex-end;
    }
    .margin {
      margin: 0 1.5em;
    }
    ::slotted(h2) {
      font-size: 1.5rem;
      font-weight: 300;
      margin: 0;
      opacity: .9;
    }
    ::slotted(p) {
      opacity: .7;
    }
    ::slotted(li) {
      font-size: .9rem;
      line-height: 26px;
      opacity: .7;
    }
    ::slotted(.tools-title) {
      font-weight: 500;
      margin-bottom: .5em;
      opacity: .3;
    }
    ::slotted(a) {
      color: rgba(17, 17, 17, 0.5);
      font-size: .9rem;
      line-height: 60px;
      transition: opacity .3s;
    }
    ::slotted(a:hover) {
      opacity: .5;
    }
    .media {
      margin: 0 0 1.5em;
    }
    .controls-bottom {
      display: flex;
      justify-content: center;
    }
  </style>
  <div class="controls-top">
    <slot name="prev-top"></slot>
    <div class="margin">
      <slot name="next-top"></slot>
    </div>
    <slot name="close"></slot>
  </div>
  <section class="details">
    <slot name="title"></slot>
  </section>
  <section class="description">
    <slot name="description"></slot>
  </section>
  <section class="tools">
    <ul>
      <slot name="tools-title"></slot>
      <slot name="tools"></slot>
    </ul>
    <slot name="github"></slot>
  </section>
  <section class="media">
    <slot name="gallery"></slot>
  </section>
  <div class="controls-bottom">
    <slot name="prev-bottom"></slot>
    <div class="margin"></div>
    <slot name="next-bottom"></slot>
  </div>
`
