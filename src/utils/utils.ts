import { TEXTAREA_REGEX } from '../constants'

export const trimContent = (str: string) => {
  return str.replace(TEXTAREA_REGEX, '')
}
