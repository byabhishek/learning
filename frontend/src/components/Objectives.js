import React, { useState, useEffect } from 'react';
import Agri from '../img/agri.png';
import Health from '../img/health.png';
import Edu from '../img/edu.png';
import Protest from '../img/protest.png';
import '../css/style.css'

const Objectives = () => {
  const [objectives, setObjectives] = useState([]);

  useEffect(() => {
    const fetchObjectives = async () => {
      try {
        const response = await fetch('http://localhost:4009/api/v1/objectiveData');
        if (!response.ok) {
          throw new Error('Failed to fetch objectiveData');
        }
        const data = await response.json();
        setObjectives(data);
      } catch (error) {
        console.error('Error fetching objectiveData:', error);
      }
    };

    fetchObjectives();
  }, []);

  return (
    <div id="objective" className="py-5">
      <div className="sliderHeading d-flex justify-content-center">
        <h4 className="sliderHeadingText">Our Objective</h4>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="row">
            {objectives.map((objective, index) => (
              <div className="col-sm-3" key={index}>
                <div className="objectiveCard mt-3">
                  <div className="alignJustify">
                    {objective.imgUrl === 'Agri' && <img src={Agri} alt="" className="objectiveImg" />}
                    {objective.imgUrl === 'Health' && <img src={Health} alt="" className="objectiveImg" />}
                    {objective.imgUrl === 'Edu' && <img src={Edu} alt="" className="objectiveImg" />}
                    {objective.imgUrl === 'Protest' && <img src={Protest} alt="" className="objectiveImg" />}
                  </div>
                  <h4 className="alignJustify">{objective.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
