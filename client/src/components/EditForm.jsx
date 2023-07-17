import React from 'react'
import Client from '../services/api'
import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { GetEndeavor } from '../services/EndeavorServices'

const EditForm = ({ user, endeavors }) => {
  let { endeavorId } = useParams()
  let navigate = useNavigate()
  const [endeavor, setEndeavor] = useState({})


  const [formState, setFormState] = useState('')
  console.log(endeavorId)
  useEffect(() => {
    const handleEndeavor = async () => {
      const data = await GetEndeavor(endeavorId)
      setFormState(data)
    }
    handleEndeavor()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.put(`/endeavors/${endeavorId}`, formState)
    navigate(`/endeavors/${endeavorId}`)
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }


  return user ? (
    <div>
      <h5 htmlFor="editEndeavor"><span className="coolText">EDIT </span>{formState.name}</h5>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="fireText">project name: </label>
        <input type="text" id="name" placeholder="edit name" onChange={handleChange} value={formState.name} />
        <br />
        <label htmlFor="image" className="fireText">image url: </label>
        <input type="text" id="image" placeholder={endeavor.image} onChange={handleChange} value={formState.image} />
        <br />
        <label htmlFor="website" className="fireText">official website: </label>
        <input type="text" id="website" placeholder={endeavor.website} onChange={handleChange} value={formState.website} />
        <br />
        <label htmlFor="description" className="fireText">description:  </label>
        <textarea
          type="textarea"
          id="description"
          className="descriptionText"
          cols="25"
          rows="5"
          placeholder={endeavor.description}
          onChange={handleChange}
          value={formState.description} />
        <br />
        <br />
        <label htmlFor="genres" className="fireText">genre: </label>
        <select id="genres" className="dropdown" placeholder={endeavors.genre} onChange={handleChange} value={formState.genres}>
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
        <button className="editButton" type="submit">submit changes</button>
      </form>
      <Link to={`${"/endeavors"}`}><button className="button">back</button></Link>
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
      <button className="button" onClick={() => navigate('/signin')}>log in</button>
    </div>
  )
}


export default EditForm
