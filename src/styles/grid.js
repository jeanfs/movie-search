import styled from 'styled-components'


/**
 * makeColumn
 * Returns the width of a column
 *
 * @param {number} value - The amount of columns this will be equivalent to.
 */

function makeColumn(value) {
  if(!value) return;

  let width = value / 12 * 100;
  return `width: ${width}%;`;
}


/**
 * Container
 * Wraps all the content of a page in a centered div
 */

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  // SM
  @media (min-width: 576px) {
    max-width: 540px;
  }

  // MD
  @media (min-width: 768px) {
    max-width: 720px;
  }

  // LG
  @media (min-width: 992px) {
    max-width: 960px;
  }

  // XL
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`


/**
 * Row
 * Wraps the columns of a grid system
 */

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`


/**
 * Col
 * The column item of a grid system
 */

export const Col = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  // SM
  @media (min-width: 576px) {
    ${ ( {sm} ) => sm && makeColumn(sm) }
  }

  // MD
  @media (min-width: 768px) {
    ${ ( {md} ) => md && makeColumn(md) }
  }

  // LG
  @media (min-width: 992px) {
    ${ ( {lg} ) => lg && makeColumn(lg) }
  }

  // XL
  @media (min-width: 1200px) {
    ${ ( {xl} ) => xl && makeColumn(xl) }
  }
`
