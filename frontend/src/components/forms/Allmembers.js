import React, { useState, useEffect } from 'react'

const Allmembers = () => {
    const [allMembers, setAllMembers] = useState([]);
    
    useEffect(() => {
        const Allmembers = async () => {
          try {
            const response = await fetch('/api/v1/allMembers');
            if (!response.ok) {
              throw new Error('Failed to fetch activities');
            }
            const data = await response.json();
            console.log("allmembers data:", data);
            setAllMembers(data);
          } catch (error) {
            console.error('Error fetching activities:', error);
          }
        };
    
        Allmembers();
      }, []);
    return (
        <div className="pb-5 contact">
            <div className="container" style={{padding: "200px"}}>
                <h3>All members of Kartikey Welfare Trust</h3>
                <div id="data" className="container">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Sno</th>
                                <th scope="col">Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">City</th>
                                <th scope="col">District</th>
                                <th scope="col">State</th>
                                <th scope="col">Upi Method</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allMembers.map((member, index) => (
                                <tr>
                                    <th scope="row">{index+1} </th>
                                    <td>{member.FullName}</td>
                                    <td> {member.Gender}</td>
                                    <td> {member.MobileNumber}</td>
                                    <td> {member.Email}</td>
                                    <td> {member.City}</td>
                                    <td> {member.District}</td>
                                    <td> {member.State}</td>
                                    <td> {member.UpiMethod}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Allmembers;
