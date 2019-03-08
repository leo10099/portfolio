import React from 'react'

import styled from 'styled-components'
import mq from '../shared/mixins/mediaQueries'

import flexCenter from './mixins/flexCenter'

import CardControllers from '../../components/projects/projectCardControlls'

const CardSide = styled.div``

const Card = styled.div`
  perspective: 150rem;
  position: relative;
  height: 52rem;
  width: 35rem;
  margin: 4rem auto;

  ${mq.phone`
      width: 300px;
      height:500px;
      margin-left:auto;
      margin-right:auto;
  
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
      width: 300px;
      height: 500px;
      margin-left: auto;
      margin-right: auto;
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

  .back-title{
    color: ${({ theme }) => theme.light};
    font-size: 4.5rem;
    text-transform: uppercase;
    text-align:center;
  }
  .back-subtitle{
    color: ${({ theme }) => theme.light};
    font-size: 2rem;
    font-weight:bold;
    text-transform: uppercase;
    padding-top: 3rem
  }
`
const CardImage = styled.div`
  height: 23rem;
  background-position: center;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  background-blend-mode: screen;
  background-image: linear-gradient(
      to right bottom,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.secondary},
      ${({ theme }) => theme.danger}
    ),
    url(${props => props.imagePath});
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
  padding: 1.5rem;
  ${flexCenter()}
  height: 280px;

  ul {
    list-style: none;
    height: 100%;
    width: 100%;
    ${flexCenter()}
    text-align: center;

    li {
      text-align: center;
      font-size: 1.4rem;
      padding: 1.8rem;

      &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.light2};
        width: 50%;
      }
    }
  }
`

export default function TwoSidedCard(props) {
  const { data } = props

  return (
    <Card>
      <CardSide className="front">
        <CardImage imagePath={data.pic}>&nbsp;</CardImage>
        <CardTitle>
          <CardTitleBackground>{data.shortName}</CardTitleBackground>
        </CardTitle>
        <CardBody>
          <ul>
            {data.tech && data.tech.length
              ? data.tech.map((item, index) => <li key={index}>{item}</li>)
              : null}
          </ul>
        </CardBody>
      </CardSide>
      <CardSide className="back">
        <CardBody>
          <span className="back-title">{data.year}</span>
          <span className="back-subtitle">{data.type}</span>
          <CardControllers url={data.url} />
        </CardBody>
      </CardSide>
    </Card>
  )
}
