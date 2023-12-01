import { FC } from 'react'
import { CheckImg, Root } from './styled'

type FunctionButtonProps = {
  content: string
  onClick: () => void
}

export const FunctionButton: FC<FunctionButtonProps> = ({ content, onClick }) => {
  return (
    <Root onClick={onClick}>
      {content == '등록' && <CheckImg />}
      {content}
    </Root>
  )
}
