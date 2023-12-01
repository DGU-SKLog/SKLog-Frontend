import { axiosPOST } from 'api/common/commonAxios'
import { CommonRequestProps, CommonResponseProps } from './common/commonType'

export type CheckCohesionRequestProps = CommonRequestProps

export type CheckCohesionResponseProps = CommonResponseProps

export const checkCohesion = (req: CheckCohesionRequestProps) => {
  return axiosPOST('/api/cohesion', req)
}
