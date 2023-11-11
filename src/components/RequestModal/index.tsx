import { FC, useEffect, useRef, useState } from 'react'
import {
  ApplyButton,
  AskImg,
  ButtonContainer,
  CancelButton,
  CenterContainer,
  ClearButton,
  LeftContainer,
  RequestButton,
  RequestInput,
  RightContainer,
  Root,
  UpperContainer,
} from './styled'
import { ModalWrapper } from 'components/common/commonStyle'
import AskIcon from 'assets/images/ask_icon.svg'
import ReactMarkDown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
type RequestModalProps = {
  closeModal: () => void
  content: string
  applyAIText: (content: string) => void
}

export const RequestModal: FC<RequestModalProps> = ({ closeModal, content, applyAIText }) => {
  const onClickApplyButton = () => {
    // 적용 api
    applyAIText(apiResponse)
    closeModal()
  }
  const onClickClearButton = () => {
    //원래 상태로 초기화
  }
  const onClickModal = (e: React.MouseEvent) => {
    e.stopPropagation()
  }
  const [apiResponse, setApiResponse] = useState('API 응답')
  const inputRef = useRef<HTMLInputElement>()
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <ModalWrapper onClick={closeModal}>
      <Root onClick={onClickModal}>
        <UpperContainer>
          <AskImg src={AskIcon} />
          <RequestInput placeholder="AI에게 요청할 내용을 입력하세요!" ref={inputRef} />
          <RequestButton>요청</RequestButton>
        </UpperContainer>
        <CenterContainer>
          <LeftContainer>
            <ReactMarkDown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkDown>
          </LeftContainer>

          <RightContainer>
            <ReactMarkDown rehypePlugins={[rehypeRaw]}>{apiResponse}</ReactMarkDown>
            <ButtonContainer>
              <ApplyButton onClick={onClickApplyButton}>적용</ApplyButton>
              <CancelButton onClick={closeModal}>취소</CancelButton>
              <ClearButton>새 질문</ClearButton>
            </ButtonContainer>
          </RightContainer>
        </CenterContainer>
      </Root>
    </ModalWrapper>
  )
}
