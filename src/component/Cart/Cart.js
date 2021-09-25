import React from 'react';
import './Cart.css'

const Cart = (props) => {
 
    const {cart} = props
    console.log(cart)
   
    let total = 0;
    for(const product of cart){
     
       total = total + product.price;
           
    }
   
    const shiping = total > 0 ? 15:0;
    const tax = total/10;
    const grandTotal = total + shiping + tax;
    return (
        <div className='card'>        
            <h4>Product Count </h4>
            <h5>Items Order : {props.cart.length}</h5>
            <p>Total : {total.toFixed(2)} </p>
      
            <p>Tax :{tax.toFixed(2)} </p>
            <p>Shiping : {shiping.toFixed(2)}</p>
            <h4>Grand Tota : {grandTotal.toFixed(2)}</h4>
      
        </div>
    );
};

export default Cart;