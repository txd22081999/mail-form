import React from 'react'
import MailForm from '../../components/MailForm'
import NotificationWrapper from '../../components/NotificationWrapper/NotificationWrapper'

import './MainPage.scss'

const MainPage = () => {
  return (
    <div className='MainPage'>
      <NotificationWrapper>
        <MailForm />
      </NotificationWrapper>
    </div>
  )
}

export default MainPage
