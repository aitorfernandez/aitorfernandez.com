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
    <li slot="tools">Javascript</li>
    <li slot="tools">Blockchain</li>
    <image-grid slot="gallery">
      <img slot="st" src="https://www.w3schools.com/w3images/underwater.jpg">
      <img slot="st" src="https://www.w3schools.com/w3images/ocean.jpg">
      <img slot="st" src="https://www.w3schools.com/w3images/wedding.jpg">
      <img slot="nd" src="https://www.w3schools.com/w3images/mountainskies.jpg">
      <img slot="nd" src="https://www.w3schools.com/w3images/rocks.jpg">
    </image-grid>
  `,
  'gamesys': `
    ${navigation('qadre', 'seven-monkeys')}
    <h2 slot="title">Gamesys</h2>
    <p slot="description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <li slot="tools-title" class="tools-title">Tools</li>
    <li slot="tools">Javascript</li>
    <li slot="tools">Lua</li>
    <li slot="tools">Ruby</li>
    <li slot="tools">HTML5/CSS3</li>
    <image-grid slot="gallery">
      <img slot="st" src="https://www.w3schools.com/w3images/underwater.jpg">
      <img slot="st" src="https://www.w3schools.com/w3images/ocean.jpg">
      <img slot="st" src="https://www.w3schools.com/w3images/wedding.jpg">
      <img slot="nd" src="https://www.w3schools.com/w3images/mountainskies.jpg">
      <img slot="nd" src="https://www.w3schools.com/w3images/rocks.jpg">
    </image-grid>
  `,

  // Side projects
  'seven-monkeys': `
    ${navigation('gamesys', 'random-cave')}
    <h2 slot="title">Seven Monkeys</h2>
    <p slot="description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <li slot="tools-title" class="tools-title">Tools</li>
    <li slot="tools">Cocos2d-x</li>
    <li slot="tools">C++</li>
    <li slot="tools">iOS</li>
    <a slot="github" href="https://github.com/aitorfernandez/seven-monkeys" target="_blank">
      See on Github
    </a>
    <image-grid slot="gallery">
      <img slot="st" src="assets/seven-monkeys/screenshot-1.png">
      <img slot="st" src="assets/seven-monkeys/screenshot-2.png">
      <img slot="nd" src="assets/seven-monkeys/screenshot-3.png">
      <img slot="nd" src="assets/seven-monkeys/screenshot-4.png">
    </image-grid>
  `,

  // Lab & prototyping
  'random-cave': `
    ${navigation('seven-monkeys', 'triangle-pattern')}
    <h2 slot="title">Random Cave</h2>
    <p slot="description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <li slot="tools-title" class="tools-title">Tools</li>
    <li slot="tools">Javascript</li>
    <li slot="tools">p5js</li>
    <a slot="github" href="https://github.com/aitorfernandez/random-cave" target="_blank">
      See on Github
    </a>
    <image-grid slot="gallery">
      <img slot="st" src="assets/random-cave/screenshot-1.png">
      <img slot="nd" src="assets/random-cave/screenshot-2.png">
      <img slot="nd" src="assets/random-cave/screenshot-3.png">
    </image-grid>
  `,
  'triangle-pattern': `
    ${navigation('random-cave', 'qadre')}
    <h2 slot="title">Triangle Pattern</h2>
    <p slot="description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <li slot="tools-title" class="tools-title">Tools</li>
    <li slot="tools">Javascript</li>
    <li slot="tools">p5js</li>
    <a slot="github" href="https://github.com/aitorfernandez/triangle-pattern" target="_blank">
      See on Github
    </a>
    <image-grid slot="gallery">
      <img slot="st" src="assets/triangle-pattern/screenshot-1.png">
      <img slot="st" src="assets/triangle-pattern/screenshot-2.png">
      <img slot="nd" src="assets/triangle-pattern/screenshot-3.png">
      <img slot="nd" src="assets/triangle-pattern/screenshot-4.png">
    </image-grid>
  `
}
