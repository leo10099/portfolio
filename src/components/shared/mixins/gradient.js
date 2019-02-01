const GradientTwoColors = (primary, secondary) => `
linear-gradient(to right,
  ${primary},
  ${secondary})
  ;`

const GradientThreeColors = (primary, secondary, tertiary) => `
linear-gradient(to right,
  ${primary},
  ${tertiary},
  ${secondary})
  ;`

export { GradientTwoColors, GradientThreeColors }
