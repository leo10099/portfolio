import React from 'react'
import styled from 'styled-components'
import mq from '../../components/shared/mixins/mediaQueries'
import landscape from '../shared/mixins/orientationLandscape'

const NormalButton = styled.button`
  position: relative;
  text-align: center;
  color: ${({ theme }) => theme.ligth};
  top: 70%;
  border: 0;
  box-shadow: none;

  &,
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    text-shadow: none;
    padding: 1.5rem 3.5rem;
    ${landscape.tablet`padding: 1rem 2.6rem`}
    display: block;
    width: 50%;
    ${mq.phone`width: 66%;`}
    ${landscape.tablet`width: 100%;`}
    border-radius: 4rem;
    transition: all 0.2s;
    position: relative;
    font-size: ${({ fontSize }) => fontSize};
    letter-spacing: 4px;
    ${mq.phone`letter-spacing:3px;`}
    font-weight: 500;
    color: ${({ theme }) => theme.secondary};

    border: none;
    cursor: pointer;
  }

  &:hover {
    transform: translateY(-3px);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
  }

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 4rem;
    position: absolute;
    top: 0;
    border: 2px solid ${({ theme }) => theme.light2};

    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }
`

export default function Button(props) {
  return (
    <NormalButton
      fontSize={props.fontSize}
      position={props.position}
      onClick={props.onClick}
    >
      {props.children}
    </NormalButton>
  )
}
