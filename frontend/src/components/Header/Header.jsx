
import React, { useRef, useEffect, useState, useContext } from 'react'
import { Container, Row, Button } from 'reactstrap'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import '../Header/header.css'
import { AuthContext } from './../../context/AuthContext'
import Cookies from 'js-cookie'



const nav__links = [
    { path: '/home', display: 'Home' },
    { path: '/about', display: 'About' },
    { path: '/tours', display: 'Tours' },
]

const Header = () => {
    const headerRef = useRef(null)
    const navigate = useNavigate()
    const { user, dispatch } = useContext(AuthContext)

    const Logout = () => {
        localStorage.removeItem('user');
        Cookies.remove('accessToken');
        dispatch({ type: 'LOGOUT' });
        navigate('/')
    };


    const [isMenuOpen, setIsMenuOpen] = useState(false)


    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)




    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isMenuOpen) {
                setIsMenuOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [isMenuOpen])




    useEffect(() => {
        const handleScroll = () => {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                headerRef.current.classList.add('sticky__header')
            } else {
                headerRef.current.classList.remove('sticky__header')
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])




    return (
        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper d-flex align-items-center justify-content-between">
                        {/* Logo */}
                        <div className="header__logo">
                            <img src={logo} alt="Logo" />
                        </div>

                        {/* Title */}
                        <h1 className="header__title">Samovar Tours</h1>

                        {/* Navigation Menu */}
                        <div
                            className={`navigation ${isMenuOpen ? 'show__menu' : ''}`}
                        >
                            <ul className="menu d-flex align-items-center gap-5 flex-column flex-md-row">
                                {nav__links.map((item, index) => (
                                    <li className="nav__item" key={index}>
                                        <NavLink
                                            to={item.path}
                                            className={({ isActive }) =>
                                                `nav__link ${isActive ? 'active__link' : ''}`
                                            }
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.display}
                                        </NavLink>
                                    </li>
                                ))}

                                {/* Buttons inside menu on mobile only */}
                                <li className="nav__item d-md-none">
                                    <Button
                                        className="secondary__btn w-100 my-2"
                                        tag={Link}
                                        to="/login"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Login
                                    </Button>
                                    <Button
                                        className="primary__btn w-100"
                                        tag={Link}
                                        to="/register"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Register
                                    </Button>
                                </li>
                            </ul>
                        </div>


                        {/* Login/Register buttons on desktop */}
                        <div className="nav__right d-none d-md-flex align-items-center gap-4">

                            {user ? (<><h5 className='mb-0'>{user.username}</h5>
                                <Button className='btn btn-dark' onClick={Logout}>Logout</Button></>) :
                                (<><Button className="secondary__btn" tag={Link} to="/login">
                                    Login
                                </Button>
                                    <Button className="primary__btn" tag={Link} to="/register">
                                        Register
                                    </Button></>)}
                        </div>

                        {/* Burger Menu Icon */}
                        <span className="mobile__menu d-md-none" onClick={toggleMenu}>
                            <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header


