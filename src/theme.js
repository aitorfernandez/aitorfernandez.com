const breakpoints = {
  sm: '544px',
  md: '768px'
}

const colors = ['#6F91A6', '#D98943', '#8C8070']

const palette = {
  primary: '#111',
  secondary: colors[Math.floor(Math.random() * colors.length)]
}

const sizes = {
  maxWidth: '768px'
}

export const theme = {
  breakpoints,
  palette,
  sizes
}
