import React from 'react'
import ActivitiesJobCard from './activity/ActivitiesJobCard';
import Management from './activity/Management';
import RecentActivities from './activity/RecentActivities';

const Allactivities = () => {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-md-3'>
          <Management />
        </div>
        <div className='col-md-6'>
          <ActivitiesJobCard />
        </div>
        <div className='col-md-3'>
          <RecentActivities />
        </div>
      </div>
    </div>
  )
}

export default Allactivities;
