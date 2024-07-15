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


// const RestaurantCard = (props) =>{
//     // const {resName, cusine} = props;
//     const {resData} = props;
//     return(
//         <div className='res-card' style = {{backgroundColor:"rgb(220, 224, 191)"}}>
//             <img className='res-logo' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iydxtay1mnne2ktw7txe"></img>
//           <h3>{resData.name}</h3>
//           <h4>{}</h4>
//           <h4>4.4 stars</h4>
//           <h4>38 minutes</h4>

//         </div>
//     )
// }
const RestaurantCard = ({ resData }) =>{
    return(
        <div className='res-card' style = {{backgroundColor:"rgb(220, 224, 191)"}}>
            <img className='res-logo' src={`https://res.cloudinary.com/cloudinary/image/upload/${resData.cloudinaryImageId}`}></img>
          <h3>{resData.name}</h3>
          <h4>{resData.cuisines.join(', ')}</h4>
          <h4>{resData.avgRating} stars</h4>
          <h4>{resData.sla.deliveryTime} minutes</h4>

        </div>
    )
}

const resObj = [
    {
        info: {
            id: "427774",
            name: "Chaayos Chai+Snacks=Relax",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_427774.JPG",
            locality: "Maan Road",
            areaName: "Hinjawadi",
            costForTwo: "₹250 for two",
            cuisines: [
                "Bakery",
                "Beverages",
                "Chaat",
                "Desserts",
                "Home Food",
                "Italian",
                "Maharashtrian",
                "Snacks",
                "Street Food",
                "Sweets"
            ],
            avgRating: 4.5,
            sla: {
                deliveryTime: 28,
                lastMileTravel: 4.6,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "4.6 km"
            },
            aggregatedDiscountInfoV3: {
                header: "50% OFF",
                subHeader: "UPTO ₹100"
            }
        }
    },
    {
    info: {
        id: "372386",
        name: "The Brooklyn Creamery - Healthy Ice Cream",
        cloudinaryImageId: "b1b35780a9b1dfeb26d680506d494eaa",
        locality: "Times Square",
        areaName: "Hinjawadi",
        costForTwo: "₹200 for two",
        cuisines: [
          "Desserts",
          "Ice Cream",
          "Healthy Food"
        ],
        avgRating: 4.2,
        veg: true,
        parentId: "236673",
        avgRatingString: "4.2",
        totalRatingsString: "100+",
        sla: {
          "deliveryTime": 36,
          "lastMileTravel": 3.7,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "3.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        availability: {
          "nextCloseTime": "2024-07-15 23:59:00",
          "opened": true
        },
    }
},

];

// const Body = () => {
//     return(
//         <div className='body'>
//             <div className='search'>Search</div>
//             <div className='res-container'>
//                 <RestaurantCard resName="Meghna Foods" cusine="Biriyani, North Indian"/>
//                 <RestaurantCard resName="Kfc" cusine = "McBurger, Fries, Coke"/>
//             </div>

//         </div>
//     )
// }

const Body = () => {
    return(
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
            {resObj.map((res) => (
                   <RestaurantCard resData={res.info} key={res.info.id} />
               ))}
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