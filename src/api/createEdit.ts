import { axiosPOST } from 'api/common/commonAxios'
import { CommonRequestProps, CommonResponseProps } from './common/commonType'

export type CreateEditRequestProps = CommonRequestProps

export type CreateEditResponseProps = CommonResponseProps

export const createEdit = (req: CreateEditRequestProps) => {
  return axiosPOST('/api/edit', req)
}
