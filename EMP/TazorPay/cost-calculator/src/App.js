import logo from './logo.svg';
import './App.css';
import {useEffect, useReducer} from "react"
import axios from "axios";
import { reducer } from './reducer/reducer';
import Products from './components/Products';
import Cart from './components/Cart';
function App() {
  const [state,dispatch] = useReducer(reducer,{
    products:[],
    cart:[]
  })
  const fetchData =async()=>{
    const{data} = await axios.get(`https://dummyjson.com/products`);
    // console.log(data);
    dispatch({
      type:"Add_Product",
      payload:data.products,
    })
  }
console.log(state);


  useEffect(()=>{
    fetchData();
},[]);
  return (
    <>
    <Products state={state} dispatch ={dispatch}/>
    <Cart state={state} dispatch ={dispatch}/>
    </>
  );
}

export default App;
