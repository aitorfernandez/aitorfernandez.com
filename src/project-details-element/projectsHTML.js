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
  'lorem-ipsum': `
    ${navigation('stet-clite', 'cupiditate-cumque')}
    <h2 slot="title">Lorem Ipsum</h2>
    <p slot="description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <li slot="tools-title" class="tools-title">Tools</li>
    <li slot="tools">Javascript</li>
    <li slot="tools">Development</li>
    <a slot="github" href="/" target="_blank">
      See on Github
    </a>
    <image-grid slot="gallery">
      <img slot="st" src="https://www.w3schools.com/w3images/underwater.jpg">
      <img slot="st" src="https://www.w3schools.com/w3images/ocean.jpg">
      <img slot="st" src="https://www.w3schools.com/w3images/wedding.jpg">
      <img slot="nd" src="https://www.w3schools.com/w3images/mountainskies.jpg">
      <img slot="nd" src="https://www.w3schools.com/w3images/rocks.jpg">
    </image-grid>
  `,

  'cupiditate-cumque': `
    ${navigation('lorem-ipsum', 'sit-tempore')}
    <h2 slot="title">Cupiditate Cumque</h2>
    <p slot="description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <li slot="tools-title" class="tools-title">Tools</li>
    <li slot="tools">Javascript</li>
    <li slot="tools">Development</li>
    <a slot="github" href="/" target="_blank">
      See on Github
    </a>
    <image-grid slot="gallery">
      <img slot="st" src="https://www.w3schools.com/w3images/underwater.jpg">
      <img slot="st" src="https://www.w3schools.com/w3images/ocean.jpg">
      <img slot="st" src="https://www.w3schools.com/w3images/wedding.jpg">
      <img slot="nd" src="https://www.w3schools.com/w3images/mountainskies.jpg">
      <img slot="nd" src="https://www.w3schools.com/w3images/rocks.jpg">
    </image-grid>
  `,

  'sit-tempore': `
    ${navigation('cupiditate-cumque', 'stet-clite')}
    <h2 slot="title">Sit Tempore</h2>
    <p slot="description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <li slot="tools-title" class="tools-title">Tools</li>
    <li slot="tools">Javascript</li>
    <li slot="tools">Development</li>
    <a slot="github" href="/" target="_blank">
      See on Github
    </a>
    <image-grid slot="gallery">
      <img slot="st" src="https://www.w3schools.com/w3images/underwater.jpg">
      <img slot="st" src="https://www.w3schools.com/w3images/ocean.jpg">
      <img slot="st" src="https://www.w3schools.com/w3images/wedding.jpg">
      <img slot="nd" src="https://www.w3schools.com/w3images/mountainskies.jpg">
      <img slot="nd" src="https://www.w3schools.com/w3images/rocks.jpg">
    </image-grid>
  `,
  'stet-clite': `
    ${navigation('sit-tempore', 'lorem-ipsum')}
    <h2 slot="title">Stet Clite</h2>
    <p slot="description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <li slot="tools-title" class="tools-title">Tools</li>
    <li slot="tools">Javascript</li>
    <li slot="tools">Development</li>
    <a slot="github" href="/" target="_blank">
      See on Github
    </a>
    <image-grid slot="gallery">
      <img slot="st" src="https://www.w3schools.com/w3images/underwater.jpg">
      <img slot="st" src="https://www.w3schools.com/w3images/ocean.jpg">
      <img slot="st" src="https://www.w3schools.com/w3images/wedding.jpg">
      <img slot="nd" src="https://www.w3schools.com/w3images/mountainskies.jpg">
      <img slot="nd" src="https://www.w3schools.com/w3images/rocks.jpg">
    </image-grid>
  `

  // Side projects

  // Lab & prototyping
}
