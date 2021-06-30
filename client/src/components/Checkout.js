import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {useDispatch, useSelector} from 'react-redux'
import { placeOrder} from '../actions/orderActions'
// import {placeOrderReducer} from '../reducers/orderReducer'
import Error from "./Error";
import Loading from "./Loading";
import Success from './Success'
export default function Checkout({subtotal}) {
    const orderstate=useSelector((state)=>state.placeOrderReducer)
    const {loading,error,success}=orderstate
    const dispatch=useDispatch()
    function tokenHander(token)
   {
       console.log(token)
       dispatch(placeOrder(token,subtotal))
   }
    return (
        <div>
            {loading && (<Loading/>)}
            {error && (<Error error='Something went wrong'/>)}
            {success && (<Success success='Your Order Placed Successfully'/>)}
            <StripeCheckout
            amount={subtotal*100}
            shippingAddress
            token={tokenHander}
            currency='INR'
            stripeKey='pk_test_51J0J6NSJfiydVTuEn3UQj1P2voZbSeqyp6bdGFIAU4ePS3mF83ow13KqQBzGmt983mUlUtwUwcrJpvqcTV8sxAPe004mv5rZpL'
            >
               
               
                <button className='btn'>
                 Pay Now
                </button>
            </StripeCheckout>
        </div>
    )
}
