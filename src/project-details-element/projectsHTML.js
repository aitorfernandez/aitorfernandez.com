function topPrevWork(slug) {
  return `
    <project-nav align="center" slot="prev-top" icon="angle-left" slug="${slug}">
      Previous work
    </project-nav>
  `
}

function topNextWork(slug) {
  return `
    <project-nav align="center" slot="next-top" icon="angle-right" slug="${slug}">
      Next work
    </project-nav>
  `
}

function bottomPrevWork(slug) {
  return `
    <project-nav include-title align="right" slot="prev-bottom" icon="angle-left" slug="${slug}">
      Previous work
    </project-nav>
  `
}

function bottomNextWork(slug) {
  return `
    <project-nav include-title align="left" slot="next-bottom" icon="angle-right" slug="${slug}">
      Next work
    </project-nav>
  `
}

function close() {
  return `
    <project-nav align="center" slot="close" icon="times">
      Close
    </project-nav>
  `
}

function navigation(prevWork, nextWork) {
  return `
    ${topPrevWork(prevWork)}
    ${topNextWork(nextWork)}
    ${bottomPrevWork(prevWork)}
    ${bottomNextWork(nextWork)}
    ${close()}
  `
}

export const projectsHTML = {
  // Work
  'qadre': `
    ${navigation('triangle-pattern', 'gamesys')}
    <h2 slot="title">Qadre</h2>
    <p slot="description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <li slot="tools-title" class="tools-title">Tools</li>
    <li slot="tools">HTML5 / CSS3</li>
    <li slot="tools">Javascript / TypeScript</li>
    <li slot="tools">React / Redux</li>
    <li slot="tools">Etherum Solidity / Web3 / Ganache</li>
    <li slot="tools">Blockchain</li>
    <image-grid slot="gallery">
      <img slot="md" src="assets/qadre/screenshot-1.png">
    </image-grid>
  `,
  'gamesys': `
    ${navigation('qadre', 'seven-monkeys')}
    <h2 slot="title">Gamesys</h2>
    <p slot="description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <li slot="tools-title" class="tools-title">Tools</li>
    <li slot="tools">HTML5 / CSS3</li>
    <li slot="tools">Javascript</li>
    <li slot="tools">Lua</li>
    <li slot="tools">Ruby / Ruby on Rails</li>
    <image-grid slot="gallery">
      <img slot="md" src="assets/gamesys/screenshot-virgin.png">
      <img slot="md" src="assets/gamesys/screenshot-jungle-jump.png">
      <img slot="md" src="assets/gamesys/screenshot-barnayard.png">
    </image-grid>
  `,
  // Side projects
  'seven-monkeys': `
    ${navigation('gamesys', 'roguelike')}
    <h2 slot="title">Seven Monkeys</h2>
    <p slot="description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <li slot="tools-title" class="tools-title">Tools</li>
    <li slot="tools">Cocos2d-x</li>
    <li slot="tools">C++</li>
    <li slot="tools">iOS</li>
    <a slot="github" href="https://github.com/aitorfernandez/seven-monkeys" target="_blank">
      See Code on Github
    </a>
    <image-grid slot="gallery">
      <img slot="md" src="assets/seven-monkeys/screenshot.png">
    </image-grid>
  `,
  // Lab & prototyping
  'roguelike': `
    ${navigation('seven-monkeys', 'random-cave')}
    <h2 slot="title">Roguelike</h2>
    <p slot="description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <li slot="tools-title" class="tools-title">Tools</li>
    <li slot="tools">Javascript</li>
    <li slot="tools">p5js</li>
    <li slot="tools">rot-js</li>
    <a slot="github" href="https://github.com/aitorfernandez/roguelike" target="_blank">
      See Code on Github
    </a>
    <image-grid slot="gallery">
      <img slot="md" src="assets/roguelike/screenshot.png">
    </image-grid>
  `,
  'random-cave': `
    ${navigation('roguelike', 'trackicon-invaders')}
    <h2 slot="title">Random Cave</h2>
    <p slot="description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <li slot="tools-title" class="tools-title">Tools</li>
    <li slot="tools">Javascript</li>
    <li slot="tools">p5js</li>
    <a slot="github" href="https://github.com/aitorfernandez/random-cave" target="_blank">
      See Code on Github
    </a>
    <image-grid slot="gallery">
      <img slot="md" src="assets/random-cave/screenshot.png">
    </image-grid>
  `,
  'trackicon-invaders': `
    ${navigation('random-cave', 'triangle-pattern')}
    <h2 slot="title">Trackicon Invaders</h2>
    <p slot="description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <li slot="tools-title" class="tools-title">Tools</li>
    <li slot="tools">Javascript</li>
    <li slot="tools">Spotify Web API</li>
    <li slot="tools">p5js</li>
    <a slot="github" href="https://github.com/aitorfernandez/trackicon-invaders" target="_blank">
      See Code on Github
    </a>
    <image-grid slot="gallery">
      <img slot="md" src="assets/trackicon-invaders/screenshot.png">
    </image-grid>
  `,
  'triangle-pattern': `
    ${navigation('trackicon-invaders', 'qadre')}
    <h2 slot="title">Triangle Pattern</h2>
    <p slot="description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <li slot="tools-title" class="tools-title">Tools</li>
    <li slot="tools">Javascript</li>
    <li slot="tools">p5js</li>
    <a slot="github" href="https://github.com/aitorfernandez/triangle-pattern" target="_blank">
      See Code on Github
    </a>
    <image-grid slot="gallery">
      <img slot="md" src="assets/triangle-pattern/screenshot.png">
    </image-grid>
  `
}
