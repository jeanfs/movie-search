import styled from 'styled-components'

// Images
import headerBg from './images/bg.jpg'

/**
 * Wrapper
 */
export const Wrapper = styled.header`
  display: flex;
  height: 768px;
  background: url(${headerBg}) no-repeat center;
  background-size: cover;
`;

/**
 * Title
 */
export const Title = styled.h1`
  color: #f00
`;
