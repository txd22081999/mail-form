import React, { useEffect, useRef } from 'react'

import './TextArea.scss'

interface IOnChange {
  // (e: React.FormEvent<HTMLInputElement>): string
  (e: React.ChangeEvent<HTMLTextAreaElement>): void
}

interface ITextAreaProps {
  placeholder?: string
  name: string
  value?: string
  validation?: string
  onChange?: IOnChange
  cols?: number
  rows?: number
  style?: object
}

const TextArea = (props: ITextAreaProps) => {
  const { onChange, name, value, validation } = props
  const textRef = useRef<HTMLTextAreaElement | null>(null)
  // const { onChange } = props

  useEffect(() => {
    console.log(textRef)
    const el = textRef.current

    if (!el) return
    handleTabPress(el)

    // document.getElementById('textbox').addEventListener('keydown', function(e) {
    //   if (e.key == 'Tab') {
    //     e.preventDefault();
    //     var start = this.selectionStart;
    //     var end = this.selectionEnd;

    //     // set textarea value to: text before caret + tab + text after caret
    //     this.value = this.value.substring(0, start) +
    //       "\t" + this.value.substring(end);

    //     // put caret at right position again
    //     this.selectionStart =
    //       this.selectionEnd = start + 1;
    //   }
    // });
  }, [])

  const handleTabPress = (el: HTMLTextAreaElement) => {
    // When tab key pressed new space is inserted
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') {
        e.preventDefault()
        var start = this.selectionStart
        var end = this.selectionEnd

        // set textarea value to: text before caret + tab + text after caret
        this.value =
          this.value.substring(0, start) + '\t' + this.value.substring(end)

        // put caret at right position again
        this.selectionStart = this.selectionEnd = start + 1
      }
    })
  }

  return (
    <div className='TextArea'>
      <textarea onChange={onChange} {...props} ref={textRef} />
    </div>
  )
}

export default TextArea
