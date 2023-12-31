import { ChangeEvent, FC, ReactNode, useEffect, useRef, useState } from 'react'
import { CancelButton, ButtonRoot, TagInput } from './styled'
import CancelImg from 'assets/images/cancel.png'
type HashTagProps = {
  onChange: (newTagName: string) => void
  addHashTag: () => void
  defaultValue: string
  deleteHashTag: () => void
  isApi: boolean
}

export const HashTag: FC<HashTagProps> = ({ onChange, addHashTag, defaultValue, deleteHashTag, isApi }) => {
  const [isEditing, setIsEditing] = useState<boolean>(!isApi)
  const [contentValue, setContentValue] = useState(defaultValue)
  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key == ',' || e.key == 'Enter') {
      e.preventDefault()
      if (inputRef.current.innerText.length == 0) return
      setIsEditing(false)
      addHashTag()
    } else {
      setContentValue(inputRef.current.innerText)
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
    } else {
      onChange(text) // 부모 컴포넌트에 변경사항 전달
    }
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
        onKeyPress={onKeyPress}
        // onKeyDown={onKeyPress}
        isEditing={isEditing}
      >
        {contentValue}
      </TagInput>
      <CancelButton
        src={CancelImg}
        alt="cancel_img"
        onClick={(e) => {
          e.stopPropagation()
          deleteHashTag()
        }}
      />
    </ButtonRoot>
  )
}
