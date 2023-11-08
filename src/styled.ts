import { BODY_MAX_WIDTH, BODY_MIN_WIDTH, HEADER_HEIGHT } from 'constants/layout'
import styled from 'styled-components'
import greenCheckImg from 'assets/images/check_green.png'
import whiteCheckImg from 'assets/images/check_white.png'

export const Root = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: ${BODY_MAX_WIDTH}px;
  min-width: ${BODY_MIN_WIDTH}px;
  min-height: 100vh;
  padding-top: ${HEADER_HEIGHT}px;
  padding-bottom: 30px;
`

export const TagRoot = styled.span`
  &::before {
    content: '#';
  }
`
