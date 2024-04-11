import React from 'react'
import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Farming from '../img/farming.jpg';
import Kids from '../img/kids.jpg'
import Book from '../img/book.jpg'
import Allactivities from './Allactivities';
import AboutUs from './AboutUs';
import Objectives from './Objectives';
import ContactUs from './ContactUs';
const Home = () => {
    return (
      <>
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100 crouselImg"
                    src={Farming}
                    alt="First slide"
                />
                <Carousel.Caption className='sliderText'>
                    <h5 className="captionHead sliderTextmove">Cultivating India's Future: The Ever-Growing Promise of Farming</h5>
                    <p className="captionPara sliderTextmove d-md-block d-none">In the heart of India's fertile lands, where the seeds of hope are
                        sown, farmers
                        nurture a thriving legacy, cultivating the nation's growth, one harvest at a time.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 crouselImg"
                    src={Kids}
                    alt="Second slide"
                />
                <Carousel.Caption className='sliderText'>
                    <h5 className="captionHead sliderTextmove">Empowering Minds, Igniting Dreams: The Journey of Education in India</h5>
                    <p className="captionPara sliderTextmove d-md-block d-none">Education is the beacon that illuminates the path of progress,
                        unlocking the doors to
                        knowledge and transforming aspirations into realities, shaping a brighter future for India and its children.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 crouselImg"
                    src={Book}
                    alt="Third slide"
                />
                <Carousel.Caption className='sliderText'>
                    <h5 className="captionHead sliderTextmove">Unveiling Wisdom's Treasure Trove: Libraries and Books Enriching India's Soul</h5>
                    <p className="captionPara sliderTextmove d-md-block d-none">Amidst the pages of countless books, India's libraries stand as
                        reservoirs of
                        knowledge, offering a sanctuary where imagination soars, ideas unite, and minds find solace in the embrace
                        of timeless wisdom.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <Allactivities />
        <AboutUs />
        <Objectives />
        <ContactUs />
        
        </>
    )
}

export default Home;