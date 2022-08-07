import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip, faList } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/Layout'
import Loader from '../components/Loader'
import Card from '../components/Card'
import UserDetails from '../components/UserDetails'
import EmptyView from '../components/EmptyView'
import GridView from '../components/GridView'
import getUserInfo from '../redux/getUserInfo/actions'
import getUserPhotos from '../redux/getUserPhotos/actions'

import userInfo from '../mocks/userInfo.json'
import userPhotos from '../mocks/userPhotos.json'

const UserProfile = () => {
  const { username } = useParams()  
  const dispatch = useDispatch()
  const [showGrid, setShowGrid] = useState(true)  
  const { isLoading: isUserInfoLoading, data: userInfoRedux, error: userInfoError} = useSelector(state => state.userInfo)
  const { isLoading: isUserPhotosLoading, data: userPhotosRedux, error: userPhotosError} = useSelector(state => state.userPhotos)  

  const handleGridView = () => setShowGrid(true)
  const handleListView = () => setShowGrid(false)

//   useEffect(() => {
//     dispatch(getUserInfo(username))
//   }, [])

//   useEffect(() => {
//     !isUserPhotosLoading && userInfo?.links?.photos && userInfo?.total_photos && dispatch(getUserPhotos(userInfo?.links?.photos, username))
//   }, [userInfo, isUserPhotosLoading])

  return (
    <Layout isProfilePage username={username} error={userInfoError || userPhotosError}>
     <Loader blocking={isUserInfoLoading} >   
     <UserDetails user={userInfo} />
     <div className="photo-view-navbar">
       <div className="nav-items" onClick={handleGridView}><FontAwesomeIcon icon={faGrip} /></div>
       <div className="nav-items" onClick={handleListView}><FontAwesomeIcon icon={faList} /></div>
     </div>
     <Loader blocking={isUserPhotosLoading}>
      { userPhotos?.length ? (
        showGrid ? <GridView userPhotos={userPhotos} />  
        : userPhotos?.map(photo => (
            <Card
            key={`groww-gram-user-photo-${photo?.id}`}
             photo={photo}
            />
        ))
      ) : <EmptyView /> }  
      {/* (userInfoError || userPhotosError) ? <ErrorMsg /> : */}
     </Loader>
     </Loader>
    </Layout>
  )  
}

export default UserProfile