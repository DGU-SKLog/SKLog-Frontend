import { BODY_MAX_WIDTH, BODY_MIN_WIDTH, HEADER_HEIGHT } from 'constants/layout'
import styled from 'styled-components'
import greenCheckImg from 'assets/images/check_green.png'
import whiteCheckImg from 'assets/images/check_white.png'

export const Root = styled.div`
  margin: 0 auto;
  max-width: ${BODY_MAX_WIDTH}px;
  min-width: ${BODY_MIN_WIDTH}px;
  box-sizing: border-box;
  padding-top: ${HEADER_HEIGHT}px;
`

export const TagRoot = styled.span`
  &::before {
    content: '#';
  }
`
