import React, { useState, useEffect } from 'react';
import Facebook from '../../img/face.png';
import Instagram from '../../img/insta.png';
import { FaCalendarWeek } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import '../../css/style.css';


const ActivitiesJobCard = () => {
  const [activityJobCards, setActivityJobCards] = useState([]);

  useEffect(() => {
    const fetchActivityJobCards = async () => {
      try {
        const response = await fetch('/api/v1/activityJobCard');
        if (!response.ok) {
          throw new Error('Failed to fetch activityJobCards');
        }
        const data = await response.json();

        setActivityJobCards(data);
      } catch (error) {
        console.error('Error fetching activityJobCards:', error);
      }
    };

    fetchActivityJobCards();
  }, []);

  // Map of icon components
  const iconComponents = {
    FaCalendarWeek: FaCalendarWeek,
    FaTasks: FaTasks,
    FaHandHoldingUsd: FaHandHoldingUsd,
    FaUsers: FaUsers
  };

  return (
    <div>
      <div className="row">
        <div className="allActivityBox">
          {activityJobCards.map((activityJobCard, index) => (
            <div className="activityBox" key={index}>
              <div className="activityCard">
                <a href={activityJobCard.url}>
                  {/* Dynamically render icon based on iconUrl */}
                  {iconComponents[activityJobCard.iconUrl] && (
                    <i className="alignJustify text-light fa-2x pb-2">
                      {React.createElement(iconComponents[activityJobCard.iconUrl])}
                    </i>
                  )}
                  <a href={activityJobCard.url} className="alignJustify text-light">{activityJobCard.jobName}</a>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className="sliderHeading d-flex justify-content-center pt-4">
        <h4 className="sliderHeadingText">Latest Activity</h4>
      </div>
      <div className="latestActivity">
        <h4 className="px-3">Follow us on Social Media for all Latest Activity</h4>
        <div className="px-4 py-3">
          <a href="https://www.facebook.com/kartikeyavelapheyaratrasta?mibextid=LQQJ4d" className="socialLink py-3">
            <p className="mb-0">Follow us on Facebook</p>
            <img src={Facebook} alt="Facebook" />
          </a>
        </div>
        <div className="px-4 py-3">
          <a href="https://instagram.com/kartikeyawelfaretrust?igshid=OGQ5ZDc2ODk2ZA==" className="socialLink py-3">
            <p className="mb-0">We are on Instagram too</p>
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesJobCard;
