import React, { useEffect, useRef, useState, useContext } from 'react'
import '../styles/tour-details.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import calculateAvgRating from './../utils/averageRating'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import Newsletter from '../shared/Newsletter'
import useFetch from '../hooks/useFetch.js'
import { BASE_URL } from './../utils/config'
import { AuthContext } from './../context/AuthContext.js'



const TourDetails = () => {

    const { id } = useParams()

    const reviewMsgRef = useRef('')

    const [tourRating, setTourRating] = useState(null)

    const { user } = useContext(AuthContext)

    //fetch data from the database 


    const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`)



    const {
        photo = '',
        title = '',
        desc = '',
        price = 0,
        reviews = [],
        city = '',
        distance = 0,
        maxGroupSize = 0
    } = tour || {}


    // Only calculate avgRating if reviews exist
    const { avgRating, totalRating } = reviews.length > 0 ? calculateAvgRating(reviews) : { avgRating: 0, totalRating: 0 }


    const options = { day: 'numeric', month: 'long', year: 'numeric' }

    // submit request to the server

    const submitHandler = async e => {
        e.preventDefault()
        const reviewText = reviewMsgRef.current.value

        try {

            if (!user || user === undefined || user === null) {
                alert('Please sign in to leave a review')
            }

            const reviewObj = {
                username: user?.username,
                reviewText,
                rating: tourRating
            }

            if (tourRating === null) {
                return alert('Please rate the tour first!')
            }

            const res = await fetch(`${BASE_URL}/review/${id}`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(reviewObj)
            })

            const result = await res.json();
            if (!res.ok) { return alert(result.message) }

            alert(result.message)
        }

        catch (err) {
            alert(err.message)

        }
    }


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [tour])





    return (
        <section>

            <Container>
                {loading && <h4 className='text-center pt-5'>Loading...</h4>}

                {error && <h4 className='text-center pt-5'>{error}</h4>}

                {!loading && !error && (
                    <Row>
                        <Col lg="8">
                            <div className="tour__content">
                                <img className="tour__img" src={`https://samovar-tour.onrender.com${photo}`} alt="tour-img" />

                                <div className="tour__info">
                                    <h2>{title}</h2>
                                    <div className='d-flex align-items-center gap-5'>

                                        <span className="tour__rating d-flex align-items-center gap-1">
                                            <i class="ri-star-fill" style={{ 'color': 'var(--secondary-color)' }}></i>{avgRating === 0 ? null : avgRating}
                                            {totalRating === 0 ? 'Not rated' : <span>({reviews.length})</span>}

                                        </span>

                                        <span>
                                            <i className='ri-map-pin-user-fill'></i>{city}
                                        </span>
                                    </div>


                                    <div className="tour__extra-details">
                                        <span><i className='ri-money-dollar-circle-line'></i>{price}/per person</span>

                                        <span><i className='ri-map-pin-time-line'></i>{distance} k/m</span>

                                        <span><i className='ri-group-line'></i>{maxGroupSize} people</span>
                                    </div>
                                    <h5>Description</h5>
                                    <p>{desc}</p>
                                </div>


                                {/* tour review section */}


                                <div className="tour__reviews mt-4">
                                    <h4>Review({reviews?.length} reviews)</h4>

                                    <Form onSubmit={submitHandler}>
                                        <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                                            1<span onClick={() => setTourRating(1)}>
                                                <i className={`ri-star-s-fill ${tourRating === 1 ? 'ri-star-active' : ''}`}></i>
                                            </span>
                                            2<span onClick={() => setTourRating(2)}>
                                                <i className={`ri-star-s-fill ${tourRating === 2 ? 'ri-star-active' : ''}`}></i>
                                            </span>
                                            3<span onClick={() => setTourRating(3)}>
                                                <i className={`ri-star-s-fill ${tourRating === 3 ? 'ri-star-active' : ''}`}></i>
                                            </span>
                                            4<span onClick={() => setTourRating(4)}>
                                                <i className={`ri-star-s-fill ${tourRating === 4 ? 'ri-star-active' : ''}`}></i>
                                            </span>
                                            5<span onClick={() => setTourRating(5)}>
                                                <i className={`ri-star-s-fill ${tourRating === 5 ? 'ri-star-active' : ''}`}></i>
                                            </span>
                                            <div className="review__input">
                                                <input type="text" placeholder='Share your thoughts' ref={reviewMsgRef} required />
                                                <button type="submit" className="btn primary__btn text-white">Submit</button>
                                            </div>
                                        </div>
                                    </Form>


                                    <ListGroup className='user__reviews'>
                                        {reviews?.map(review => (
                                            <div className="review__item">
                                                <img src={avatar} alt="" />
                                                <div className="w-100">

                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <h5>{review.username}</h5>
                                                            <p>{new Date(review.createdAt).toLocaleDateString("en-US", options)}</p>
                                                        </div>
                                                        <span className='d-flex align-items-center'>
                                                            {review.rating} <i className='ri-star-s-fill'></i>
                                                        </span>
                                                    </div>
                                                    <h6>{review.reviewText}</h6>

                                                </div>

                                            </div>
                                        ))}
                                    </ListGroup>


                                </div>



                                {/* tour review section end */}

                            </div>
                        </Col>

                        <Col lg="4"><Booking tour={tour} avgRating={avgRating} /></Col>
                    </Row>
                )

                }

            </Container>
            <Newsletter />
        </section>


    )
}

export default TourDetails
