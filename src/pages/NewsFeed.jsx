import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'

import Layout from '../components/Layout'
import EmptyView from '../components/EmptyView'
import getRandomPhotos from '../redux/getRandomPhotos/actions'
import ListView from '../components/ListView'

const NewsFeed = () => {
  const dispatch =  useDispatch()  
  const { data: photos, isLoading, error} =  useSelector(state => state.randomPhotosList)

  const handleScroll = (e) => {
    if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight && !isLoading)
       dispatch(getRandomPhotos())
  }

  useEffect(() => {
    dispatch(getRandomPhotos()).then(response => {
      if (response) {
        window.addEventListener('scroll', handleScroll)
      }
    })
  }, [])
    
  return (
    <Layout error={error} >  
      { !isLoading ? (
        !!photos?.length ?
        <ListView photos={photos} />
         : <EmptyView /> )
         : 
          <div className="loader-style" >
            <Spinner animation="border" role="status" /> 
          </div>
       }
    </Layout>
  )  
}

export default NewsFeed