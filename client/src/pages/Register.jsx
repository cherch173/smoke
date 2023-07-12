import React from 'react'
import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    let navigate = useNavigate()
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await RegisterUser({
            name: formValues.name,
            email: formValues.email,
            password: formValues.password
        })
        setFormValues({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
        navigate('/signin')
    }

    return (
        <div className="signin col">
            <h4>Register</h4>
            <div className="card-overlay centered">
                <form className="col" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label className="fireText" htmlFor="name">Name: </label>
                        <input
                            onChange={handleChange}
                            name="name"
                            type="text"
                            placeholder="name"
                            value={formValues.name}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label className="fireText" htmlFor="email">Email: </label>
                        <input
                            onChange={handleChange}
                            name="email"
                            type="email"
                            placeholder="example@example.com"
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
                    <div className="input-wrapper">
                        <label className="fireText" htmlFor="confirmPassword">Confirm Password: </label>
                        <input
                            onChange={handleChange}
                            type="password"
                            name="confirmPassword"
                            value={formValues.confirmPassword}
                            required
                        />
                    </div>
                    <br />
                    <button className="button"
                        disabled={
                            !formValues.email ||
                            (!formValues.password &&
                                formValues.confirmPassword === formValues.password)
                        }
                    >
                        REGISTER
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register
