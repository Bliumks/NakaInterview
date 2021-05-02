import { combineReducers, createStore } from "redux";

const initialState = {
  revenue: { "TEST": 1 },
};

export const reducer = (state = initialState, action) => {
  if (action.type === 'LOAD_REVENUE_DATA'){
    return Object.assign({}, state, {
      revenue: Object.assign({}, state.revenue,
        { [action.userId]: action.data }
      )
    });
  }
  return state;
};



// store.js
export const store = createStore(reducer);