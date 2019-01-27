import { css } from 'styled-components'

const sizes = {
  desktop: 1000,
  tablet: 800,
  phone: 600,
}

// Iterate through the sizes and create a media template
const landscape = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) and (orientation: landscape) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export default landscape
