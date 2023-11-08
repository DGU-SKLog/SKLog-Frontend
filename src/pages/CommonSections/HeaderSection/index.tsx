import { FC } from 'react'
import { ContentWrapper, GreenTypo, GreetTypo, LeftContainer, Logo, RightContainer, Root, LogoutTypo } from './styled'
import logo from 'assets/images/logo.svg'

export const HeaderSection: FC = () => {
  return (
    <Root>
      <ContentWrapper>
        <LeftContainer>
          <Logo src={logo} />
        </LeftContainer>
        <RightContainer>
          <GreetTypo>
            안녕하세요, <GreenTypo>동국이</GreenTypo>님!
          </GreetTypo>
          <LogoutTypo>로그아웃</LogoutTypo>
        </RightContainer>
      </ContentWrapper>
    </Root>
  )
}
