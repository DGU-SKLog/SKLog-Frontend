import MDEditor from '@uiw/react-md-editor'
import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import {
  AddHashTagButton,
  ButtonContainer,
  ButtonWrapper,
  CancelButton,
  CancelImg,
  HashTagContainer,
  IconWrapper,
  RobotIcon,
  Root,
  TitleInput,
  UpperWrapper,
  WriteTypo,
} from './styled'

import { useNavigate } from 'react-router-dom'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { FunctionButton } from 'components/common/FunctionButton'
import { SelectModal } from 'components/SelectModal'
import { ReactComponent as QuestionBubbleImg } from 'assets/images/question_bubble.svg'
import { QuestionModal } from 'components/QuestionModal'
import { HashTag } from 'components/HashTag'
import RobotIconImg from 'assets/images/robot.svg'
import { CreateTitleResponseProps, createTitle } from 'api/createTitle'
import { Spinner } from 'components/Spinner'
import { CheckCohesionResponseProps, checkCohesion } from 'api/checkCohesion'
import { RequestModal } from 'components/RequestModal'
type BulletinPageProps = {
  mode: string
}
type HashTagType = {
  tagName: string
  key: number
  isApi: boolean
}
let hashTagId = 0
export const BulletinPage: FC<BulletinPageProps> = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isCohesionLoading, setIsCohesionLoading] = useState(false)
  const [isSelectModalOpen, setIsSelectModalOpen] = useState(false) // 모달 표시 상태
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false) // 모달 표시 상태
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false) // 모달 표시 상태
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })
  const [selectedText, setSelectedText] = useState('')
  const [titleValue, setTitleValue] = useState<string>('')
  const [hashTagList, setHashTagList] = useState<Array<HashTagType>>([])
  const [cohesionResponse, setCohesionResponse] = useState('')
  const defaultValue = ''
  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitleValue(event.target.value)
  }
  const navigate = useNavigate()
  const onClickRegisterButton = async () => {
    //
  }
  const [contentValue, setContentValue] = useState('')
  const closeModal = () => {
    setIsSelectModalOpen(false)
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
      setIsSelectModalOpen(true) // 모달창을 보여줍니다.
    } else {
      closeModal()
    }
  }

  const applyAIText = (content: string) => {
    const updatedValue = contentValue.replace(selectedText, content)
    setContentValue(updatedValue)
    closeModal()
  }
  const applyCohesionResponse = (response: string) => {
    setContentValue(response)
  }
  const addHashTag = () => {
    if (hashTagList.length > 2) return
    setHashTagList((prev) =>
      prev.concat({
        tagName: defaultValue,
        key: hashTagId++,
        isApi: false,
      })
    )
  }
  const deleteHashTag = (index) => () => {
    setHashTagList((prev) => prev.filter((tag, idx) => idx != index))
  }
  const editHashTag = (idx: number, newTagName: string) => {
    setHashTagList((prev) =>
      prev.map((tag, index) => {
        if (idx == index) {
          hashTagId++
          return { tagName: newTagName, key: tag.key, isApi: false }
        }
        return tag
      })
    )
  }
  const onClickRobotIcon = () => {
    setIsLoading(true)
    createTitle({
      content: contentValue,
    })
      .then((res: CreateTitleResponseProps) => {
        console.log(res)
        setTitleValue(res.title)
        setHashTagList(
          res.tags.map((tag) => {
            hashTagId++
            return { tagName: tag, key: hashTagId, isApi: true }
          })
        )
        setIsLoading(false)
      })
      .catch((e) => {
        setIsLoading(false)
        setTitleValue(e)
      })
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

  // useEffect(() => {
  //   console.log(hashTagList)
  // }, [hashTagList])
  return (
    <Root onClick={onClickRoot}>
      <WriteTypo>글쓰기 ✏️</WriteTypo>

      <UpperWrapper>
        <HashTagContainer>
          <AddHashTagButton onClick={addHashTag}>#</AddHashTagButton>
          {hashTagList.map((tag, index) => (
            <HashTag
              key={tag.key}
              onChange={(newTagName: string) => editHashTag(index, newTagName)}
              addHashTag={addHashTag}
              defaultValue={tag.tagName}
              deleteHashTag={deleteHashTag(index)}
              isApi={tag.isApi}
            />
          ))}
        </HashTagContainer>
        <TitleInput name="title" value={titleValue} onChange={onChange} placeholder="제목을 입력해주세요" />
        <IconWrapper>
          {isLoading ? <Spinner /> : <RobotIcon src={RobotIconImg} alt="robot_icon" onClick={onClickRobotIcon} />}
        </IconWrapper>
      </UpperWrapper>

      <MDEditor
        value={contentValue}
        onChange={setContentValue}
        data-color-mode="light"
        onSelect={onTextSelected}
        height={400}
        visibleDragbar={false}
        highlightEnable={false}
      />
      {isSelectModalOpen && (
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
        <ButtonWrapper>
          <CancelButton onClick={onClickCancelButton}>
            <CancelImg />
            취소
          </CancelButton>
          <FunctionButton content="등록" onClick={onClickRegisterButton} />
          <FunctionButton
            content="문장 통일성 검사"
            onClick={() => {
              setIsRequestModalOpen(true)
              setIsCohesionLoading(true)
              checkCohesion({
                content: contentValue,
              })
                .then((res: CheckCohesionResponseProps) => {
                  setIsCohesionLoading(false)
                  setCohesionResponse(res.content)
                })
                .catch((err) => {
                  console.error(err)
                })
            }}
          />
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
      {isRequestModalOpen && (
        <RequestModal
          closeModal={() => {
            setIsRequestModalOpen(false)
          }}
          content={contentValue}
          applyAIText={applyCohesionResponse}
          response={cohesionResponse}
          isLoading={isCohesionLoading}
        />
      )}
    </Root>
  )
}
