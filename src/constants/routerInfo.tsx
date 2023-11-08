import { HeaderSection } from 'pages/CommonSections/HeaderSection'
import { Outlet } from 'react-router-dom'
import { Root } from 'styled'
import { BulletinPage } from 'pages/ExamInfo/BulletinPage'
import { FindAllPostResponseProps, findAll } from 'api/post/find/findAll'
import { CheckPostResponseProps, checkPost } from 'api/post/checkPost'
import { FooterSection } from 'pages/CommonSections/FooterSection'

export const routerInfo = [
  {
    path: '/',
    // errorElement: (
    //   <>
    //     <HeaderSection />
    //     <ErrorPage />
    //     <FooterSection />
    //   </>
    // ),
    element: (
      <>
        <HeaderSection />
        <Root>
          <BulletinPage mode={'examinfo'} />
        </Root>
        {/* <FooterSection /> */}
      </>
    ),
    children: [
      // {
      //   path: 'examinfo',
      //   element: <ExamInfoPage />,

      //   loader: async (): Promise<FindAllPostResponseProps> => {
      //     return (await findAll({
      //       pages: 0,
      //     })) as FindAllPostResponseProps
      //   }, //비동기 처리 등
      // },
      {
        path: '',
        element: <BulletinPage mode={'examinfo'} />,
      },
      // {
      //   path: 'examinfo/detail/:postId',
      //   element: <ExamInfoDetailPage mode={'examinfo'} />,
      //   loader: async ({ params }: any): Promise<ExamInfoDetailDataType> => {
      //     const checkPostResult = (await checkPost({
      //       postId: +params.postId,
      //     })) as CheckPostResponseProps
      //     const findAllCommentsResult = (await findAllComments({
      //       pages: 0,
      //       postId: +params.postId,
      //     })) as FindAllCommentsResponseProps
      //     return {
      //       checkPostResult: checkPostResult,
      //       findAllCommentsResult: findAllCommentsResult,
      //     }
      //   },
      // },
    ],
  },
]
