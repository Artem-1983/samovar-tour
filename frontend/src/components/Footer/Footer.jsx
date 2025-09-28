import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { useInView } from 'react-intersection-observer'

const quick__links = [
    { path: '/home', display: 'Home' },
    { path: '/about', display: 'About' },
    { path: '/tours', display: 'Tours' },
]

const quick__links2 = [
    { path: '/gallery', display: 'Gallery' },
    { path: '/login', display: 'Login' },
    { path: '/register', display: 'Register' },
]

const Footer = () => {
    const year = new Date().getFullYear()

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="3" className="footer__column">
                        <div className="footer__logo">
                            <img src={logo} alt="Logo" />
                            <div ref={ref} className="social__links d-flex align-items-center gap-4">
                                {inView && (
                                    <>
                                        <span>
                                            <Link to="#" className="ri-youtube-fill"></Link>
                                        </span>
                                        <span>
                                            <Link to="#" className="ri-vk-fill"></Link>
                                        </span>
                                        <span>
                                            <Link to="#" className="ri-facebook-circle-line"></Link>
                                        </span>
                                        <span>
                                            <Link to="#" className="ri-instagram-line"></Link>
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    </Col>

                    <Col lg="3" className="footer__column">
                        <h5 className='footer__link-title'>Discover</h5>
                        <ListGroup className='footer__quick-links'>
                            {quick__links.map((item, index) => (
                                <ListGroupItem key={index} className='ps-0 border-0'>
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col lg="3" className="footer__column">
                        <h5 className='footer__link-title'>Quick Links</h5>
                        <ListGroup className='footer__quick-links'>
                            {quick__links2.map((item, index) => (
                                <ListGroupItem key={index} className='ps-0 border-0'>
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col lg="3" className="footer__column">
                        <h5 className='footer__link-title'>Contact</h5>
                        <ListGroup className='footer__quick-links'>
                            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                                <h6 className='mb-0 d-flex align-items-center'>
                                    <span><i className="ri-map-pin-line"></i></span> Address:
                                </h6>
                                <p className='mb-0'>SH Diana, worldwide</p>
                            </ListGroupItem>

                            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                                <h6 className='mb-0 d-flex align-items-center'>
                                    <span><i className="ri-mail-line"></i></span> Email:
                                </h6>
                                <p className='mb-0'>rabogoshvili_art@inbox.ru</p>
                            </ListGroupItem>

                            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                                <h6 className='mb-0 d-flex align-items-center'>
                                    <span><i className="ri-phone-fill"></i></span> Phone:
                                </h6>
                                <p className='mb-0'>+123456789</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg="12" className='text-center pt-5'>
                        <p className="copyright">Copyright {year}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer




