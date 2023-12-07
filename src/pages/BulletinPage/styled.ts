import styled from 'styled-components'
import cancelImg from 'assets/images/cancel.png'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 30px 160px 0px;
  row-gap: 24px;
  overflow: hidden;
  .question_bubble:hover {
    filter: brightness(0.8);
  }
  .question_bubble:active {
    cursor: auto !important;
    filter: brightness(0.6);
  }
`
export const WriteTypo = styled.div`
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 4px;
`

export const GreenTypo = styled.span`
  color: #01cb45;
  font-size: 12px;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`
export const ButtonWrapper = styled.div`
  display: flex;
  column-gap: 8px;
`
export const UpperWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const DownArrowImg = styled.img`
  position: absolute;
  width: 18px;
  height: 18px;
  right: 13px;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
`
export const CancelButton = styled.button`
  width: 96px;
  height: 32px;
  border-radius: 100px;
  border: 1px solid #dddede;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CancelImg = styled.img`
  content: url(${cancelImg});
  width: 11px;
  height: 11px;
  margin-right: 5px;
`

export const TitleInput = styled.input`
  box-sizing: border-box;
  padding: 11px 16px;
  border: 1px solid #c6c6c6;
  border-radius: 8px;
  width: 100%;
  height: 48px;
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
  &::placeholder {
    color: #c6c6c6;
  }
`
export const ContentInput = styled.textarea`
  outline: none;
  box-sizing: border-box;
  padding: 18px 16px;
  border: 1px solid #c6c6c6;
  border-radius: 8px;
  width: 1120px;
  height: 535px;
`
export const QuestionBubble = styled.img`
  position: fixed;
  &:hover {
    filter: brightness(1.2);
  }
  right: 30px;
  bottom: 30px;
  width: 80px;
`
export const HashTagContainer = styled.div`
  position: absolute;
  top: -40px;
  right: 0;
  display: flex;
  column-gap: 3px;
`
export const AddHashTagButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  border: 1px solid #dddede;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  transform: rotate(15deg);
  margin-right: 5px;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(1);
  }
`
export const RobotIcon = styled.img`
  width: 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 1;
  }
`
export const IconWrapper = styled.div`
  position: absolute;
  right: 15px;
`
