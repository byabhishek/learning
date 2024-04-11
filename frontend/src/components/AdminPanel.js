import React from 'react'
import { Link } from 'react-router-dom';
const AdminPanel = () => {
    return (
        <div class="container py-5 mt-5" >
            <div className='mt-5 ' style={{ height: '420px' }}>
                <div class="mt-4">
                    <h1 >Admin Panel</h1>
                </div>
                <div id="data" class="d-flex justify-content-center row">
                    <div className='col-sm-6'>
                        <div class="card m-5">
                            <div class="card-body">
                                <h3 class="card-title">Add Upcoming Events</h3>
                                <p class="card-text">Click here to add upcoming events</p>
                                <Link to={'/addevents'} className="formBtn">Add Upcoming Events</Link>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-6'>
                        <div class="card m-5">
                            <div class="card-body">
                                <h3 class="card-title">See all members</h3>
                                <p class="card-text">Click here to see all members</p>
                                <Link to={'/allmembers'} className="formBtn">See all members</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdminPanel;
