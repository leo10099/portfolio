import React from 'react'

import styled from 'styled-components'
import mq from '../shared/mixins/mediaQueries'
import Image from '../../images/code1.jpg'

const CardSide = styled.div``

const Card = styled.div`
  perspective: 150rem;
  position: relative;
  height: 52rem;
  width: 35rem;
  margin: 4rem auto;

  ${mq.phone`
  margin: 4rem auto;
  width: 85vw;
    `}

${mq.tablet`
  margin: 4rem auto;

    `}

  ${CardSide} {
    height: 52rem;
    width: 35rem;
    backface-visibility: hidden;
    background: ${({ theme }) => theme.light};
    opacity: 0.75;
    border-radius: 4px;
    box-shadow: ${({ theme }) => theme.shadow1};
    transition: all 0.8s ease;
    color: white;
    font-size: 3rem;
    color: ${({ theme }) => theme.dark} !important;
    position: absolute;
    overflow: hidden;

    ${mq.phone`
      width: 85vw;
      margin-left:auto;
      margin-right:auto;
    `}
  }

  &:hover .front {
    transform: rotateY(-180deg);
  }

  .back {
    transform: rotateY(180deg);
    background-image: linear-gradient(
      to right bottom,
      ${({ theme }) => theme.primaryDark},
      ${({ theme }) => theme.secondaryDark}
    );
  }

  &:hover .back {
    transform: rotateY(0);
  }
`
const CardImage = styled.div`
  height: 23rem;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  background-blend-mode: screen;
  background-image: linear-gradient(
      to right bottom,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.secondary},
      ${({ theme }) => theme.danger}
    ),
    url(${Image});
`
const CardTitle = styled.h4`
  font-size: 2.3rem;
  font-weight: 300;
  text-transform: uppercase;
  color: ${({ theme }) => theme.light2};
  position: absolute;
  top: 12.5rem;
  right: 2rem;
  text-align: right;
  width: 76%;
`
const CardTitleBackground = styled.span`
  font-family: 'Lato';
  font-size: 2.4rem;
  line-height: 2;
  padding: 1.2rem 1.7rem;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  background-image: linear-gradient(
    to right bottom,
    ${({ theme }) => theme.primaryDark},
    ${({ theme }) => theme.secondaryDark}
  );
`

const CardBody = styled.div`
  padding: 3rem;

  ul {
    list-style: none;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    position: relative;
    top: 1rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    li {
      text-align: center;
      font-size: 1.5rem;
      padding: 2rem;

      &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.light2};
        width: 66.6%;
      }
    }
  }
`

export default function TwoSidedCard(props) {
  const { data } = props
  return (
    <Card>
      <CardSide className="front">
        <CardImage>&nbsp;</CardImage>
        <CardTitle>
          <CardTitleBackground>{data.shortName}</CardTitleBackground>
        </CardTitle>
        <CardBody>
          <ul>
            {data.tech && data.tech.length
              ? data.tech.map(item => <li>{item}</li>)
              : null}
          </ul>
        </CardBody>
      </CardSide>
      <CardSide className="back">
        <CardBody />
      </CardSide>
    </Card>
  )
}
