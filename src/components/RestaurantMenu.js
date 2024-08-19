import Shimmer from './Shimmer';
import { useParams, useResolvedPath } from 'react-router-dom';
import React from 'react';
import useRestauarantMenu from '../utils/useRestaurantMenu';
import useRestauarantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo  = useRestauarantMenu(resId);

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
