import React from 'react'
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.jpg'

const Newsletter = () => {
    return <section className='newsletter'>
        <Container>
            <Row>
                <Col lg="6">
                    <div className="newsletter__content">
                        <h2>Subscribe now to get useful travelling expedition</h2>

                        <div className="newsletter__input">
                            <input type="email" placeholder='Enter your email' />
                            <button className="btn newsletter__btn">Subscribe</button>
                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eius laboriosam totam, sint ea architecto odio adipisci, perspiciatis a tempora quasi, delectus in iusto odit eligendi quas autem magni. Perspiciatis.</p>

                    </div>
                </Col>

                <Col className="newsletter__img-wrapper" lg="6">
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="" />
                    </div>


                </Col>
            </Row>
        </Container>
    </section>
}

export default Newsletter
