// reducers/index.js

const initialState = {
    user: null,
    error: '',
    loading: false
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return {
          ...state,
          loading: true,
          error: ''
        };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: action.payload,
          loading: false,
          error: ''
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          user: null,
          loading: false,
          error: action.payload
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          loading: false,
          error: ''
        };
      // Add cases for other actions as needed
      default:
        return state;
    }
  };
  
  export default rootReducer;
  