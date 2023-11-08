import { FC } from 'react'
import {
  ApplyButton,
  AskImg,
  ButtonContainer,
  CancelButton,
  CenterContainer,
  ClearButton,
  LeftContainer,
  RequestInput,
  RightContainer,
  Root,
  UpperContainer,
} from './styled'
import { ModalWrapper } from 'components/common/commonStyle'
import AskIcon from 'assets/images/ask_icon.svg'
type RequestModalProps = {
  closeModal: () => void
  content: string
}

export const RequestModal: FC<RequestModalProps> = ({ closeModal, content }) => {
  const onClickApplyButton = () => {
    // 적용 api
  }
  const onClickClearButton = () => {
    //원래 상태로 초기화
  }
  const onClickModal = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <ModalWrapper onClick={closeModal}>
      <Root onClick={onClickModal}>
        <UpperContainer>
          <AskImg src={AskIcon} />
          <RequestInput placeholder="AI에게 요청할 내용을 입력하세요!" />
        </UpperContainer>
        <CenterContainer>
          <LeftContainer>{content}</LeftContainer>
          <RightContainer>
            <ButtonContainer>
              <ApplyButton>적용</ApplyButton>
              <CancelButton onClick={closeModal}>취소</CancelButton>
              <ClearButton>새 질문</ClearButton>
            </ButtonContainer>
          </RightContainer>
        </CenterContainer>
      </Root>
    </ModalWrapper>
  )
}
