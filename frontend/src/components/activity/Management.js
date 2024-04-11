import React, { useState, useEffect } from 'react';
import MemberPhotoPlaceholder from '../../img/avatarUser.png'; 
import Donation from '../../img/donation.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Management = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('/api/v1/memberslider');
        if (!response.ok) {
          throw new Error('Failed to fetch members');
        }
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div>
      <div className="sliderHeading d-flex justify-content-center">
        <h4 className="sliderHeadingText">Members / Management</h4>
      </div>
      <div id="carouselExampleControls" className="carousel slide carousel-card" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner carousel-inner-card">
          {members.map((member, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <img src={member.photo || MemberPhotoPlaceholder} className="d-block w-100" alt="Member" />
                <h5 className="sliderText d-flex justify-content-center">{member.name}</h5>
                <p className="sliderText d-flex justify-content-center">{member.designation}</p>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="upCardImg carousel-card mt-5">
        <img src={Donation} alt="Donation" />
        <div className="centeredText">
          <a href="/donate" className="">Donation</a>
        </div>
      </div>
    </div>
  );
}

export default Management;
