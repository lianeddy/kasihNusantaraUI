const initialState = {
  username:'', 
  password:'', 
};

export default (state = initialState, action) => {
  switch (action.type) {
      case 'LOGIN': 
        return action.payload;
    default:
        return state
  }
};