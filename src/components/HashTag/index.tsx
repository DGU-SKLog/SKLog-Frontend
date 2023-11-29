import { ChangeEvent, FC, ReactNode, useEffect, useRef, useState } from 'react'
import { CancelButton, ButtonRoot, TagInput } from './styled'
import CancelImg from 'assets/images/cancel.png'
type HashTagProps = {
  tagName: string
  onChange: (newTagName: string) => void
}

export const HashTag: FC<HashTagProps> = ({ tagName, onChange }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const onKeydown = (e: React.KeyboardEvent) => {
    if (e.key == ',' || e.key == 'Enter') {
      e.preventDefault()
      setIsEditing(false)
    }
  }
  const inputRef = useRef<HTMLInputElement>()
  const onTagNameChange = (e: ChangeEvent<HTMLSpanElement>) => {
    const text = e.target.innerText
    if (text.length > 10) {
      // 현재 커서 위치 저장
      const selection = window.getSelection()
      const range = selection.getRangeAt(0)
      const cursorPosition = range.startOffset - 1

      // 텍스트를 10글자로 제한
      e.target.innerText = text.substring(0, 10)

      // 커서 위치 복원
      const newRange = document.createRange()
      newRange.setStart(e.target.firstChild, cursorPosition)
      newRange.setEnd(e.target.firstChild, cursorPosition)
      selection.removeAllRanges()
      selection.addRange(newRange)
    } else onChange(text) // 부모 컴포넌트에 변경사항 전달
  }
  useEffect(() => {
    if (isEditing) inputRef?.current?.focus()
  }, [isEditing])

  return (
    <ButtonRoot
      onClick={() => {
        setIsEditing(true)
      }}
    >
      #
      <TagInput
        ref={inputRef}
        spellCheck={false}
        contentEditable={isEditing}
        onInput={onTagNameChange}
        onKeyDown={onKeydown}
        isEditing={isEditing}
      />
      <CancelButton src={CancelImg} alt="cancel_img" />
    </ButtonRoot>
  )
}
