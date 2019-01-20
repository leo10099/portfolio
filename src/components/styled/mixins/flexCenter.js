import React from 'react'
import styled from 'styled-components'

const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export default function flexCenter(props) {
  return <FlexCenter>{props.children}</FlexCenter>
}
