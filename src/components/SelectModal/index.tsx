import { FC, useState } from 'react'
import { Root, SelectItem } from './styled'
import { SelectItemList } from 'constants/selectItemList'
import { RequestModal } from 'components/RequestModal'
import { CommonRequestProps, CommonResponseProps } from 'api/common/commonType'
import { createEdit } from 'api/createEdit'
type SelectModalProps = {
  closeModal: () => void
  content: string
  applyAIText: (content: string) => void
}

export const SelectModal: FC<SelectModalProps> = ({ content, closeModal, applyAIText }) => {
  const selectItemList = SelectItemList
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false)
  const [apiResponse, setApiResponse] = useState('')

  const onSelectItemClick = (api: any) => () => {
    if (api) {
      setIsRequestModalOpen(true)
      api({ content: content })
        .then((res: CommonResponseProps) => {
          setApiResponse(res.content)
        })
        .catch((e) => {
          setApiResponse('오류')
        })
    } else {
      setIsRequestModalOpen(true)
    }
  }
  const closeModalAll = () => {
    closeModal()
    setIsRequestModalOpen(false)
  }

  const onClickModal = (e: React.MouseEvent) => {
    e.stopPropagation()
  }
  return (
    <Root onClick={onClickModal}>
      {selectItemList.map((item, index) => (
        <SelectItem key={index} src={item.uri} onClick={onSelectItemClick(item.api)} />
      ))}
      {isRequestModalOpen && (
        <RequestModal closeModal={closeModalAll} content={content} applyAIText={applyAIText} response={apiResponse} />
      )}
    </Root>
  )
}
