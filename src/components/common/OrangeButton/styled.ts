import styled from 'styled-components'
import orangeCheckImg from 'assets/images/check_orange.svg'
import whiteCheckImg from 'assets/images/check_white.svg'

export const CheckImg = styled.img`
  content: url(${orangeCheckImg});
  width: 16px;
  height: 16px;
`
export const Root = styled.button`
  width: 96px;
  height: 32px;
  border-radius: 100px;
  border: 1px solid #f39946;
  color: #f39946;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    ${CheckImg} {
      content: url(${whiteCheckImg});
    }
    color: white;
    background-color: #f39946;
  }
`
