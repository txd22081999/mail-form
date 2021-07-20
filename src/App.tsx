import MainPage from './pages/MainPage'
import NotificationWrapper from './components/NotificationWrapper'

import './App.scss'

const App = () => {
  return (
    <div className='App'>
      <NotificationWrapper>
        <MainPage />
      </NotificationWrapper>
    </div>
  )
}

export default App
