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

            // Limit cuisines to a maximum of 5
    const displayedCuisines = resData.cuisines.length > 5
    ? resData.cuisines.slice(0, 5).join(', ') + '...'
    : resData.cuisines.join(', ');

    return (
        <div className='res-card w-[260px] h-[300px] p-2 m-1.5 overflow-hidden hover:border hover:border-black hover:cursor-pointer rounded-lg' style={{ backgroundColor: "rgb(220, 224, 180)" }}>
            <img
                className='res-logo w-full h-32 object-cover rounded-lg'
                src={imageUrl}
                alt={resData.name}
                onError={(e) => { e.target.onerror = null; e.target.src = fallbackImageUrl; }}
            />
            <h3 className='font-bold text-lg mb-1 ml-1 whitespace-nowrap overflow-hidden text-ellipsis'>{resData.name}</h3>

            <div className='flex'>
            <h4 className="mb-1 flex items-center font-medium">
                <span className=" mr-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-500 text-white">
                    ★
                </span>
                {resData.avgRating}
            </h4>
            <h4 className='ml-3 mb-1 font-medium'> • {resData.sla.deliveryTime} minutes</h4>
            </div>

            <h4 className="mb-1 ml-1 font-medium text-slate-600">{displayedCuisines}</h4>
        </div>
    );
};

//higher order component
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return(
            <div>
                <label>Promoted</label>
                <RestaurantCard{...props}/>
            </div>
        );
    };
};


export default RestaurantCard;
