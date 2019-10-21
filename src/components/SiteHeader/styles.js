import styled, { css } from 'styled-components'

// Images
import headerBg from './images/bg.jpg'


/**
 * Wrapper
 */

export const Wrapper = styled.header`
  display: flex;
  height: 400px;
  align-items: center;
  background: url(${headerBg}) no-repeat top;
  background-size: cover;
  color: #fff;

  ${props => props.small && css`
    height: 200px;
  `}

`;


/**
 * Title
 */

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 400;
  margin: 0 0 40px;

  ${props => props.small && css`
    font-size: 48px;
  `}

  // LG
  @media (min-width: 992px) {
    margin: 0;
  }

  &:after {
    content: "_";
    color: #f700ee;
  }

  a {
    color: white;
    text-decoration: none;
  }

`;
