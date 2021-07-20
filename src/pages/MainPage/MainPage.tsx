import { useEffect } from 'react'
import MailForm from '../../components/MailForm'

import './MainPage.scss'

const MainPage = (props: any) => {
  useEffect(() => {}, [])
  return (
    <main className='MainPage'>
      <MailForm {...props} />
    </main>
  )
}

export default MainPage
