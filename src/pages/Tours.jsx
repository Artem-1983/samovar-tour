import React, { useState, useEffect } from 'react'
import CommonSection from '../../src/shared/CommonSection'
import '../styles/tour.css'
import TourCard from '../shared/TourCard'
import SearchBar from '../shared/SearchBar'
import Newsletter from '../shared/Newsletter'
import { Col, Container, Row } from 'reactstrap'

import useFetch from '../hooks/useFetch.js'
import { BASE_URL } from '../utils/config.js'

const TOURS_PER_PAGE = 8;

const Tours = () => {
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(1)

    const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`)
    const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`)


    useEffect(() => {

        if (tourCount && !isNaN(tourCount)) {
            const pages = Math.ceil(tourCount / TOURS_PER_PAGE)
            setPageCount(pages)
        }
    }, [tourCount])


    useEffect(() => {
        window.scrollTo({ top: 100, behavior: 'smooth' })
    }, [page])


    return (
        <>
            <CommonSection title={'All Tours'} />

            <section>
                <Container>
                    <Row>
                        <SearchBar />
                    </Row>
                </Container>
            </section>

            <section>
                <Container>

                    <Row>
                        {loading && <h4 className='text-center pt-5'>Loading...</h4>}
                        {error && <h4 className='text-center pt-5' >{error}</h4>}
                        {!loading && !error && tours?.map(tour => (
                            <Col lg="3" className='mb-4' key={tour._id}>
                                <TourCard tour={tour} />
                            </Col>
                        ))}
                    </Row>

                    <Row>
                        <Col lg="12">
                            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                                {[...Array(pageCount).keys()].map(number => (
                                    <span
                                        className={page === number + 1 ? 'active__page' : ''}
                                        key={number}
                                        onClick={() => setPage(number + 1)}
                                    >
                                        {number + 1}
                                    </span>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Newsletter />
        </>
    )
}

export default Tours