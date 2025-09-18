import React, { useState, useContext } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'
import '../styles/login.css'
import { AuthContext } from './../context/AuthContext'
import { BASE_URL } from '../utils/config'
import Cookies from 'js-cookie'

const Login = () => {


    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined
    })

    const { dispatch } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async e => {
        e.preventDefault();

        dispatch({ type: 'LOGIN_START' })

        try {

            const res = await fetch(`${BASE_URL}/auth/login`, {

                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(credentials)

            })

            const result = await res.json()
            if (!res.ok) {
                alert(result.message);
                dispatch({ type: 'LOGIN_FAILURE', payload: result.message });
                return
            }

            const { token, data: user } = result;

            // Store user info in localStorage
            localStorage.setItem('user', JSON.stringify(user));

            // Save token in cookies (using js-cookie library)
            Cookies.set('accessToken', token, { expires: 15 }); // expires in days

            // Dispatch success with user info
            dispatch({ type: 'LOGIN_SUCCESS', payload: user });

            // Navigate to dashboard or home
            navigate('/');

        } catch (err) {
            console.error(err);
            dispatch({ type: 'LOGIN_FAILURE', payload: err.message });

        }


    }


    return (
        <section>
            <Container>
                <Row>
                    <Col lg="8" className='m-auto'>
                        <div className="login__container d-flex justify-content-between">
                            <div className="login__img">
                                <img src={loginImg} alt="" />
                            </div>

                            <div className="login__form">
                                <div className="user">
                                    <img src={userIcon} alt="" />
                                </div>

                                <h2>Login</h2>
                                <Form onSubmit={handleClick}>
                                    <FormGroup>
                                        <input type="email" placeholder="Email" required id="email" onChange={handleChange} />
                                    </FormGroup>

                                    <FormGroup>
                                        <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
                                    </FormGroup>

                                    <Button type="submit" className='btn secondary__btn auth__btn' onClick={handleClick}>Login</Button>
                                </Form>
                                <p>Don't have an account? <Link to="/register">Create an account</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Login
