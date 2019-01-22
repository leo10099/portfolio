import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
  &,
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    transition: all 0.2s;
    position: relative;
    font-size: ${({ fontSize }) => fontSize};

    //Change for the <button> element
    border: none;
    cursor: pointer;
  }
`

export default function flashyButton(props) {
  return <Button fontSize={props.fontSize} />
}
