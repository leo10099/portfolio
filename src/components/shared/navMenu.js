import React, { Component } from 'react'
import styled from 'styled-components'
import { GradientThreeColors } from './mixins/gradient'
import LocaleContext from '../shared/localeContext'
import mq from '../../components/shared/mixins/mediaQueries'

import {
  EN_MENU_HOME,
  EN_MENU_ABOUT,
  EN_MENU_SKILLS,
  EN_MENU_WORKS,
} from '../../locales/en.json'
import {
  ES_MENU_HOME,
  ES_MENU_ABOUT,
  ES_MENU_SKILLS,
  ES_MENU_WORKS,
} from '../../locales/es.json'

const NavMenuContainer = styled.section`
  font-family: 'Lato';

  .navigation__checkbox {
    display: none;
  }

  .navigation__button {
    background-color: ${({ theme }) => theme.light};
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    position: fixed;
    top: 6rem;
    right: 6rem;
    ${// @ts-ignore
    mq.phone` 
      top: 2rem;
      right: 2rem;
      height: 6rem;
    width: 6rem;
    `}
    z-index: 2000;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
    text-align: center;
    cursor: pointer;
  }

  .navigation__background {
    height: 6rem;
    width: 6rem;

    border-radius: 50%;
    position: fixed;
    top: 6.5rem;
    right: 6.5rem;

    background: ${({ theme }) =>
      GradientThreeColors(
        theme.dangerDark,
        theme.primaryDarker,
        theme.secondaryDarker
      )};
    z-index: 1000;
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);

    ${// @ts-ignore
    mq.phone`
      top: 2rem;
      right:2rem;
      height: 6rem;
    width: 6rem;
    `}
  }

  .navigation__nav {
    height: 100vh;
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1500;

    opacity: 0;
    width: 0;

    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .navigation__list {
    list-style: none;
    text-align: center;
  }

  .navigation__item {
    margin: 2.5rem 1rem;
  }

  .navigation__link {
    display: inline-block;
    font-size: 3rem;

    font-weight: 300;
    padding: 1rem 2rem;
    color: ${({ theme }) => theme.light2};
    text-decoration: none;
    text-transform: uppercase;
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      #ebebeb 50%
    );

    background-size: 250%;
    transition: all 0.4s;

    span {
      margin-right: 1.5rem;
      display: inline-block;
    }

    &:hover,
    &:active {
      background-position: 100%;
      color: ${({ theme }) => theme.secondaryDark};
      transform: translateX(1rem);
    }
  }

  .navigation__checkbox:checked ~ .navigation__background {
    transform: scale(80);
  }

  .navigation__checkbox:checked ~ .navigation__nav {
    opacity: 1;
    width: 100%;
  }

  .navigation__icon {
    position: relative;
    top: 3.5rem;
    ${// @ts-ignore
    mq.phone`
      top: 3rem;
    `}

    &,
    &::before,
    &::after {
      width: 3rem;
      height: 0.2rem;
      background-color: ${({ theme }) => theme.dark};
      display: inline-block;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }

    &::before {
      top: -0.8rem;
    }

    &::after {
      top: 0.8rem;
    }
  }

  .navigation__checkbox:checked + .navigation__button .navigation__icon {
    background-color: transparent;
  }

  .navigation__checkbox:checked
    + .navigation__button
    .navigation__icon::before {
    top: 0;
    transform: rotate(135deg);
  }

  .navigation__checkbox:checked + .navigation__button .navigation__icon::after {
    top: 0;
    transform: rotate(-135deg);
  }
`

export default class NavMenu extends Component {
  inputRef = React.createRef()

  handleMenuItemClick = () => {
    this.inputRef.current.click()
  }
  render() {
    return (
      <NavMenuContainer>
        <LocaleContext.Consumer>
          {({ locale }) => (
            <>
              <input
                type="checkbox"
                className="navigation__checkbox"
                id="navi-toggle"
                ref={this.inputRef}
              />

              <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
              </label>

              <div className="navigation__background">&nbsp;</div>

              <nav className="navigation__nav">
                <ul className="navigation__list">
                  <li
                    className="navigation__item"
                    onClick={this.handleMenuItemClick}
                  >
                    <a href="#Header" className="navigation__link">
                      {locale === 'en' ? EN_MENU_HOME : ES_MENU_HOME}
                    </a>
                  </li>
                  <li
                    className="navigation__item"
                    onClick={this.handleMenuItemClick}
                  >
                    <a href="#About" className="navigation__link">
                      {locale === 'en' ? EN_MENU_ABOUT : ES_MENU_ABOUT}
                    </a>
                  </li>
                  <li
                    className="navigation__item"
                    onClick={this.handleMenuItemClick}
                  >
                    <a href="#Skills" className="navigation__link">
                      {locale === 'en' ? EN_MENU_SKILLS : ES_MENU_SKILLS}
                    </a>
                  </li>
                  <li
                    className="navigation__item"
                    onClick={this.handleMenuItemClick}
                  >
                    <a href="#Projects" className="navigation__link">
                      {locale === 'en' ? EN_MENU_WORKS : ES_MENU_WORKS}
                    </a>
                  </li>
                </ul>
              </nav>
            </>
          )}
        </LocaleContext.Consumer>
      </NavMenuContainer>
    )
  }
}
