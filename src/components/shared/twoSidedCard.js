import React from 'react'

import styled from 'styled-components'
import Image from '../../images/code0.jpg'


const CardSide = styled.div``

const Card = styled.div`
  perspective: 150rem;
  position: relative;
  height: 52rem;
  width: 35rem;
  margin: 0 auto;


  ${CardSide} {
    height: 52rem;
    width: 35rem;
    backface-visibility: hidden;
    border-radius: 4px;
    box-shadow: ${({ theme }) => theme.shadow1};
    transition: all 0.8s ease;
    color: white;
    font-size: 3rem;
    color: ${({ theme }) => theme.dark} !important;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
  }

  &:hover .front {
    transform: rotateY(-180deg);
  }

  .back {
 
    transform: rotateY(180deg);
    background-image: linear-gradient(
      to right bottom,
      ${({ theme }) => theme.darkBlue},
      ${({ theme }) => theme.darkViolet}
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
      ${({ theme }) => theme.blue},
      ${({ theme }) => theme.violet}
    ),
    url(${Image});
`
const CardTitle = styled.h4`
  font-size: 2.3rem;
  font-weight: 300;
  text-transform: uppercase;
  color: ${({ theme }) => theme.light2};
  position: absolute;
  top: 12rem;
  right: 2rem;
  text-align: right;
  width: 75%;
`
const CardTitleBackground = styled.span`
  font-family: "Lato";
  font-size:2..4rem;
  line-height:2;
  padding: 1.2rem 1.7rem;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  background-image: linear-gradient(
    to right bottom,
    ${({ theme }) => theme.darkBlue},
    ${({ theme }) => theme.darkViolet}
  );
`

const CardBody = styled.div`
  padding: 3rem;

  ul {
    list-style: none;
    width: 100%;
    height:100%;
    margin: 0 auto;
    display:flex;
    align-items:center;
    flex-direction:column;

    li {
      text-align: center;
      font-size: 1.5rem;
      padding: 2rem;

      &:not(:last-child) {
        border-bottom: 1px solid lightgray;
        width:80%;
      }
    }
  }
`

export default function TwoSidedCard(props) {
  return (
    <Card>
      <CardSide className="front">
        <CardImage>&nbsp;</CardImage>
        <CardTitle>
          <CardTitleBackground>¿Quién sos en Game Of Thrones?</CardTitleBackground>
        </CardTitle>
        <CardBody>
          <ul>
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>Puppeteer</li>
          </ul>
        </CardBody>
      </CardSide>
      <CardSide className="back">
        <CardBody />
      </CardSide>
    </Card>
  )
}
