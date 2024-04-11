import React from 'react';
import '../css/style.css';
import Address from '../img/address.png';
import Phone from '../img/phoneIcon1.png';
import Email from '../img/email.png';

const ContactUs = () => {
    return (
        <div class="contact py-5">
            <div class="container">
                <div class="row">
                    <div class="sliderHeading d-flex justify-content-center sliderHeadingForOthers">
                        <h4 class="sliderHeadingText">Contact Us</h4>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="container pt-5">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="contactUscard mt-3">
                                            <div>
                                                <div class="addIcon d-flex justify-content-center">
                                                    <span class="iconForCard"><img src={Address}
                                                        alt="Address of the Trust" /></span>
                                                </div>
                                                <div class="addHead d-flex justify-content-center py-2">
                                                    <span>Address</span>
                                                </div>
                                                <div class="mainAdd d-flex justify-content-center">
                                                    <span class="text-center">Village - Barodih <br />
                                                        Tehsil - Jakhnia <br />
                                                        District - Ghazipur (U.P.)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="contactUscard mt-3">
                                            <div>
                                                <div class="phoneIcon d-flex justify-content-center">
                                                    <span class="iconForCard"><img src={Phone}
                                                        alt="Sorry , please check your Internet Connection" /></span>
                                                </div>
                                                <div class="phoneHead d-flex justify-content-center py-2">
                                                    <span>Contact Number</span>
                                                </div>
                                                <div class="mainAdd d-flex justify-content-center">
                                                    <span>
                                                        <a href="tel:8840407360">8840407360 </a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="contactUscard mt-3">
                                            <div>
                                                <div class="phoneIcon d-flex justify-content-center">
                                                    <span class="iconForCard"><img src={Email}
                                                        alt="Sorry , please check your Internet Connection" /></span>
                                                </div>
                                                <div class="phoneHead d-flex justify-content-center py-2">
                                                    <span>Emails</span>
                                                </div>
                                                <div class="mainAdd d-flex justify-content-center">
                                                    <span>
                                                        <a href="mailto:support@kartikeywelfaretrust.in">support@kartikeywelfaretrust.in
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
