import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/auth' element={<AuthPage />}/>
      <Route path='/' element={<HomePage />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
