import React from 'react'
import { useState } from 'react'
import axios from 'axios'


const NewForm = () => {


  return (
    <div>
      <form action="">
        <label htmlFor="newEndeavor">Add a new Endeavor to <span className="fireText">SMOKE</span></label>
        <br />
        <label htmlFor="name" className="fireText">name:</label>
        <input type="text" id="name"/>
        <br />
        <label htmlFor="genre" className="fireText">genre:</label>
        <select>
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

      </form>
    </div>
  )
}

export default NewForm
