import React from 'react';
import '../styles/home.css'
import { Container, Col, Row } from 'reactstrap'
import Subtitle from '../shared/Subtitle'
import LazyVideo from '../shared/LazyVideo'
import experienceImg from '../assets/images/experience.png'
import worldImg from '../assets/images/world.png'
import thumb1 from '../assets/videos/thumb-1.png'
import thumb2 from '../assets/videos/thumb-1.png'
import thumb3 from '../assets/videos/thumb-1.png'
import heroVideo1 from '../assets/videos/video-1.mp4'
import heroVideo2 from '../assets/videos/video-2.mp4'
import heroVideo3 from '../assets/videos/video-3.mp4'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/FeaturedTours/FeatureTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonials/Testimonials'
import Newsletter from '../shared/Newsletter'

const Home = () => {
    return <>
        {/* Hero section starts */}
        <section>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="hero__content">

                            <div className="hero__subtitle d-flex align-items-center">
                                <Subtitle subtitle={'Explore the destinations off-the-beaten track'} />
                                <img src={worldImg} alt="" />
                            </div>

                            <h1>Tailor-made <span className='highlight'> expeditions </span> to Russian Siberia, Northern and Central Asia </h1>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, deserunt dolorem voluptates tenetur ratione sapiente, commodi in enim ab accusantium reiciendis nemo magni praesentium eius temporibus quasi! Ea, incidunt veritatis?</p>
                        </div>
                    </Col>


                    <Col lg="2">
                        <div className="hero__img-box">
                            <LazyVideo videoSrc={heroVideo1} posterImg={thumb1} />
                        </div>
                    </Col>

                    <Col lg="2">
                        <div className="hero__img-box mt-4">
                            <LazyVideo videoSrc={heroVideo2} posterImg={thumb2} />
                        </div>
                    </Col>

                    <Col lg="2">
                        <div className="hero__img-box mt-5">
                            <LazyVideo videoSrc={heroVideo3} posterImg={thumb3} />
                        </div>
                    </Col>

                    <SearchBar />
                </Row>

            </Container>
        </section>

        {/* Hero section ends */}


        {/* Service section starts */}

        <section>
            <Container>
                <Row>
                    <Col lg="3">
                        <h5 className="services__subtitle">What we serve</h5>
                        <h2 className="services__title">We offer our best services</h2>
                    </Col>
                    <ServiceList />
                </Row>
            </Container>
        </section>

        {/* Service section ends */}
        {/* 
        Featured tour section starts */}


        <section>
            <Container>
                <Row>
                    <Col lg="12" className='mb-5'>
                        <Subtitle subtitle={'Explore'} />
                        <h2 className="featured__tour-title">Our Featured Tours</h2>


                    </Col>
                    <FeaturedTourList />
                </Row>

            </Container>


        </section>

        {/* Featured tour section ends */}




        {/* Experience section starts */}

        <section>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="experience__content">
                            <Subtitle subtitle={'Experience'} />
                            <h2>With all our experience <br />we will serve you</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id in tenetur magni, error provident nostrum obcaecati cumque perferendis quibusdam deserunt reiciendis et corporis optio at impedit officiis dignissimos veniam distinctio.</p>
                        </div>

                        <div className="counter__wrapper d-flex align-items-center gap-5">

                            <div className="counter__box">
                                <span>12k+</span>
                                <h6>Successful trips</h6>
                            </div>

                            <div className="counter__box">
                                <span>2k+</span>
                                <h6>Regular Clients</h6>
                            </div>

                            <div className="counter__box">
                                <span>15</span>
                                <h6>Years of Experience</h6>
                            </div>

                        </div>


                    </Col>
                    <Col lg="6">
                        <div className="experience__img">
                            <img src={experienceImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>



        </section>


        {/* Experience section ends */}


        {/* Gallery sections starts */}

        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <Subtitle subtitle={"Gallery"} />
                        <h2 className="gallery__title">Visit our customer tour gallery</h2>
                    </Col>

                    <Col lg="12">
                        <MasonryImagesGallery />
                    </Col>



                </Row>
            </Container>
        </section>
        {/* Gallery section ends */}


        {/* Testimonial section starts */}


        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <Subtitle subtitle={'Feedback from our Fans'} />
                        <h2 className="testimonal__title">What our Fans say about us</h2>
                    </Col>

                    <Col lg="12">
                        <Testimonials />
                    </Col>
                </Row>
            </Container>


        </section>

        <Newsletter />






        {/* Testimonial section ends */}


    </>

}

export default Home
