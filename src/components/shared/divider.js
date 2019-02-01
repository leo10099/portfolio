import React from 'react'
import styled from 'styled-components'
import { GradientThreeColors } from './mixins/gradient'

const Rule = styled.div`
  display: block;
  height: 3px;
  width: 250px;
  background: ${({ theme }) =>
    GradientThreeColors(theme.primaryDark, theme.danger, theme.secondaryDark)};
  margin-right: auto;
  margin-bottom: 4px;
`
export default function Divider() {
  return <Rule />
}
