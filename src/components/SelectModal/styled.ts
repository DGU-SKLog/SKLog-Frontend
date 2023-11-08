import { ModalWrapper } from 'components/common/commonStyle'
import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  column-gap: 13px;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 58px;
  border: 2px solid black;
  border-radius: 10px;
`
export const SelectItem = styled.img`
  width: 43px;
  cursor: pointer;
`
export const InvisibleModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
`
