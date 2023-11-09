import { axiosPOST } from 'api/common/commonAxios'
import { CommonRequestProps, CommonResponseProps } from './common/commonType'

export type CreateExpansionRequestProps = CommonRequestProps

export type CreateExpansionResponseProps = CommonResponseProps

export const createExpansion = (req: CreateExpansionRequestProps) => {
  return axiosPOST('/api/expansion', req)
}
