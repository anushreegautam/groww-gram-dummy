import React from 'react'
import Card from './Card'

const ListView = ({ photos }) => (
  <div className="list-view">
    {photos?.map(photo => (
      <Card 
        key={`groww-gram-feed-photo-${photo?.id}`}
        photo={photo}
      />
    ))}
    </div>  
)

export default ListView