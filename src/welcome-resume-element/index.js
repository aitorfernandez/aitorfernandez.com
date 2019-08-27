import { theme } from '../theme'

const greetings = [
  'Hello There!',
  'Bonjour',
  'Hola',
  'Ciao',
  'Guten Tag',
  'Olà',
  'Namaste',
  'Konnichiwa',
  'Ni Hao',
  'Halo'
]

const greeting = greetings[Math.floor(Math.random() * greetings.length)]

function tween(target, props) {
  TweenMax.to(target, 0.3, props)
}

function showWelcomeResume({ target }) {
  tween(target, {
    autoAlpha: 1,
    display: 'block'
  })
}

function hideWelcomeResume({ target }) {
  tween(target, {
    autoAlpha: 0,
    display: 'none'
  })
}

export default class WelcomeResumeElement extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = `
      <style>
        :host {
          background-color: ${theme.palette.secondary};
          color: white;
          display: none;
          height: 100%;
          left: 0;
          opacity: 0;
          overflow: auto;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 9;
        }
        section a {
          color: white;
          transition: opacity .3s;
        }
        section a:hover {
          opacity: .5;
        }
        section h3 {
          font-size: .7rem;
          letter-spacing: .16em;
          line-height: 60px;
          opacity: .3;
          text-transform: uppercase;
        }
        section ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        section ul li {
          font-size: 1rem;
          line-height: 26px;
        }
        section ul li.title {
          font-weight: 500;
          margin-bottom: .5em;
          opacity: .5;
        }
        .wrapper {
          margin: 1.5em calc(8% + 12px);
          max-width: ${theme.sizes.maxWidth};
        }
        .greeting {
          font-size: 2rem;
          line-height: 2;
          opacity: .5;
          text-align: right;
          transform: scaleX(-1);
        }
        .about {
          font-size: 1.5rem;
        }
        .tools {
          display: flex;
          flex-direction: column;
        }
        .tools ul:not(:last-child) {
          margin: 0 0 1.5em 0;
        }
        @media (min-width: ${theme.breakpoints.md}) {
          .tools {
            flex-direction: row;
          }
          .tools ul:not(:last-child) {
            margin: 0 3em 0 0 !important;
          }
        }
        .elsewhere span {
          margin: 0 .5em;
          opacity: .5;
        }
        .touch a {
          font-weight: 500;
        }
        .japanese-ascii {
          margin: 0 .5em;
          opacity: .5;
          white-space: pre;
        }
      </style>
      <div class="wrapper">
        <section>
          <div class="greeting">
            ${greeting}
          </div>
        </section>
        <section>
          <div class="about">
            How's it going? I'm
            <a href="" title="Aitor Fernandez - Personal Portfolio">
              Aitor Fern&aacute;ndez
            </a>
            a multidisciplinary software engineer who loves Creative Coding. Welcome to my
            <a href="#">
              portfolio
            </a>
            of professional works and code experiments.
          </div>
        </section>
        <section>
          <h3>
            Some of my favorite tools
          </h3>
          <div class="tools">
            <ul>
              <li class="title">Languages</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript / ES6 / Typescript</li>
              <li>Lua</li>
              <li>Ruby</li>
              <li>C++</li>
            </ul>
            <ul>
              <li class="title">Frameworks / Libraries / Budlers</li>
              <li>Webpack</li>
              <li>React</li>
              <li>Redux</li>
              <li>p5.js</li>
              <li>Ruby on Rails</li>
            </ul>
            <ul>
              <li class="title">Databases</li>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </div>
        </section>
        <section>
          <h3>
            Elsewhere
          </h3>
          <div class="elsewhere">
            <a href="https://github.com/aitorfernandez" target="_blank" title="Follow aitorfernandez on Github">
              Github
            </a>
            <span>|</span>
            <a href="https://dev.to/aitorfernandez" target="_blank" title="Follow aitorfernandez on Dev.to">
              Dev.to
            </a>
            <span>|</span>
            <a href="https://twitter.com/aitorfernandez" target="_blank" title="Follow aitorfernandez on Twitter">
              Twitter
            </a>
            <span>|</span>
            <a href="http://t.me/aitorfernandez" target="_blank">
              Telegram
            </a>
          </div>
        </section>
        <section>
          <h3>
            Get in touch
          </h3>
          <p class="touch">
            I'm always open to collaborations and coding fun stuff <span class="japanese-ascii">＼(＾▽＾)／</span> - just
            <a href="&#77;&#97;&#105;&#76;&#116;&#79;&#58;&#104;&#101;&#108;&#108;&#111;&#105;&#109;&#97;&#105;&#116;&#111;&#114;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;&#63;&#115;&#117;&#98;&#106;&#101;&#99;&#116;&#61;&#72;&#101;&#108;&#108;&#111;&#37;&#50;&#48;&#116;&#104;&#101;&#114;&#101;&#37;&#50;&#49;">
              email me.
            </a>
          </p>
        </section>
      </div>
    `
  }

  connectedCallback() {
    this.addEventListener('show-welcome-resume', showWelcomeResume)
    this.addEventListener('hide-welcome-resume', hideWelcomeResume)
  }
}

if (!customElements.get('welcome-resume')) {
  customElements.define('welcome-resume', WelcomeResumeElement)
}
