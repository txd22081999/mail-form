import { cloneElement, useState } from 'react'
import cls from 'classnames'

import './NotificationWrapper.scss'
import { INotificationProps } from '../../interfaces'

type ICallback = () => any

const NotificationWrapper = (props: INotificationProps) => {
  const { show: showProp, children } = props
  const [show, setShow] = useState(showProp || false)
  const [callback, setCallback] = useState<ICallback>(() => {})

  const toggleShow = () => {
    setShow((prevShow) => !prevShow)
  }

  const fireAlert = (cb: ICallback) => {
    setShow((prevShow) => !prevShow)
    setCallback(() => cb)
  }

  const onCloseClick = () => {
    // Handle callback of close function
    if (callback) {
      callback()
    }
    toggleShow()
  }

  return (
    <div className='NotificationWrapper'>
      <div className={cls('notification', show && 'show')}>
        <span
          className='iconify icon'
          data-icon='bi:check-circle-fill'
          data-inline='false'
          data-width='70'
          data-height='70'
        ></span>
        <h2>Submitted!</h2>
        <button type='button' className='btn' onClick={onCloseClick}>
          done
        </button>
      </div>

      {cloneElement(children, { fireAlert, onAlertClose: onCloseClick })}
    </div>
  )
}

export default NotificationWrapper
