import React, { useState, useEffect } from 'react';
import Agri from '../img/agri.png';

const OurProject = () => {
    const [ourProjects, setOurProjects] = useState([]);

    useEffect(() => {
        const fetchOurProjects = async () => {
            try {
                const response = await fetch('/api/v1/upcomingevents');
                if (!response.ok) {
                    throw new Error('Failed to fetch upcoming events');
                }
                const data = await response.json();
                console.log("OurprojectData", data);
                setOurProjects(data);
            } catch (error) {
                console.error('Error fetching upcoming events:', error);
            }
        };

        fetchOurProjects();
    }, []);

    return (
        <div className='container'>
            <div className='row'>
                {ourProjects.map((ourProject, index) => (
                    <div className="col-md-6" key={index}>
                        <div className="card mb-3" style={{ marginTop: 20 }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={Agri} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{ourProject.cardTitle}</h5>
                                        <p className="card-text">{ourProject.Description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurProject;
