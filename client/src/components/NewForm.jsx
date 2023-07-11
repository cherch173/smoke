import React from 'react'
import { useState } from 'react'
import axios from 'axios'


const NewForm = ({getEndeavors}) => {

    const initialState = {
        name: '',
        image: '',
        webiste: '',
        description: '',
        genre: 'Intellectual Property',
    }

    const [formState, setFormState] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3001/endeavors', formState)
        setFormState(initialState)
        getEndeavors()
    }

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value })
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newEndeavor">Add a new Endeavor to <span className="fireText">SMOKE</span></label>
        <br />
        <br />
        <label htmlFor="name" className="fireText">project name:</label>
        <input type="text" id="name"/>
        <br />
        <label htmlFor="image" className="fireText">image url:</label>
        <input type="text" id="image" />
        <br />
        <label htmlFor="website" className="fireText">website:</label>
        <input type="text" id="website" />
        <br />
        <label htmlFor="image" className="fireText">description:</label>
        <textarea type="textarea" id="description" className="descriptionText" onChange={handleChange} value={formState.description}/>
        <br />
        <br />
        <label htmlFor="genre" className="fireText">genre:</label>
        <select id="genre" onChange={handleChange} value={formState.genre}>
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
        <button className="button" type="submit">SUBMIT</button>

      </form>
    </div>
  )
}

export default NewForm
