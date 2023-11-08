import { FC } from 'react'
import {
  ApplyButton,
  AskImg,
  ButtonContainer,
  CancelButton,
  CenterContainer,
  CenterTypo,
  CenterTypoWrapper,
  ClearButton,
  LeftContainer,
  RequestInput,
  RightContainer,
  Root,
  UpperContainer,
  UpperTypo,
} from './styled'
import { GreenButton, ModalExitButton, ModalFooter, ModalWrapper, WhiteButton } from 'components/common/commonStyle'
import AskIcon from 'assets/images/ask_icon.svg'
type DeleteCommentModalProps = {
  closeModal: () => void
  content: string
  // deleteComment: () => void
}

export const DeleteCommentModal: FC<DeleteCommentModalProps> = ({ closeModal, content }) => {
  const onClickDeleteButton = () => {
    // deleteComment()
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
              <CancelButton>취소</CancelButton>
              <ClearButton>새 질문</ClearButton>
            </ButtonContainer>
          </RightContainer>
        </CenterContainer>
      </Root>
    </ModalWrapper>
  )
}
