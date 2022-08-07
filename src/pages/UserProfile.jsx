import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip, faList } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/Layout'
import UserDetails from '../components/UserDetails'
import EmptyView from '../components/EmptyView'
import GridView from '../components/GridView'
import getUserInfo from '../redux/getUserInfo/actions'
import getUserPhotos from '../redux/getUserPhotos/actions'
import ListView from '../components/ListView'

const UserProfile = () => {
  const { username } = useParams()  
  const dispatch = useDispatch()
  const [showGrid, setShowGrid] = useState(true)  
  const [isLoading, setIsLoading] = useState(false) 
  let currentPage = 1 
  const { data: userInfo, error: userInfoError } = useSelector(state => state.userInfo)
  const { isLoading: isUserPhotosLoading, data: userPhotos, error: userPhotosError} = useSelector(state => state.userPhotos)  

  const handleGridView = () => setShowGrid(true)
  const handleListView = () => setShowGrid(false)

  const fetchUserPhotos = () => {
    dispatch(getUserPhotos( username, currentPage)).then((status) => { 
    if (status)   currentPage = currentPage + 1 })
  }

  const handleScroll = event => {
    if (window.innerHeight + event.target.documentElement.scrollTop + 1 >= event.target.documentElement.scrollHeight && !isLoading && !isUserPhotosLoading) 
      fetchUserPhotos()
  }

  useEffect(() => {
    setIsLoading(true)
    Promise.all([
      dispatch(getUserInfo(username)), 
      dispatch(getUserPhotos( username, currentPage))
    ]).then((response) =>{ 
      setIsLoading(false)
      currentPage = currentPage + 1  

      if (response[0] && response[1]) {
        console.log('userInfoError ', userInfoError)
        console.log('userPhotosError ', userPhotosError)
       window.addEventListener('scroll', handleScroll)
      }
    }
    )
  }, [])

  return (
    <Layout isProfilePage username={username} error={userInfoError || userPhotosError} >  
     {!isLoading && (
        <>
          <UserDetails user={userInfo} />
          <div className="photo-view-navbar">
            <div className="nav-items" onClick={handleGridView}><FontAwesomeIcon icon={faGrip} /></div>
            <div className="nav-items" onClick={handleListView}><FontAwesomeIcon icon={faList} /></div>
          </div>
          { !!userPhotos?.length && (
             showGrid ? <GridView userPhotos={userPhotos} />  
             : <ListView photos={userPhotos} />
          )}
          { !userPhotos?.length && <EmptyView /> }
        </>
     )}
      { (isLoading || isUserPhotosLoading) &&   
          <div className="loader-style" >
            <Spinner animation="border" role="status" /> 
          </div>
       }
    </Layout>
  )  
}

export default UserProfile