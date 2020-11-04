import React, { useState } from "react"
import { useFocus } from "./utils/useFocus"
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles"

interface NewItemFormProps {
  onAdd(text: string): void
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("")
  const inputRef = useFocus()
  const disabled = !text.length
  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <NewItemButton onClick={() => onAdd(text)} disabled={disabled}>Create</NewItemButton>
    </NewItemFormContainer>
  )
}
