import React, { useState, useEffect } from 'react';
import Donation from '../../img/donation.jpg';

const RecentActivities = () => {
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch('http://localhost:4009/api/v1/latestactivities');
        if (!response.ok) {
          throw new Error('Failed to fetch activities');
        }
        const data = await response.json();
        setRecentActivities(data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, []);
  return (
    <div>
      <div className="sliderHeading  d-flex justify-content-center">
        <h4 className="sliderHeadingText ">Recent Activity</h4>
      </div>
      <div className="upCard carousel-card">
        <marquee direction="up" height="355" width="90%" scrollamount="3" className="mb-3">
          {recentActivities.map((recentActivity, index) => (
            <p key={index} className="text-dark">{recentActivity.paragraph}</p>
          ))}
        </marquee>
      </div>
      <div className="upCardImg carousel-card mt-5">
        <img src={Donation} alt="Member" />
        <div className="centeredText">
          <a href="/applymember" className="">Member Apply</a>
        </div>
      </div>
    </div>
  )
}

export default RecentActivities;
