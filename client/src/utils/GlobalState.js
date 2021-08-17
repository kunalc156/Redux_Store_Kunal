import React, { createContext, useContext } from "react";
import { useProductReducer, reducer} from './reducers'
import { createStore } from "redux";
import {useSelector, useDispatch, Provider} from 'react-redux';

//const StoreContext = createContext();
//const { Provider } = StoreContext;

const store = createStore(reducer);


const StoreProvider = ({ value = [], ...props }) => {
 /* const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  }); */

  //return <Provider value={[state, dispatch]} {...props} />;  
  return <Provider store={store} {...props} />
}; 

const useStoreContext = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  console.log(state);
 // return useContext(StoreContext);
 return [state ,dispatch];
};

export { StoreProvider, useStoreContext };
