import MDEditor from '@uiw/react-md-editor'
import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import {
  AddHashTagButton,
  ButtonContainer,
  ButtonWrapper,
  CancelButton,
  CancelImg,
  HashTagContainer,
  Root,
  TitleInput,
  UpperWrapper,
  WriteTypo,
} from './styled'

import { useNavigate } from 'react-router-dom'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { OrangeButton } from 'components/common/OrangeButton'
import { SelectModal } from 'components/SelectModal'
import { ReactComponent as QuestionBubbleImg } from 'assets/images/question_bubble.svg'
import { QuestionModal } from 'components/QuestionModal'
import { HashTag } from 'components/HashTag'
type BulletinPageProps = {
  mode: string
}
export const BulletinPage: FC<BulletinPageProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false) // 모달 표시 상태
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false) // 모달 표시 상태
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })
  const [selectedText, setSelectedText] = useState('')

  const [inputValue, setInputValue] = useState<string>('')
  const [hashTagList, setHashTagList] = useState<Array<string>>([])
  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }
  const navigate = useNavigate()
  const onClickRegisterButton = async () => {
    //
  }
  const [value, setValue] = useState('**내용을 입력해 주세요**')
  const closeModal = () => {
    setIsModalOpen(false)
  }
  const onClickCancelButton = () => {
    navigate(-1)
  }

  const onClickRoot = () => {
    setIsQuestionModalOpen(false)
  }

  const onTextSelected = () => {
    const selection = window.getSelection()
    if (selection && selection.toString().length > 1) {
      // 선택된 텍스트의 바로 아래에 모달을 띄우기 위한 위치를 계산합니다.
      setSelectedText(selection.toString())
      setModalPosition(mousePosition)
      setIsModalOpen(true) // 모달창을 보여줍니다.
    } else {
      closeModal()
    }
  }

  const applyAIText = (content: string) => {
    const updatedValue = value.replace(selectedText, content)
    setValue(updatedValue)
    closeModal()
  }
  const addHashTag = () => {
    setHashTagList((prev) => prev.concat(''))
  }
  const editHashTag = (idx: number, newTagName: string) => {
    setHashTagList((prev) =>
      prev.map((tagName, index) => {
        if (idx == index) return newTagName
        return tagName
      })
    )
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    console.log(hashTagList)
  }, [hashTagList])
  return (
    <Root onClick={onClickRoot}>
      <WriteTypo>글쓰기 ✏️</WriteTypo>
      <UpperWrapper>
        <TitleInput name="title" value={inputValue} onChange={onChange} placeholder="제목을 입력해주세요" />
      </UpperWrapper>

      <MDEditor
        value={value}
        onChange={setValue}
        data-color-mode="light"
        onSelect={onTextSelected}
        height={400}
        visibleDragbar={false}
        highlightEnable={false}
      />
      {isModalOpen && (
        <div
          style={{
            position: 'absolute',
            left: `${modalPosition.x + 10}px`,
            top: `${modalPosition.y + 10}px`,
          }}
        >
          <SelectModal closeModal={closeModal} content={selectedText} applyAIText={applyAIText} />
        </div>
      )}
      <ButtonContainer>
        <HashTagContainer>
          <AddHashTagButton onClick={addHashTag}>#</AddHashTagButton>
          {hashTagList.map((tagName, index) => (
            <HashTag key={index} tagName={tagName} onChange={(newTagName: string) => editHashTag(index, newTagName)} />
          ))}
        </HashTagContainer>
        <ButtonWrapper>
          <CancelButton onClick={onClickCancelButton}>
            <CancelImg />
            취소
          </CancelButton>
          <OrangeButton content="등록" />
        </ButtonWrapper>
      </ButtonContainer>
      <QuestionBubbleImg
        fill="white"
        stroke="black"
        className="question_bubble"
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation()
          setIsQuestionModalOpen((prev) => !prev)
        }}
        style={{ position: 'fixed', right: 80, bottom: 30, cursor: 'pointer' }}
      />
      {isQuestionModalOpen && <QuestionModal closeModal={closeModal} />}
    </Root>
  )
}
