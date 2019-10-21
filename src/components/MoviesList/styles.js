import styled, { css } from 'styled-components'


/**
 * List
 */

export const List = styled.div`
  padding-top: 100px;
`;


/**
 * Title
 */

export const Title = styled.h2`
  font-size: 36px;
  border-bottom: 1px solid #e5e5e5;
  font-weight: 400;
  padding-bottom: 10px;
  margin: 0 0 50px;

  &:after {
    content: "_";
    color: #f700ee;
  }
`;


/**
 * Card
 */

export const Card = styled.div`
  margin: 0 0 30px;
  text-align: center;
  cursor: pointer;

  a {
    color: inherit;
    text-decoration: none;
  }
`;


/**
 * Card: thumb
 *
 * The wrapper will have a padding-top to create a proportional height,
 * this will allow to create a standard height and trimg the edges of the
 * bigger thumbs.
 */

export const CardThumb = styled.figure`
  position: relative;
  margin: 0;
  overflow: hidden;
  box-shadow: 1px 2px 5px rgba(0,0,0,.2);
  border-radius: 8px;
  padding-top: 151%;
  ${props => props.noThumb && css`
    background: white;
    color: palevioletred;
  `}

  img {
    display: block;
    width: auto;
    min-width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
`;


/**
 * Card Title
 */

export const CardTitle = styled.h3`
  margin: 20px;
  font-weight: 500;
`;


/**
 * Card Button
 */

export const CardButton = styled.a`
  display: inline-flex;
`;
