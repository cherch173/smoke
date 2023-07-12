import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Feed from './pages/Feed'
import Details from './pages/EndeavorDetails'
import NewForm from './components/NewForm'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import './App.css'
import { CheckSession } from './services/Auth'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div>
      <header>
        <Nav element={<Nav />} />
      </header>
      <br />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setUser={setUser}/>} />
          <Route path="/register" element={<Register />} />
          <Route path='/endeavors' element={<Feed />} />
          <Route path='/endeavors/:id' element={<Details />} />
          <Route path='new' element={<NewForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
