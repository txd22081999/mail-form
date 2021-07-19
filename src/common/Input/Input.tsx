import React from 'react'
import * as cls from 'classnames'
import './Input.scss'

interface IOnChange {
  // (e: React.FormEvent<HTMLInputElement>): string
  (e: React.ChangeEvent<HTMLInputElement>): void
}

interface IInputProps {
  placeholder?: string
  type?: string
  name: string
  autoComplete?: string
  value?: string
  validation?: string
  onChange?: IOnChange
}

const Input = (props: IInputProps) => {
  const {
    type = 'text',
    onChange,
    name,
    autoComplete,
    value,
    validation,
  } = props

  return (
    <div className='Input'>
      <input type={type} onChange={onChange} {...props} />
    </div>
  )
}

export default Input
