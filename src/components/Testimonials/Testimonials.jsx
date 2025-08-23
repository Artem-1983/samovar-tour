import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-01.webp'
import ava02 from '../../assets/images/ava-02.jpg'
import ava03 from '../../assets/images/ava-03.jpg'

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }




        ]




    }
    return (
        <Slider {...settings}>
            <div className='testimonial py-4 px-3'>
                <p>'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eligendi, enim perspiciatis amet perferendis incidunt voluptatum ex commodi quae nemo nobis ab fugiat iusto sit soluta tempore possimus ad placeat.'</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava01} className="w-25 h-25 rounded-2" alt="" />

                    <div>
                        <h6 className='mb-0'>Elina Hays</h6>
                        <p className='mb-0'>Customer</p>
                    </div>
                </div>

            </div>


            <div className='testimonial py-4 px-3'>
                <p>'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eligendi, enim perspiciatis amet perferendis incidunt voluptatum ex commodi quae nemo nobis ab fugiat iusto sit soluta tempore possimus ad placeat.'</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava02} className="w-25 h-25 rounded-2" alt="" />

                    <div>
                        <h6 className='mb-0'>James Chow</h6>
                        <p className='mb-0'>Customer</p>
                    </div>
                </div>

            </div>


            <div className='testimonial py-4 px-3'>
                <p>'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eligendi, enim perspiciatis amet perferendis incidunt voluptatum ex commodi quae nemo nobis ab fugiat iusto sit soluta tempore possimus ad placeat.'</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava03} className="w-25 h-25 rounded-2" alt="" />

                    <div>
                        <h6 className='mb-0'>Lia Merlin</h6>
                        <p className='mb-0'>Customer</p>
                    </div>
                </div>

            </div>
        </Slider>
    )
}


export default Testimonials
