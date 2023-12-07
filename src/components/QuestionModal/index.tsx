import { ChangeEvent, FC, KeyboardEventHandler, useEffect, useRef, useState } from 'react'
import { ClearButton, LowerContainer, RequestInput, Root, UpperContainer } from './styled'
import { CreateQuestionResponseProps, createQuestion } from 'api/createQuestion'
import { ReactComponent as QuestionBubbleImg } from 'assets/images/question_circle.svg'
import { Spinner } from 'components/Spinner'

type QuestionModalProps = {
  closeModal: () => void
}

export const QuestionModal: FC<QuestionModalProps> = ({ closeModal }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [apiResponse, setApiResponse] = useState('')
  const inputRef = useRef<HTMLInputElement>()

  const onClickModal = (e: React.MouseEvent) => {
    e.stopPropagation()
  }
  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key == 'Enter') {
      onClickQuestionButton()
    }
  }
  const onClickQuestionButton = () => {
    setIsLoading(true)
    createQuestion({ question: inputValue })
      .then((res: CreateQuestionResponseProps) => {
        setInputValue('')
        setApiResponse(res.answer)
        setIsLoading(false)
      })
      .catch((e) => {
        setInputValue('')
        setApiResponse('API 오류')
        setIsLoading(false)
      })
  }
  const onClickClearButton = () => {
    setApiResponse('')
    inputRef.current.focus()
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <Root onClick={onClickModal}>
      <UpperContainer>
        <QuestionBubbleImg
          fill="#d9d9d9"
          stroke="black"
          style={{ width: 60, margin: '3 10 0 0' }}
          onClick={onClickQuestionButton}
          class="question_bubble"
        />
        <RequestInput
          onKeyDown={onKeyDown}
          placeholder="무엇이 궁금하신가요?"
          ref={inputRef}
          value={inputValue}
          onChange={onChange}
        />
      </UpperContainer>
      <LowerContainer>
        {isLoading ? <Spinner /> : apiResponse}
        <ClearButton onClick={onClickClearButton}>초기화</ClearButton>
      </LowerContainer>
    </Root>
  )
}
