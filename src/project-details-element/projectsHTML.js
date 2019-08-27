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

function navigation(slug) {
  return `
    ${topPrevWork(slug)}
    ${topNextWork(slug)}
    ${bottomPrevWork(slug)}
    ${bottomNextWork(slug)}
    ${close()}
  `
}

export const projectsHTML = {
  // Work
  'lorem-ipsum': `
    ${navigation('lorem-ipsum')}
    <h2 slot="title">Veuve Clicquot Rich</h2>
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

  `,

  'sit-tempore': `

  `,
  'stet-clite': `

  `

  // Side projects

  // Lab & prototyping
}
