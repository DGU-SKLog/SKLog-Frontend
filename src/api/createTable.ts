import { axiosPOST } from 'api/common/commonAxios'
import { CommonRequestProps, CommonResponseProps } from './common/commonType'

export type CreateTableRequestProps = CommonRequestProps
export type CreateTableResponseProps = CommonResponseProps

export const createTable = (req: CreateTableRequestProps) => {
  return axiosPOST('/api/table', req)
}
