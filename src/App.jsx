import Header from './components/header'
import Footer from './components/footer'
import Booklist from './components/booklist'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux';
import appStore from './utilis/configureStore';
import { useState } from 'react';

function App() {
  const [username, setUserName] = useState('Siddhesh Dandekar')
  // const [username, setUserName] = useState(useContext(userContext).Name)
  return (
    <>
      <Provider store={appStore} >
        <Header />
        <Outlet />
        <Footer />
      </Provider>

    </>
  )
}

export default App
