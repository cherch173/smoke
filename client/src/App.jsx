import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Feed from './pages/Feed'
import Details from './pages/EndeavorDetails'
import NewForm from './components/NewForm'
import EditForm from './components/EditForm'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import CommentRender from './components/CommentRender'
import './App.css'
import { CheckSession } from './services/Auth'
import { GetEndeavors } from './services/EndeavorServices'

function App() {
  const [user, setUser] = useState(null)
  const [endeavors, setEndeavors] = useState({})
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }
  const handleEndeavors = async () => {
    const data = await GetEndeavors()
    setEndeavors(data)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
    handleEndeavors()
  }, [])

  const handleLogOut = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  const getYear = () => {
    return new Date().getFullYear()
  }

  return (
    <div>
      <header>
        <Nav
          user={user}
          handleLogOut={handleLogOut}
        />
      </header>
      <br />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register user={user} />} />
          <Route path='/endeavors' element={
            <Feed
              user={user}
              endeavors={endeavors}
              setEndeavors={setEndeavors}
              handleEndeavors={handleEndeavors} />}
          />
          <Route path='/endeavors/:id' element={<Details user={user} endeavors={endeavors} handleEndeavors={handleEndeavors} />} />
          <Route path='new' element={<NewForm user={user} />} />
          <Route path='/edit' element={<EditForm user={user} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <br />
        <footer className="footer">
          © {getYear()} Cherch, all rights reserved
          <a className="footerLink" target="_blank" href="mailto:cherchofficial@gmail.com">CONTACT</a>
        </footer>
      </main>

    </div>
  )
}

export default App
