import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import {
  ApplyButton,
  ApplyEditButton,
  AskImg,
  ButtonContainer,
  CancelButton,
  CenterContainer,
  ClearButton,
  EditButton,
  EditInput,
  LeftContainer,
  RequestButton,
  RequestInput,
  RightContainer,
  Root,
  UpperContainer,
} from './styled'
import { ModalWrapper } from 'components/common/commonStyle'
import AskIcon from 'assets/images/ask_icon.svg'
// import ReactMarkDown from 'react-markdown'
import MarkdownPreview from '@uiw/react-markdown-preview'
import rehypeRaw from 'rehype-raw'
import { CreateRequestResponseProps, createRequest } from 'api/createRequest'
import { Spinner } from 'components/Spinner'
type RequestModalProps = {
  closeModal: () => void
  content: string
  applyAIText: (content: string) => void
  response: string | null
  isLoading: boolean
}
import fixImg from 'assets/images/select_items/fix.svg'
export const RequestModal: FC<RequestModalProps> = ({ closeModal, content, applyAIText, response, isLoading }) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [apiResponse, setApiResponse] = useState('')
  const [isRequesting, setIsRequesting] = useState(false)
  const [isEditButtonShown, setIsEditButtonShown] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const requestInputRef = useRef<HTMLInputElement>()
  const EditInputRef = useRef<HTMLTextAreaElement>()
  const [editValue, setEditValue] = useState(apiResponse)
  const onClickApplyButton = () => {
    applyAIText(apiResponse)
    closeModal()
  }
  const onClickClearButton = () => {
    if (isEditing) return
    setInputValue('')
    setApiResponse('')
    requestInputRef.current.focus()
  }
  const onClickRequestButton = () => {
    if (inputValue == '') return
    setIsRequesting(true)
    createRequest({ content: content, request: inputValue }).then((res: CreateRequestResponseProps) => {
      setApiResponse(res.content)
      setIsRequesting(false)
    })
  }
  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }
  const onClickModal = (e: React.MouseEvent) => {
    e.stopPropagation()
  }
  const onRightContainerMouseOver = () => {
    setIsEditButtonShown(true)
  }
  const onRightContainerMouseLeave = () => {
    setIsEditButtonShown(false)
  }
  const onClickEditButton = () => {
    setIsEditing(true)
  }
  const onEditValueChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setEditValue(e.target.value)
  }
  const onClickApplyEditButton = () => {
    if (isLoading) return
    setApiResponse(editValue)
    setIsEditing(false)
  }
  const onClickCancelButton = () => {
    if (isEditing) {
      setIsEditing(false)
      setEditValue(apiResponse)
    } else {
      closeModal()
    }
  }
  useEffect(() => {
    if (requestInputRef.current) {
      requestInputRef.current.focus()
    }
  }, [])
  useEffect(() => {
    if (response) setApiResponse(response)
  }, [response])

  useEffect(() => {
    if (isEditing) EditInputRef?.current?.focus()
  }, [isEditing])

  useEffect(() => {
    setEditValue(apiResponse)
  }, [apiResponse])

  return (
    <ModalWrapper onClick={closeModal}>
      <Root onClick={onClickModal}>
        <UpperContainer>
          <AskImg src={AskIcon} />
          <RequestInput
            placeholder="AI에게 요청할 내용을 입력하세요!"
            ref={requestInputRef}
            value={inputValue}
            onChange={onChange}
          />
          <RequestButton onClick={onClickRequestButton}>요청</RequestButton>
        </UpperContainer>
        <CenterContainer>
          <LeftContainer>
            <MarkdownPreview source={content} wrapperElement={{ 'data-color-mode': 'light' }} />
          </LeftContainer>

          <RightContainer onMouseOver={onRightContainerMouseOver} onMouseLeave={onRightContainerMouseLeave}>
            {!isEditing && isEditButtonShown && !(isLoading || isRequesting) && apiResponse != '' && (
              <EditButton src={fixImg} onClick={onClickEditButton} />
            )}
            {isLoading || isRequesting ? (
              <Spinner />
            ) : isEditing ? (
              <EditInput value={editValue} onChange={onEditValueChange} ref={EditInputRef} />
            ) : (
              <MarkdownPreview source={apiResponse} wrapperElement={{ 'data-color-mode': 'light' }} />
            )}

            {apiResponse !== '' && !isLoading && (
              <ButtonContainer>
                {isEditing ? (
                  <ApplyEditButton onClick={onClickApplyEditButton}>수정</ApplyEditButton>
                ) : (
                  <ApplyButton onClick={onClickApplyButton}>적용</ApplyButton>
                )}
                <CancelButton onClick={onClickCancelButton}>취소</CancelButton>
                <ClearButton onClick={onClickClearButton}>새 질문</ClearButton>
              </ButtonContainer>
            )}
          </RightContainer>
        </CenterContainer>
      </Root>
    </ModalWrapper>
  )
}
