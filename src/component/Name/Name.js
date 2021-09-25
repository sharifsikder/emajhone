import React from 'react';
import './Name.css'

const Name = (props) => {
    // console.log(props)

   const{name, price} =props.product
  
  
    return (
        <div className='names'>
            <h5>Name : {name}</h5>
            <p>Price : {price} $</p>

        </div>
    );
};

export default Name;