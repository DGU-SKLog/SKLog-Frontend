import { FC } from 'react'
import { CheckImg, Root } from './styled'

type OrangeButtonProps = {
  content: string
}

export const OrangeButton: FC<OrangeButtonProps> = ({ content }) => {
  return (
    <Root>
      <CheckImg />
      {content}
    </Root>
  )
}
