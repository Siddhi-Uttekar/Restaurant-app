import React from 'react'
import ReactDOM from 'react-dom/client';

// const RestaurantCard = ({ resData }) =>{
//     return(
//         <div className='res-card' style = {{backgroundColor:"rgb(220, 224, 191)"}}>
//           <img className='res-logo' src={resData.cloudinaryImageId}></img>
//           <h3>{resData.name}</h3>
//           <h4>{resData.cuisines.join(', ')}</h4>
//           <h4>{resData.avgRating} stars</h4>
//           <h4>{resData.sla.deliveryTime} minutes</h4>

//         </div>
//     )
// }

// // const RestaurantCard = (props) =>{
// //     / const {resName, cusine} = props;
// //     const {resData} = props;
// //     return(
// //         <div className='res-card' style = {{backgroundColor:"rgb(220, 224, 191)"}}>
// //             <img className='res-logo' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iydxtay1mnne2ktw7txe"></img>
// //           <h3>{resData.name}</h3>
// //           <h4>{}</h4>
// //           <h4>4.4 stars</h4>
// //           <h4>38 minutes</h4>

// //         </div>
// //     )
// // }



const RestaurantCard = ({ resData }) => {
  // Safeguard against undefined or non-array `cuisines`
  const cuisines = Array.isArray(resData.cuisines) ? resData.cuisines.join(", ") : "No cuisines available";

  return (
    <div className='restaurant-card'>
      <h2>{resData.name}</h2>
      <p>Cuisines: {cuisines}</p>
      <p>Rating: {resData.avgRating}</p>
      <p>Delivery Time: {resData?.sla?.deliveryTime || "no delivery time available"} mins</p>
    </div>
  );
};


export default RestaurantCard;