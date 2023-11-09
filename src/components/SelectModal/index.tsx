import { FC, useState } from 'react'
import { Root, SelectItem } from './styled'
import { SelectItemList } from 'constants/selectItemList'
import { RequestModal } from 'components/RequestModal'
import { CommonRequestProps } from 'api/common/commonType'
type SelectModalProps = {
  closeModal: () => void
  content: string
}

export const SelectModal: FC<SelectModalProps> = ({ content, closeModal }) => {
  const selectItemList = SelectItemList
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false)
  const onSelectItemClick = (api: any, req: CommonRequestProps) => () => {
    api(content).then((res) => {
      console.log(res)
      setIsRequestModalOpen(true)
    })
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
        <SelectItem key={index} src={item.uri} onClick={onSelectItemClick(item.api, { content: content })} />
      ))}
      {isRequestModalOpen && <RequestModal closeModal={closeModalAll} content={content} />}
    </Root>
  )
}
