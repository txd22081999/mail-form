import React, { cloneElement, ReactElement, ReactNode, useState } from 'react'

import './NotificationWrapper.scss'

interface IProps {
  show?: boolean
  children: JSX.Element
}

// const NotificationWrapper : React.FC | INotificationWrapper = (props) => {
// const NotificationWrapper  = (props: ReactNode | INotificationWrapper) => {
const NotificationWrapper = (props: IProps) => {
  const { show: showProp, children } = props
  const [show, setShow] = useState(showProp || false)

  const toggleShow = () => {
    setShow((prevShow) => !prevShow)
  }

  const fireAlert = () => {
    toggleShow()
  }

  return (
    <div className='NotificationWrapper'>
      {show && (
        <div className='notification'>
          <h1 onClick={toggleShow}>Hello</h1>
        </div>
      )}

      {cloneElement(children, { fireAlert })}
      {/* {
    children.map((child: any) => (
        cloneElement(child, { fireAlert })

    ))
} */}
      {/* {props.children} */}
    </div>
  )
}

export default NotificationWrapper
