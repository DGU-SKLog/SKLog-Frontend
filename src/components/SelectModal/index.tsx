import { FC, useState } from 'react'
import { Root, SelectItem } from './styled'
import { SelectItemList } from 'constants/selectItemList'
import { RequestModal } from 'components/ExamInfo/RequestModal'
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
  return (
    <Root>
      {selectItemList.map((item, index) => (
        <SelectItem key={index} src={item} />
      ))}
      {isRequestModalOpen && <RequestModal closeModal={closeModalAll} content={''} />}
    </Root>
  )
}
