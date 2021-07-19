import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { trimContent } from '../../utils'
import Input from '../../common/Input'
import TextArea from '../TextArea'

import './MailForm.scss'

interface IForm {
  sender: string
  recipient: string
  content: string
}

const MailForm = (props: any) => {
  const { fireAlert } = props
  const [form, setForm] = useState<IForm>({
    sender: '',
    recipient: '',
    content: '',
  })

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const {target: {name, value}} = e
    const {
      target: { name, value },
    } = e
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // const {target: {name, value}} = e
    const {
      target: { name, value },
    } = e

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  useEffect(() => {
    const val = trimContent(form.content)
    console.log(val.length)
    // console.log(val)

    // console.log(val)
  }, [form])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    fireAlert()
  }

  return (
    <div className='MailForm'>
      <form autoComplete='on'>
        <div className='inputs-container'>
          <Input
            name='sender'
            autoComplete='sender'
            placeholder='sender mail'
            onChange={onInputChange}
          />

          <Input
            name='recipient'
            autoComplete='recipient'
            placeholder='recipient mail'
            onChange={onInputChange}
          />
        </div>

        <div className='textarea-container'>
          <TextArea
            name='content'
            placeholder='Type anything!'
            onChange={onTextAreaChange}
            style={{ height: 400 }}
            cols={60}
            rows={8}
          />
        </div>

        <button type='submit' onClick={onSubmit}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default MailForm
