import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
  &,
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    text-shadow: none;
    padding: 1.5rem 4rem;
    display: block;
    width: 50%;
    margin: 6rem auto auto auto;
    border-radius: 4rem;
    transition: all 0.2s;
    position: relative;
    font-size: ${({ fontSize }) => fontSize};
    opacity: 0.85;
    letter-spacing: 4px;
    font-weight: bold;

    border: none;
    cursor: pointer;

    background-blend-mode: screen;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.danger},
      ${({ theme }) => theme.secondary}
    );
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(black, 0.2);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(black, 0.2);
  }

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 4rem;
    position: absolute;
    top: 0;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.danger},
      ${({ theme }) => theme.secondary}
    );
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }
`

export default function flashyButton(props) {
  return <Button fontSize={props.fontSize}>{props.children}</Button>
}
