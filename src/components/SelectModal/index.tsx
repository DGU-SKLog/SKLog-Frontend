import { FC, useState } from 'react'
import { Root, SelectItem } from './styled'
import { SelectItemList } from 'constants/selectItemList'
import { RequestModal } from 'components/RequestModal'
type SelectModalProps = {
  closeModal: () => void
  content: string
}

export const SelectModal: FC<SelectModalProps> = ({ content, closeModal }) => {
  const selectItemList = SelectItemList
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false)
  const onSelectItemClick = () => {
    //
    setIsRequestModalOpen(true)
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
        <SelectItem key={index} src={item} onClick={onSelectItemClick} />
      ))}
      {isRequestModalOpen && <RequestModal closeModal={closeModalAll} content={content} />}
    </Root>
  )
}
