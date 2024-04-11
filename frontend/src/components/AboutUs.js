import React, { useState, useEffect } from 'react';
import '../css/style.css';
import Logo from '../img/kartikeyLogo1.png';

const AboutUs = () => {
    const [aboutUs, setAboutUs] = useState([]);

    useEffect(() => {
        const fetchAboutUs = async () => {
            try {
                const response = await fetch('/api/v1/aboutUsData');
                if (!response.ok) {
                    throw new Error('Failed to fetch AboutUs');
                }
                const data = await response.json();
                setAboutUs(data);
            } catch (error) {
                console.error('Error fetching AboutUs:', error);
            }
        };

        fetchAboutUs();
    }, []);
    return (
        <div id="aboutUs" class="py-5" style={{marginTop : 150}}>
            <div class="sliderHeading d-flex justify-content-center ">
                <h4 class="sliderHeadingText">About Us</h4>
            </div>
            <div class="container">
                <div class="row aboutUsContainer">
                    <div class="col-md-5">
                        <div class="justify-content-center d-flex">
                            <img src={Logo} alt="" class="" />
                        </div>
                    </div>
                    <div class="col-md-7">
                        {aboutUs.map((about, index) => (
                        <div class="justify-content-center d-flex align-items-center h-100">
                            <p class="aboutPara">
                                {about.aboutParagraph }
                            </p>
                        </div>
                         ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
