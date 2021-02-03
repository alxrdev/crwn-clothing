import React, { ChangeEventHandler } from 'react'

import {
  GroupContainer,
  FormInputField,
  FormInputLabel
} from './styles'

interface Props {
  type: string
  name: string
  handleChange: ChangeEventHandler
  value: any
  label?: string
  required?: boolean
}

const FormInput: React.FC<Props> = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputField onChange={handleChange} {...otherProps}/>
    {label ? (
      <FormInputLabel shrinkLabel={!!otherProps.value.length}>{label}</FormInputLabel>
    ) : null}
  </GroupContainer>
)

export default FormInput
