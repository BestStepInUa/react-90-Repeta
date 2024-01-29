import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';

const initialState = {
  account: {
    balance: 0,
  },
};

const rootReducer = (state = initialState, action) => {
  return state;
};

const enhancer = devToolsEnhancer;

export const store = createStore(rootReducer, enhancer);
