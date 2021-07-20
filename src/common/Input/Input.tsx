import React, { useState } from 'react'
import cls from 'classnames'

import { IInputProps } from '../../interfaces'

import './Input.scss'

const Input = (props: IInputProps) => {
  const [ignore, setIgnore] = useState(true) // Ignore at the first time page load
  const { onChange, name, value, label = '', error } = props

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e)
    setIgnore(false)
  }

  return (
    <div className='Input'>
      <div className='input-wrapper'>
        <input
          {...props}
          type='text'
          onChange={onInputChange}
          className={cls(value && 'has-value')}
        />
        <label htmlFor={name}>{label}</label>
      </div>
      <p className={cls('error', error && !ignore && 'show')}>{error}</p>
    </div>
  )
}

export default Input
