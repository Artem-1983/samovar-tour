import React, { useState, useContext } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import registerImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'
import '../styles/login.css'
import { AuthContext } from './../context/AuthContext'
import { BASE_URL } from '../utils/config'

const Register = () => {


    const [credentials, setCredentials] = useState({
        username: '',
        email: '',
        password: ''
    })

    const { dispatch } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async e => {
        e.preventDefault();

        console.log(credentials)

        if (!credentials.username || !credentials.email || !credentials.password) {
            alert("All fields are required.");
            return;
        }

        try {

            const res = await fetch(`${BASE_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(credentials)
            })


            const result = await res.json()

            if (!res.ok) {
                alert(result.message);
                navigate('/register')
            }



            if (result.success && result.user) {
                const { user } = result;  // Destructure user object

                // Now you can safely use user.username
                dispatch({ type: 'REGISTER_SUCCESS', payload: user });
                alert(`Registration successful! Welcome to your account, ${user.username}!`);
                navigate('/');  // Redirect to home or dashboard
            } else {
                alert('Unexpected error occurred.');
                navigate('/register');
            }


        } catch (err) {
            alert(err.message)

        }


    }


    return (
        <section>
            <Container>
                <Row>
                    <Col lg="8" className='m-auto'>
                        <div className="login__container d-flex justify-content-between">
                            <div className="login__img">
                                <img src={registerImg} alt="" />
                            </div>

                            <div className="login__form">
                                <div className="user">
                                    <img src={userIcon} alt="" />
                                </div>

                                <h2>Register</h2>
                                <Form onSubmit={handleClick}>
                                    <FormGroup>
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            required
                                            id="username"
                                            value={credentials.username}
                                            onChange={handleChange}
                                        />

                                    </FormGroup>

                                    <FormGroup>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            required
                                            id="email"
                                            value={credentials.email}
                                            onChange={handleChange}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            required
                                            id="password"
                                            value={credentials.password}
                                            onChange={handleChange}
                                        />
                                    </FormGroup>

                                    <Button type="submit" className='btn secondary__btn auth__btn' onClick={handleClick}>Create Account</Button>
                                </Form>
                                <p>Already have an account? <Link to="/login">Login</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Register
