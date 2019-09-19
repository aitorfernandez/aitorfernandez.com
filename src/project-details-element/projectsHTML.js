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
      As part of my role as Frontend Developer at Gamesys, I worked in the process of product development for a variety of poker games and multiline slot games.
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
      An iOS Poker Puzzle released in 2016 released on App Store. The game uses Cocos2dx-3.X Engine.
    </p>
    <p slot="description">
      The game generates a variety of puzzles to help the player to understand the rules and mathematics of Texas Hold'em Poker. There are seven puzzles with three levels of difficulty each; they are about: Poker Hands, Poker Positions, Best Hands, Flop Textures, Outs, Pot Odds, PreFlop Strategy.
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
      Roguelike is a subgenre of role-playing video game characterized by a dungeon crawl through procedurally generated levels and turn-based gameplay.
    </p>
    <p slot="description">
      I started this project as a group of ideas for the 7DRL Challenge 2019.
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
      On a 4x4 grid, the algorithm tries to find the correct path using all available squares.
    </p>
    <p slot="description">
      The algorithm starts in the bottom right row and continues straight until hits the last element, or random values move up to the next row. Then, the algorithm starts again.
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
      TrackiconInvaders is a Space Invaders style visual representation using Spotify Web API seeds recommendations.
    </p>
    <p slot="description">
      When the user selects a genre, the game gets the recommendations from Spotify Web API and generates a type of Invader as a grid of 5x5 in an attempt to create the classic Space Invaders game. Each Invader is made using the name of the track related to the music genre previously selected.
    </p>
    <p slot="description">
      When the Identicon / Invader is destroyed, a 30 seconds preview of the song is played.
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
      I'm using p5js to explore generative art and create random colour compositions using a triangle primitive as a base. Considering rows, columns and size, the starting point for the pattern is quite straightforward. Random values indicate if the algorithm draws one triangle or four smaller triangles.
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
