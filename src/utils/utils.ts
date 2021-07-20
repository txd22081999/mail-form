import { TEXTAREA_REGEX } from '../constants'

type TObject = { [key: string]: string }

enum Method {
  POST = 'POST',
  GET = 'GET',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
  PUT = 'PUT',
}

export const trimContent = (str: string) => {
  return str.replace(TEXTAREA_REGEX, '')
}

export const postToUrl = (
  path: string = '/',
  params: TObject,
  method: Method
) => {
  method = method || 'POST'

  const form = document.createElement('form')
  form.setAttribute('method', method)
  form.setAttribute('action', path)

  for (let key in params) {
    if (params.hasOwnProperty(key)) {
      let hiddenField = document.createElement('input')
      hiddenField.setAttribute('type', 'hidden')
      hiddenField.setAttribute('name', key)
      hiddenField.setAttribute('value', params[key])

      form.appendChild(hiddenField)
    }
  }

  document.body.appendChild(form)
  form.submit()
}

export const validEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
