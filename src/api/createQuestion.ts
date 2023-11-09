import { axiosPOST } from 'api/common/commonAxios'

export type CreateQuestionRequestProps = {
  question: string
}

export type CreateQuestionResponseProps = {
  answer: string
}

export const createQuestion = (req: CreateQuestionRequestProps) => {
  return axiosPOST('/api/question', req)
}
