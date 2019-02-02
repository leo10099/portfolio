import React from 'react'
import styled from 'styled-components'
import { GradientThreeColors } from './mixins/gradient'
import mq from '../../components/shared/mixins/mediaQueries'

const Rule = styled.div`
  display: block;
  height: 3px;
  width: 230px;

  ${
    // @ts-ignore
    mq.tablet`width: 150px`
  }
    ${
      // @ts-ignore
      mq.phone`width: 70%;
      margin: auto
    `
    }
  background: ${({ theme }) =>
    GradientThreeColors(theme.primaryDark, theme.danger, theme.secondaryDark)};
  margin-right: auto;
  margin-bottom: 4px;
`
export default function Divider() {
  return <Rule />
}
