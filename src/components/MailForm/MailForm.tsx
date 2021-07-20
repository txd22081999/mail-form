import React, { FormEvent, useEffect, useState } from 'react'
import Input from '../../common/Input'
import TextArea from '../../common/TextArea'
import { MAX_MESSAGE_CHARACTER } from '../../constants'

import { IForm, IValidation } from '../../interfaces'
import { trimContent, validEmail } from '../../utils'
import './MailForm.scss'

const MailForm = (props: any) => {
  const { fireAlert } = props
  const [form, setForm] = useState<IForm>({
    sender: '',
    recipient: '',
    content: '',
  })

  const [validation, setValidation] = useState<IValidation>({
    sender: '',
    recipient: '',
    content: '',
  })

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
    setValidation((prevState: IValidation) => ({
      ...prevState,
      [name]: validateEmail(value),
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

    setValidation((prevState: any) => ({
      ...prevState,
      [name]: validateMessage(value),
    }))
  }

  useEffect(() => {
    // Get cached sender mail
    const initialSender = localStorage.getItem('sender')
    if (initialSender)
      setForm((prevForm) => ({ ...prevForm, sender: initialSender }))
  }, [])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const allError = Object.values(validation)
    const allFields = Object.values(form)

    const valid =
      allError.every((error) => error === '') &&
      allFields.every((field) => field !== '')

    if (!valid) return

    // post_to_url(
    //   'https://api.staticforms.xyz/submit',
    //   { ...form },
    //   Method.POST
    // )
    const callback = () => {
      console.log('Submitted')
    }

    fireAlert(callback)
    localStorage.setItem('sender', form.sender)

    setForm((prevForm) => ({
      sender: prevForm.sender,
      recipient: '',
      content: '',
    }))
  }

  const onClearSender = () => {
    setForm((prevForm) => ({ ...prevForm, sender: '' }))
    localStorage.removeItem('sender')
  }

  const validateEmail = (field: string) => {
    if (field.length === 0) {
      return `Please fill in email!`
    }

    if (!validEmail(field)) {
      return 'Invalid email. Example: john@gmail.com'
    }
    return ''
  }

  const validateMessage = (message: string) => {
    if (trimContent(message).length > MAX_MESSAGE_CHARACTER) {
      return `Limit number of characters reached: ${MAX_MESSAGE_CHARACTER}`
    }
    return ''
  }

  return (
    <div className='MailForm'>
      <form autoComplete='on'>
        <h1>Emaily</h1>

        <p className='desc'>Let's send a message.</p>

        <div className='inputs-container'>
          <div className='input-item'>
            <Input
              name='sender'
              autoComplete='sender'
              label='Sender'
              onChange={onInputChange}
              value={form.sender}
              error={validation.sender}
              // autoFocus={form.sender === ''}
            />
          </div>

          <div className='input-item'>
            <Input
              name='recipient'
              autoComplete='recipient'
              label='Recipient'
              onChange={onInputChange}
              value={form.recipient}
              error={validation.recipient}
            />
          </div>
        </div>

        <div className='textarea-container'>
          <TextArea
            name='content'
            label='Message'
            onChange={onTextAreaChange}
            value={form.content}
            style={{ height: 300 }}
            cols={60}
            rows={8}
            error={validation.content}
          />
        </div>

        <div className='btn-container'>
          <button
            className='btn'
            type='button'
            onClick={onClearSender}
            style={{ marginRight: 20 }}
          >
            clear sender
          </button>

          <button className='btn' type='submit' onClick={onSubmit}>
            submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default MailForm
