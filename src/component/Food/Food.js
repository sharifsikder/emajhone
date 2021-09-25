import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons'
import './Food.css'

const Food = (props) => {
//    console.log(props.product)
    const{name, price, stock, category, seller, img, starCount, star} = props.product

    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const elements = <FontAwesomeIcon icon={faSave} />

    return (
        <div className='img-cart'>
          
           <div>
               <img className="product-img" src={img} alt=""/>
           </div>
        <div>
        <h4>Name : {name}</h4>
          <p>Price : {price}</p>
          <p> Category : {category}</p>
          <p>Stock : {stock}</p>
          <button onClick={() =>props.handleClick(props.product)} className="btn-cart">{element} Add to Cart</button>
          <button className="btn-details">{elements} Details</button>
        </div>

        </div>
    );
};

export default Food;