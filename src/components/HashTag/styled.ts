import styled from 'styled-components'

export const ButtonRoot = styled.button`
  position: relative;
  width: fit-content;
  height: 32px;
  border-radius: 100px;
  border: 1px solid #dddede;
  display: flex;
  justify-content: start;
  align-items: center;
  color: gray;
  box-sizing: border-box;
  padding: 10px;
  column-gap: 3px;
`
type TagInputProps = {
  isEditing: boolean
}
export const TagInput = styled.span<TagInputProps>`
  cursor: ${(props) => (props.isEditing ? 'auto' : 'pointer')};
  background-color: ${(props) => (props.isEditing ? '#ddddde' : '')};

  padding-right: 0;
  width: fit-content;
  color: gray;
  outline: none;
`

export const CancelButton = styled.img`
  width: 10px;
`
