const initialState = {
  isLoading: false,
  data: [],
  error: null  
}

const usersPhotos = (state = initialState, action) => {
  switch(action?.type) {
    case 'FETCH_USER_PHOTOS_START': 
      return {...state, isLoading: true}
    case 'FETCH_USER_PHOTOS_SUCCESS': 
      return {...state, data: action?.payload, isLoading: false}
    case 'FETCH_USER_PHOTOS_FAIL':
      return {...state, error: action?.payload, isLoading: false}
    default:
      return state        
  }
}

export default usersPhotos