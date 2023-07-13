import React from 'react'
import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'


const SignIn = (props) => {
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({ email: '', password: '' })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await SignInUser(formValues)
        setFormValues({ email: '', password: '' })
        props.setUser(payload)
        navigate('/endeavors')
    }

    return (
        <div className="signin col">
            <div className="card-overlay centered">
                <h4>LOG IN</h4>
                <form className="col" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label className="fireText" htmlFor="email">Email: </label>
                        <input
                            onChange={handleChange}
                            name="email"
                            type="email"
                            placeholder="email@emailtown.com"
                            value={formValues.email}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label className="fireText" htmlFor="password">Password: </label>
                        <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            value={formValues.password}
                            required
                        />
                    </div>
                    <br />
                    <button className="button" disabled={!formValues.email || !formValues.password}>
                        log in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignIn
