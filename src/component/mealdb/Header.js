import React from "react";
import './Header.css';
import logo from '../../logo.png'

const Header = () => {

    return(
        <div>

            <div className="img" >
                <img className='logo' src={logo} alt="" />
            </div>
           <nav>
               <a href="/Home">Home</a>
               <a href="/Contact">Contact</a>
               <a href="/Help">Help</a>
               <a href="/Order">Order</a>
               <a href="/All-food">All Food</a>
               <a href="/Food-Details">Food Details</a>
           </nav>
        </div>
    )
}

export default (Header)




