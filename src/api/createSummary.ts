import { axiosPOST } from 'api/common/commonAxios'
import { CommonRequestProps, CommonResponseProps } from './common/commonType'

export type CreateSummaryRequestProps = CommonRequestProps

export type CreateSummaryResponseProps = CommonResponseProps

export const createSummary = (req: CreateSummaryRequestProps) => {
  return axiosPOST('/api/summary', req)
}
