import React, { ChangeEventHandler } from 'react'

import './styles.scss'

interface Props {
  type: string
  name: string
  handleChange: ChangeEventHandler
  value: any
  label?: string
  required?: boolean
}

const FormInput: React.FC<Props> = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps}/>
    {label ? (
      <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
    ) : null}
  </div>
)

export default FormInput
