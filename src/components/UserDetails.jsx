import React from 'react'

const UserDetails = ({ user }) => (
  <>
    <div className="user-info"> 
      <div className="profile-photo info"> 
        <img src={user?.profile_image?.medium } />
      </div> 
      <div className="follow-container">
        <span className="data-counts">{user?.total_photos}</span>
        <span className="plain-text">Photos</span>
      </div>
      <div className="follow-container">
        <span className="data-counts">{user?.followers_count}</span>
        <span className="plain-text">Followers</span>
      </div>
      <div className="follow-container">
        <span className="data-counts">{user?.following_count}</span>
        <span className="plain-text">Following</span>
      </div>
     </div>
     <div className="user-details">
      <h3>{user?.name}</h3>
      <span className="plain-text">{user?.bio}</span>
     </div>
  </>  
)

export default UserDetails