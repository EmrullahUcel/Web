import Header from "./components/Header"
import MainSection from "./components/MainSection"
import { Route, Routes } from 'react-router-dom'
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import BackPage from './components/BackPage'


const App = () => {
  return (

    <div className='w-screen h-full flex flex-col items-center justify-center'>
      <BackPage>
        <Header />
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BackPage>
    </div>

  )
}

export default App
