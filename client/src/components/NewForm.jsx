import React from 'react'
import { useState } from 'react'
import Client from '../services/api'
import { useNavigate } from 'react-router-dom'
import { GetEndeavors } from '../services/EndeavorServices'

const NewForm = ({ getEndeavors, user }) => {

  const initialState = {
    name: '',
    image: '',
    website: '',
    description: '',
    genres: '',
  }

  const [formState, setFormState] = useState(initialState)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.post('/endeavors', formState)
    console.log(formState)
    setFormState(initialState)
    navigate('/endeavors')
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }


  return user ? (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newEndeavor">ADD A NEW <span className="fireText">ENDEAVOR</span></label>
        <br />
        <br />
        <label htmlFor="name" className="fireText">project name: </label>
        <input type="text" id="name" onChange={handleChange} value={formState.name} />
        <br />
        <label htmlFor="image" className="fireText">image url: </label>
        <input type="text" id="image" onChange={handleChange} value={formState.image} />
        <br />
        <label htmlFor="website" className="fireText">official website: </label>
        <input type="text" id="website" onChange={handleChange} value={formState.website} />
        <br />
        <label htmlFor="description" className="fireText">description: </label>
        <textarea type="textarea" id="description" className="descriptionText" onChange={handleChange} value={formState.description} />
        <br />
        <br />
        <label htmlFor="genres" className="fireText">genre: </label>
        <select className="dropdown" id="genres" onChange={handleChange} value={formState.genres}>
          <option value="Animation">Animation</option>
          <option value="Art">Art</option>
          <option value="App">App</option>
          <option value="Article">Article</option>
          <option value="Biology">Biology</option>
          <option value="Blog">Blog</option>
          <option value="Book">Book</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Comedy">Comedy</option>
          <option value="Documentary">Documentary</option>
          <option value="Experiment">Experiment</option>
          <option value="Film">Film</option>
          <option value="Gaming">Gaming</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Intellectual Property">Intellectual Property</option>
          <option value="Invention">Invention</option>
          <option value="Lyricism">Lyricism</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Medicine">Medicine</option>
          <option value="Microbiology">Microbiology</option>
          <option value="Music">Music</option>
          <option value="Musical Theater">Musical Theater</option>
          <option value="Other">Other</option>
          <option value="Play">Play</option>
          <option value="Poetry">Poetry</option>
          <option value="Programming">Programming</option>
          <option value="Physics">Physics</option>
          <option value="Recipe">Recipe</option>
          <option value="Science">Science</option>
          <option value="Short">Short</option>
          <option value="Space">Space</option>
          <option value="Stand-Up Comedy">Stand-Up Comedy</option>
          <option value="Science">Science</option>
          <option value="Theorem">Theorem</option>
          <option value="Theory">Theory</option>
          <option value="Thesis">Thesis</option>
          <option value="Video Game">Video Game</option>
          <option value="Web Application">Web Application</option>
          <option value="Website">Website</option>
        </select>
        <br />
        <br />
        <button className="button" type="submit">submit</button>
      </form>
    </div>
  ) : (
    <div className="protected">
      <h6>
        <span className="fireText">
          Sorry...
        </span>
        in order to view this page you must be
        <span className="fireText">
          signed in
        </span>
        .</h6>
      <button className="button" onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default NewForm
