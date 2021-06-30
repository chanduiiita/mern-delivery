import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addToCart } from '../actions/cartActions'
import { deleteFromCart } from '../actions/cartActions'
import Checkout from '../components/Checkout';
import AOS from 'aos'
import 'aos/dist/aos.css';  
export default function Cartscreen() {

    const cartstate = useSelector(state => state.cartReducer);
    const cartItems = cartstate.cartItems
    const subtotal = cartItems.reduce((x, item) => x + item.price, 0)
    const dispatch = useDispatch()
    AOS.init({
           // duration:500
          }) 
    return (
        <div>
           
            <div className="row justify-content-center" data-aos='fade-down' >
                <div className="col-md-6">
                    <h2 style={{ fontSize: '40px' }}>My Cart</h2>
                    {/* <hr></hr> */}
                    <br/>
                    {/* if(cartItems.length===0)
                    <h1>cart is empty</h1> */}
                    {cartItems.map(item => {
                        return <div className="flex-container m-1">
                            <div className="text-left m-1 ">
                                <p  >{item.name} [{item.varient}] </p>
                                {/* <hr></hr>  */}
                                <p className='text-left'>Price:{item.quantity} * {item.prices[0][item.varient]} = {item.price}</p>
                                <p >Quantity
                                {/* style={{'inline'}} */}
                                <br/>
                                <i className="fa fa-minus" aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity - 1, item.varient)) }} ></i>
                                <b >{item.quantity}</b>
                                <i className="fa fa-plus" aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity + 1, item.varient)) }}></i>
                                </p>
                                
                                <br />
                            </div>

                            <div className='m-5 w-100'>
                                <img src={item.image} style={{ height: '150px', height: '150px' }} />
                            </div>
                            <div className='m-5 w-50'>
                                <i className="fa fa-trash mt-5" aria-hidden="true"  onClick={() => { dispatch(deleteFromCart(item)) }}></i>
                               
                            </div>
                            {/* <hr></hr> */}
                        </div>
                        //  {/* <hr></hr>  */}
                    })}
                   
                   {/* <hr /> */}
                </div>
                 {/* <hr></hr> */}
                
                <div className="col-md-4">
                    <h2 style={{ fontSize: '45px' }}>SubTotal:{subtotal}/-  </h2>
                    {/* <button className='btn'>CHECK OUT</button> */}
                    <Checkout subtotal={subtotal}/>
                </div>
            </div>
        </div>
    )
}
