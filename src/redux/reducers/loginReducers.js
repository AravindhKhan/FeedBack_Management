const initialState = {
    userName:"",
    userType:"",
}

const loginReducer = (state=initialState,action) => {
  switch(action.type){
      case 'LOGIN':
          {
              var newState = action.data;
              state = newState;
              return state
          }
      case 'DELETE':
          {
              state = initialState;
              return state
          }
      default:
      return state;
  }
}

export default loginReducer