import { axiosPOST } from 'api/common/commonAxios'
import { CommonRequestProps } from './common/commonType'

export type CreateTitleRequestProps = CommonRequestProps

export type CreateTitleResponseProps = {
  title: string
  tags: Array<string>
}

export const createTitle = (req: CreateTitleRequestProps) => {
  return axiosPOST('/api/metadata', req)
}
