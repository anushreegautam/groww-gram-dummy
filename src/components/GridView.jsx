import React from 'react'

const GridView = ({ userPhotos }) => (
  <div className="grid-view">
   {userPhotos?.map(photo => (
    <img 
      key={`groww-gram-user-grid-${photo?.id}`}
      src={photo?.urls?.thumb} 
    />
   ))}
  </div>  
)

export default GridView
