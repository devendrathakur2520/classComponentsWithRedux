import { INCREMENT } from "../action";

const initialState = {
  count: 0,
  
}

export const doIncrement = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: action.payload
      }
    
    default:
      return state
  }
}