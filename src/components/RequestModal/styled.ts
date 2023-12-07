import styled from 'styled-components'

export const Root = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 800px;
  height: 500px;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: white;
  box-shadow: 0px 4px 10px 0px #00000024;
  overflow: hidden;
`
export const UpperContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  padding: 15px 20px;
  border-bottom: 2px solid black;
`
export const AskImg = styled.img`
  width: 50px;
`
export const RequestInput = styled.input`
  width: 100%;
  height: 60px;
  border: 2px solid #cccccc;
  border-radius: 15px;
  font-size: 25px;
  box-sizing: border-box;
  padding: 18px 10px;
`
export const CenterContainer = styled.div`
  display: flex;
  flex-grow: 1; // 남은 공간을 모두 차지하도록 설정
`
export const LeftContainer = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  box-sizing: border-box;
  padding: 25px;
  width: 399px;
  height: 400px;
  border-right: 1px solid black;
  flex-basis: 0; // 늘어남 기준점을 0으로 설정
  flex-grow: 1; // 빈 공간에 대해 동일한 비율로 늘어나도록 설정
  overflow-y: scroll;
`
export const RightContainer = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  position: relative;
  box-sizing: border-box;
  padding: 25px;
  width: 400px;
  height: 400px;
  flex-basis: 0; // 늘어남 기준점을 0으로 설정
  flex-grow: 1; // 빈 공간에 대해 동일한 비율로 늘어나도록 설정
  overflow-y: scroll;
`

const ButtonFormat = styled.button`
  width: 80px;
  height: 50px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`
export const ButtonContainer = styled.div`
  position: sticky;
  left: 50%;
  bottom: 0px;
  display: flex;
  justify-content: center;
  column-gap: 25px;
`
export const ApplyButton = styled(ButtonFormat)`
  border: 2px solid #7389c1;
  background-color: #94b0f6;
`
export const CancelButton = styled(ButtonFormat)`
  border: 2px solid #e57d7d;
  background-color: #f69494;
`
export const ClearButton = styled(ButtonFormat)`
  width: 100px;
  border: 2px solid #91b2a0;
  background-color: #adedbb;
`
export const RequestButton = styled(ButtonFormat)`
  border: 2px solid #b0b0b0;
  background-color: #d3d3d3;
`
export const EditButton = styled.img`
  position: absolute;
  width: 20px;
  top: 5px;
  right: 5px;
  cursor: pointer;
`
export const EditInput = styled.textarea`
  width: 100%;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  font-size: 16px;
  line-height: 24px;
`
export const ApplyEditButton = styled(ApplyButton)``
