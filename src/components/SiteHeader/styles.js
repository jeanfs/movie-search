import styled from 'styled-components'

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
`;

/**
 * Title
 */
export const Title = styled.h1`
  font-size: 60px;
  font-weight: 400;
  color: inherit;
  margin: 0;

  &:after {
    content: "_";
    color: #f700ee;
  }
`;
