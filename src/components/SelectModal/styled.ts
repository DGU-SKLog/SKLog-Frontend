import styled from 'styled-components'

export const Root = styled.div`
  box-sizing: border-box;
  width: fit-content;
  height: 58px;
  padding: 0 10px;
  display: flex;

  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 10px;
`
export const SelectItem = styled.img`
  margin-right: 13px;
  &:first-child {
    width: 55px;
    margin-right: 10px;
  }
  &:nth-child(5) {
    width: 50px;
  }
  &:last-child {
    margin-right: 5px;
  }

  width: 43px;
  cursor: pointer;
`
