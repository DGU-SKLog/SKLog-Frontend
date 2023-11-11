import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
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
import { CreateRequestResponseProps, createRequest } from 'api/createRequest'
type RequestModalProps = {
  closeModal: () => void
  content: string
  applyAIText: (content: string) => void
  response: string | null
}

export const RequestModal: FC<RequestModalProps> = ({ closeModal, content, applyAIText, response }) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [apiResponse, setApiResponse] = useState(response ?? '')
  const inputRef = useRef<HTMLInputElement>()
  const onClickApplyButton = () => {
    // 적용 api
    applyAIText(apiResponse)
    closeModal()
  }
  const onClickClearButton = () => {
    setInputValue('')
    setApiResponse('')
    inputRef.current.focus()
  }
  const onClickRequestButton = () => {
    createRequest({ content: content, request: inputValue }).then((res: CreateRequestResponseProps) => {
      setApiResponse(res.content)
    })
  }
  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }
  const onClickModal = (e: React.MouseEvent) => {
    e.stopPropagation()
  }
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
    if (response) {
      setApiResponse(response)
    }
  }, [])

  return (
    <ModalWrapper onClick={closeModal}>
      <Root onClick={onClickModal}>
        <UpperContainer>
          <AskImg src={AskIcon} />
          <RequestInput
            placeholder="AI에게 요청할 내용을 입력하세요!"
            ref={inputRef}
            value={inputValue}
            onChange={onChange}
          />
          <RequestButton onClick={onClickRequestButton}>요청</RequestButton>
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
              <ClearButton onClick={onClickClearButton}>새 질문</ClearButton>
            </ButtonContainer>
          </RightContainer>
        </CenterContainer>
      </Root>
    </ModalWrapper>
  )
}
