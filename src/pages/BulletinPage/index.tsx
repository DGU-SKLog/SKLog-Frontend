import MDEditor from '@uiw/react-md-editor'
import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import {
  ButtonWrapper,
  CancelButton,
  CancelImg,
  DownArrowImg,
  GreenTypo,
  Root,
  TagOption,
  TagOptionWrapper,
  TagSelector,
  TagSelectorWrapper,
  TagTypo,
  TitleInput,
  UpperWrapper,
  WriteTypo,
} from './styled'

import { useNavigate } from 'react-router-dom'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import downArrowImg from 'assets/images/right_arrow.png'
import { examinfoTagList, suggestTagList } from 'constants/tagList'
import { OrangeButton } from 'components/common/OrangeButton'
import { SelectModal } from 'components/SelectModal'
type BulletinPageProps = {
  mode: string
}
export const BulletinPage: FC<BulletinPageProps> = ({ mode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false) // 모달 표시 상태
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 })
  const [selectedText, setSelectedText] = useState('')
  const tagList = (): string[] => {
    if (mode === 'examinfo') return examinfoTagList
    if (mode === 'suggest') return suggestTagList
    else return []
  }

  const [isSelecting, setIsSelecting] = useState<boolean>(false)
  const [selectedTag, setSelectedTag] = useState<string>('선택해주세요')

  const [inputValue, setInputValue] = useState<string>('')
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
  const onClickTagSelector = (e: React.MouseEvent) => {
    setIsSelecting((prev) => !prev)
    e.stopPropagation()
  }
  const onClickTagOption = (id: number) => (e: React.MouseEvent) => {
    setSelectedTag(tagList()[id])
    e.stopPropagation()
    setIsSelecting(false)
  }
  const onClickRoot = () => {
    setIsSelecting(false)
  }

  const onTextSelected = () => {
    const selection = window.getSelection()
    if (selection && selection.toString().length > 1) {
      const range = selection.getRangeAt(0)
      // 선택된 텍스트의 바로 아래에 모달을 띄우기 위한 위치를 계산합니다.
      setSelectedText(selection.toString())
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

  return (
    <Root onClick={onClickRoot}>
      <WriteTypo>글쓰기 ✏️</WriteTypo>
      <UpperWrapper>
        <TitleInput name="title" value={inputValue} onChange={onChange} placeholder="제목을 입력해주세요" />
        {mode !== 'notice' && (
          <TagSelectorWrapper>
            <TagTypo>태그</TagTypo>
            <TagSelector onClick={onClickTagSelector}>
              {selectedTag === '선택해주세요' ? selectedTag : '# ' + selectedTag}
              <DownArrowImg alt="down_arrow_img" src={downArrowImg} />
              {isSelecting && (
                <TagOptionWrapper>
                  {tagList().map((tag, index) => (
                    <TagOption key={index} onClick={onClickTagOption(index)}>
                      {tag}
                    </TagOption>
                  ))}
                </TagOptionWrapper>
              )}
            </TagSelector>
          </TagSelectorWrapper>
        )}
      </UpperWrapper>

      <MDEditor value={value} onChange={setValue} data-color-mode="light" onSelect={onTextSelected} height={400} />
      {isModalOpen && <SelectModal closeModal={closeModal} content={selectedText} applyAIText={applyAIText} />}

      <ButtonWrapper>
        <CancelButton onClick={onClickCancelButton}>
          <CancelImg />
          취소
        </CancelButton>
        <OrangeButton content="등록" />
      </ButtonWrapper>
    </Root>
  )
}
