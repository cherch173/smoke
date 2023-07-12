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
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token =localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  return (
    <div>
      <header>
        <Nav 
        user={user}
        handlLogOut={handleLogOut}
        />
      </header>
      <br />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setUser={setUser}/>} />
          <Route path="/register" element={<Register user={user}/>} />
          <Route path='/endeavors' element={<Feed user={user}/>} />
          <Route path='/endeavors/:id' element={<Details user={user} />} />
          <Route path='new' element={<NewForm user={user}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
