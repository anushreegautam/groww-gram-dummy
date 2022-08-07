import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Layout from '../components/Layout'
import Card from '../components/Card'
import EmptyView from '../components/EmptyView'
import Loader from '../components/Loader'
import getRandomPhotos from '../redux/getRandomPhotos/actions'

import photos from '../mocks/randomPhoto.json'

const NewsFeed = () => {
  const dispatch =  useDispatch()  
  const { data: photosRedux, isLoading, error} =  useSelector(state => state.randomPhotosList)

//   useEffect(() => {
//     dispatch(getRandomPhotos())
//   }, [])
    
  return (
    <Layout error={error} >
      <Loader blocking={isLoading}> 
      { photos?.length ?
        photos?.map((photo, index) => (
          <Card 
           key={`groww-gram-feed-photo-${index}`}
           photo={photo}
          />
        ))
        : <EmptyView/>
      }  
      </Loader> 
    </Layout>
  )  
}

export default NewsFeed