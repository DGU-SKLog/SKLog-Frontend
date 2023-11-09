import { axiosPOST } from 'api/common/commonAxios'
import { CommonRequestProps, CommonResponseProps } from './common/commonType'

export type CreateListRequestProps = CommonRequestProps
export type CreateListResponseProps = CommonResponseProps

export const createList = (req: CreateListRequestProps) => {
  return axiosPOST('/api/list', req)
}
