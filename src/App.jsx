import Header from './components/header'
import Footer from './components/footer'
import Booklist from './components/booklist'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
