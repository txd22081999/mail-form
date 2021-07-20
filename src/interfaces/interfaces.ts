export interface IInputOnChange {
  // (e: React.FormEvent<HTMLInputElement>): string
  (e: React.ChangeEvent<HTMLInputElement>): void
}

export interface IInputProps {
  readonly placeholder?: string
  readonly name: string
  readonly label?: string
  readonly autoComplete?: string
  readonly value?: string
  readonly autoFocus?: boolean
  readonly error?: string
  readonly onChange: IInputOnChange
}

export interface ITextAreaOnChange {
  // (e: React.FormEvent<HTMLInputElement>): string
  (e: React.ChangeEvent<HTMLTextAreaElement>): void
}

export interface ITextAreaProps {
  readonly placeholder?: string
  readonly label?: string
  readonly name: string
  readonly value?: string
  readonly error?: string
  readonly onChange: ITextAreaOnChange
  readonly cols?: number
  readonly rows?: number
  readonly style?: object
}

export interface IForm {
  sender: string
  recipient: string
  content: string
}

export interface IValidation {
  sender: string
  recipient: string
  content: string
}

export interface INotificationProps {
  children: JSX.Element
  show?: boolean
  onClose?: () => void
}
