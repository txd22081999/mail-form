import React, { useEffect, useRef } from 'react'
import cls from 'classnames'

import './TextArea.scss'
import { ITextAreaProps } from '../../interfaces'

const TextArea = (props: ITextAreaProps) => {
  const { onChange, name, value, label, error } = props
  const textRef = useRef<HTMLTextAreaElement | null>(null)
  // const { onChange } = props

  useEffect(() => {
    const el = textRef.current

    if (!el) return
    handleTabPress(el)
  }, [])

  const handleTabPress = (el: HTMLTextAreaElement) => {
    // When tab key pressed new space is inserted
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') {
        e.preventDefault()
        var start = this.selectionStart
        var end = this.selectionEnd

        // Set textarea value to: [text before caret] + [tab] + [text after caret]
        this.value =
          this.value.substring(0, start) + '\t' + this.value.substring(end)

        // Put caret at right position again
        this.selectionStart = this.selectionEnd = start + 1
      }
    })
  }

  return (
    <div className='TextArea'>
      <div className='textarea-wrapper'>
        <textarea
          onChange={onChange}
          {...props}
          ref={textRef}
          {...props}
          className={cls(value && 'has-value')}
        />
        <label htmlFor={name}>{label}</label>
      </div>
      <p className={cls('error', error && 'show')}>{error}</p>
    </div>
  )
}

export default TextArea
