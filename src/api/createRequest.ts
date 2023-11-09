import { axiosPOST } from 'api/common/commonAxios'
import { CommonRequestProps, CommonResponseProps } from './common/commonType'

export type CreateRequestRequestProps = CommonRequestProps & {
  request: string // 사용자가 작성한 요청 내용
}

export type CreateRequestResponseProps = CommonResponseProps

export const createRequest = (req: CreateRequestRequestProps) => {
  return axiosPOST('/api/request', req)
}
