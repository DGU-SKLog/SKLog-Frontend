import MDEditor from '@uiw/react-md-editor'
import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import {
  ButtonWrapper,
  CancelButton,
  CancelImg,
  DownArrowImg,
  GreenTypo,
  Root,
  SuggestTypo,
  TagOption,
  TagOptionWrapper,
  TagSelector,
  TagSelectorWrapper,
  TagTypo,
  TitleInput,
  UpperWrapper,
  WriteTypo,
} from './styled'
import { createPost } from 'api/post/createPost'
import { useNavigate } from 'react-router-dom'
import { EditorState } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { serializeContent } from 'utils/wysiwyg'
import downArrowImg from 'assets/images/right_arrow.png'
import { examinfoTagList, suggestTagList } from 'constants/tagList'
import { OrangeButton } from 'components/common/OrangeButton'
import { DeleteCommentModal } from 'components/ExamInfo/DeleteModal/DeleteCommentModal'
type BulletinPageProps = {
  mode: string
}
export const BulletinPage: FC<BulletinPageProps> = ({ mode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false) // 모달 표시 상태
  const [selectedText, setSelectedText] = useState('')
  const tagList = (): string[] => {
    if (mode === 'examinfo') return examinfoTagList
    if (mode === 'suggest') return suggestTagList
    else return []
  }
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [isSelecting, setIsSelecting] = useState<boolean>(false)
  const [selectedTag, setSelectedTag] = useState<string>('선택해주세요')

  const [inputValue, setInputValue] = useState<string>('')
  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }
  const navigate = useNavigate()
  const onClickRegisterButton = async () => {
    // if (inputValue === '' || (mode === 'examinfo' && selectedTag === '선택해주세요')) return
    // if (mode === 'examinfo') {
    //   await createPost({
    //     content: serializeContent(editorState),
    //     tagList: [selectedTag],
    //     title: inputValue,
    //   }).then((res) => {
    //     navigate(-1)
    //   })
    //   return
    // }
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
    if (selection && selection.toString().length > 0) {
      setSelectedText(selection.toString())
      setIsModalOpen(true) // 모달창을 보여줍니다.
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <Root onClick={onClickRoot}>
      <WriteTypo>
        {mode === 'suggest' ? (
          <>
            건의사항 🚀
            <SuggestTypo>
              <GreenTypo>플랜메이트</GreenTypo>에게 하시고 싶으신 말씀이 있으시다면 언제든지 의견을 보내주세요!
            </SuggestTypo>
          </>
        ) : (
          '글쓰기 ✏️'
        )}
      </WriteTypo>

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

      <MDEditor value={value} onChange={setValue} data-color-mode="light" onSelect={onTextSelected} />
      <ButtonWrapper>
        <CancelButton onClick={onClickCancelButton}>
          <CancelImg />
          취소
        </CancelButton>
        <OrangeButton content="등록" />
      </ButtonWrapper>
      {isModalOpen && <DeleteCommentModal closeModal={closeModal} content={selectedText} />}
    </Root>
  )
}
