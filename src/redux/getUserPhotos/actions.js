import { CLIENT_ID } from '../../config'

const getUserPhotos = (url, params) => async ( dispatch) => {
  const queryParams = {
    client_id: CLIENT_ID
    // page: params?.page,
    // per_page: params?.per_page
  }

  dispatch({ type: 'FETCH_USER_PHOTOS_START' })

  try {
    const request = await fetch(`${url}?${new URLSearchParams(queryParams)}`)
    const response = await request.json()
    request.ok ? dispatch({ type: 'FETCH_USER_PHOTOS_SUCCESS', payload: response }) 
    : dispatch({ type: 'FETCH_USER_PHOTOS_FAIL', response })
  } catch (e) {
    dispatch({ type: 'FETCH_USER_PHOTOS_FAIL', e })
  } 
}

export default getUserPhotos