// import {useState, useEffect} from 'react';
// import Shimmer from './Shimmer';
// import { useParams } from 'react-router-dom';
// import React from 'react';
// import {MENU_API} from "../utils/constants";

// const RestauarntMenu  = () =>{

//     const [resInfo, setResInfo] = useState(null);

//     const {resId} = useParams();

//     useEffect(()=>{
//         fetchMenu();
//     }, []);

//     const fetchMenu = async() => {
//         const data = await fetch(MENU_API + resId);
//         const json = await data.json();
//         setResInfo(json.data);
//     };

//     if (resInfo == null)  return <Shimmer/>;

//     // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;
//     // console.log(itemCards)

//     const card2 = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;
// const card3 = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card?.itemCards;
// const card4 = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card?.itemCards;
// const card5 = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card?.itemCards;
// const card6 = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card?.itemCards;

//     return (
//         <div>
//             <h1>name of restaurant{resInfo?.cards[2].card.card.info.name}</h1>
//             <h2>recommended</h2>


//              {card2.map((item) => (
//                 <li key="item.card.info.id">
//                     {item.card.info.name} - {" "}
//                  Rs.{item.card.info.price/100 || item.card.info.defaultPrice}
//                 </li>

//              ))}

//             <h1>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card?.title}</h1>
//              {card3.map((items) => (
//                 <li key="item.card.info.id">
//                     {items.card.info.name} - {" "}
//                  Rs.{items.card.info.price/100 || items.card.info.defaultPrice}
//                 </li>

//              ))}

//             <h1>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card?.card?.title}</h1>
//              {card4.map((items) => (
//                 <li key="item.card.info.id">
//                     {items.card.info.name} - {" "}
//                  Rs.{items.card.info.price/100 || items.card.info.defaultPrice}
//                 </li>

//              ))}

//             <h1>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[5]?.card?.card?.title}</h1>
//              {card5.map((items) => (
//                 <li key="item.card.info.id">
//                     {items.card.info.name} - {" "}
//                  Rs.{items.card.info.price/100 || items.card.info.defaultPrice}
//                 </li>

//              ))}

//             <h1>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[6]?.card?.card?.title}</h1>
//              {card.map((items) => (
//                 <li key="item.card.info.id">
//                     {items.card.info.name} - {" "}
//                  Rs.{items.card.info.price/100 || items.card.info.defaultPrice}
//                 </li>

//              ))}
//         </div>
//     )
// }

// export default RestauarntMenu;

import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import React from 'react';
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo == null) return <Shimmer />;

  // A function to render item cards based on the given index
  const renderItemCards = (cardIndex) => {
    const card = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[cardIndex]?.card?.card?.itemCards || [];
    const title = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[cardIndex]?.card?.card?.title || "No Title";

    if (card.length > 0) {
      return (
        <div key={cardIndex}>
          <h1>{title}</h1>
          <ul>
            {card.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} - Rs. {item.card.info.price / 100 || item.card.info.defaultPrice}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return null;
  };

  return (
    <div>
      <h1>{resInfo?.cards[2]?.card?.card?.info?.name || "Restaurant Name"}</h1>
      <h2>Recommended</h2>

      {[2, 3, 4, 5, 6].map((index) => renderItemCards(index))} {/* Looping through card indices */}
    </div>
  );
};

export default RestaurantMenu;
