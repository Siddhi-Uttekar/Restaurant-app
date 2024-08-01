// import React from 'react'
// import ReactDOM from 'react-dom/client';

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







// export default RestaurantCard;

import React from 'react';

const RestaurantCard = ({ resData }) => {
    const cloudName = "cloudinaryImageId"; // Replace with your Cloudinary cloud name
    const fallbackImageUrl = "https://via.placeholder.com/150"; // Placeholder image

    // Construct image URL if cloudinaryImageId is defined, else use fallback
    const imageUrl = resData.cloudinaryImageId
        ? `https://media-assets.swiggy.com/swiggy/image/upload/${resData.cloudinaryImageId}`
        : fallbackImageUrl;

    return (
        <div className='res-card' style={{ backgroundColor: "rgb(220, 224, 191)" }}>
            <img
                className='res-logo'
                src={imageUrl}
                alt={resData.name}
                onError={(e) => { e.target.onerror = null; e.target.src = fallbackImageUrl; }}
            />
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines.join(', ')}</h4>
            <h4>{resData.avgRating} stars</h4>
            <h4>{resData.sla.deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;
