import React from 'react'

const GridView = ({ userPhotos }) => (
  <div className="grid-view">
   {userPhotos?.map((photo, index) => (
    <img 
    key={`groww-gram-user-grid-${index}`}
      src={photo?.urls?.thumb} 
    />
   ))}
  </div>  
)

export default GridView