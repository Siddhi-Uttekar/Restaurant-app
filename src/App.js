/**
 * components
 * Header
 * -logo
 * -navitems
 * Body
 * -searchbar
 * -Restaurant container
 *  -RestaurantCard
 *   -img
 *   -name of res, star rating, cuisine, delivery time
 * Footer
 * - copyright
 * -links
 * -address
 * -contact
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const Header = () => {
    return (
        <div className="header">
           <div className="logo-container">
             <img className="logo" src="https://static.vecteezy.com/system/resources/previews/009/291/628/non_2x/restaurant-logo-design-vector.jpg">
             </img>
           </div>
           <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>

           </div>
        </div>
    )
}


const RestaurantCard = () =>{
    return(
        <div className='res-card' style = {{backgroundColor:"rgb(220, 224, 191)"}}>
            <img className='res-logo' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iydxtay1mnne2ktw7txe"></img>
          <h3>Meghna Foods</h3>
          <h4>Biriyani, North Indian</h4>
          <h4>4.4 stars</h4>
          <h4>38 minutes</h4>

        </div>
    )
}

const Body = () => {
    return(
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                <RestaurantCard/>
            </div>

        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>


        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);