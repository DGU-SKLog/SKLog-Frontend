import { FC, useEffect, useState } from 'react'
import {
  ContentWrapper,
  GreenTypo,
  GreetTypo,
  LeftContainer,
  Logo,
  Notice,
  RightContainer,
  Root,
  SelectedPageItem,
  PageItem,
  PageList,
  LogoutTypo,
} from './styled'
import logo from 'assets/images/logo.png'
import { pageList } from 'constants/pageList'
import { useLocation, useNavigate } from 'react-router-dom'

export const HeaderSection: FC = () => {
  const location = useLocation()
  const [currentPath, setCurrentPath] = useState(location.pathname)
  const initialTabIndex = pageList.findIndex((page) => currentPath.includes(page.url))
  const [currentTab, setCurrentTab] = useState<number>(initialTabIndex !== -1 ? initialTabIndex : 0)
  // const navigate = useNavigate()

  return (
    <Root>
      <ContentWrapper>
        <LeftContainer>
          <Logo src={logo} />
          <PageList>
            {pageList.map((item, index) =>
              index === currentTab ? (
                <SelectedPageItem key={index}>{item.title}</SelectedPageItem>
              ) : (
                <PageItem key={index}>{item.title}</PageItem>
              )
            )}
          </PageList>
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
