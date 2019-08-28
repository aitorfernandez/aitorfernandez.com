import { theme } from '../theme'
import gameOfLife from '../game-of-life/game-of-life'

const sketchs = {
  'game-of-life': gameOfLife
}

let canvas = null

function tween(props) {
  const canvas = document.getElementById('defaultCanvas0')
  TweenMax.to(canvas, .3, props)
}

function showBackgroundSketch({ target }) {
  // canvas.play()

  tween({ autoAlpha: 1 })
}

function hideBackgroundSketch(el) {
  // canvas.stop()

  tween({ autoAlpha: 0 })
}

export default class BackgroundSketchElement extends HTMLElement {
  static get observedAttributes() {
    return ['slug', 'state']
  }

  constructor() {
    super()

    this.innerHTML = `
      <style>
        .texture {
          background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAACQCAYAAAB9CTUlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU5NUE1QUUwMjU0QzExRThCQzhFRDJFQTFCNEQ3RUU0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU5NUE1QUUxMjU0QzExRThCQzhFRDJFQTFCNEQ3RUU0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTk1QTVBREUyNTRDMTFFOEJDOEVEMkVBMUI0RDdFRTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTk1QTVBREYyNTRDMTFFOEJDOEVEMkVBMUI0RDdFRTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz594LBcAABlL0lEQVR42qS9yY+t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') repeat 60%/120px 120px;
          height: 100%;
          left: 0;
          pointer-events: none;
          position: fixed;
          right: 0;
          width: 100%;
          z-index: 2;
        }
        canvas {
          display: none;
          left: 50%;
          opacity: 0;
          position: fixed;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }
        @media (min-width: ${theme.breakpoints.md}) {
          canvas {
            display: block;
            opacity: 1;
          }
        }
      </style>
      <div class="texture"></div>
    `
  }

  connectedCallback() {
    this.addEventListener('show-background-sketch', showBackgroundSketch)
    this.addEventListener('hide-background-sketch', hideBackgroundSketch)
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === 'slug') {
      if (canvas) {
        canvas.remove()
      }

      canvas = new p5(sketchs[newValue], this)
    }

    if (attr === 'state') {
      // ...
    }
  }
}

if (!customElements.get('background-sketch')) {
  customElements.define('background-sketch', BackgroundSketchElement)
}
