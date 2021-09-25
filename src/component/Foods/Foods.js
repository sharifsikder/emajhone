import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import Name from '../Name/Name';
import './Foods.css'

const Foods = () => {

    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProduct, setDisplayProduct] = useState([])

    useEffect(() => {
        fetch('./mealdb.JSON')
        .then(res => res.json())
        .then(data => {

            setProduct(data)
            setDisplayProduct(data)
        });
    }, [])

    const handleClick = (product) => {
 
        const newProduct = [...cart, product];
        setCart(newProduct)
    }

    const handleSearch = (event) =>{
 const searchName =(event.target.value)
 const matchProduct = products.filter(product => product.name.toLowerCase().includes(searchName.toLowerCase()))
 setDisplayProduct(matchProduct)

    }

    return (

        <>

<div className="search-container">
            <input type="text"
            onChange={handleSearch}
            placeholder=" Search Product" />
        </div>

        <div className="container">
           <div className="product-container">
            <h1>Al Product : {products.length}</h1>
            {
                displayProduct.map(product => <Food 
                    
                    product={product}
                    handleClick = {handleClick}
                    ></Food>)
            }
           </div>
           <div className="cart-container">
           <Cart cart={cart}></Cart>
           <div>
              
              {
                 
                  cart.map(product => <Name

                    product={product}
                    
                    ></Name>)
              }

               </div> 
           </div>
        </div>
        </>
    );
};

export default Foods;