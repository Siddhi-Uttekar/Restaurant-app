
import React from 'react'
import RestaurantCard from './RestaurantCard';
import resObj from '../../utils/mockData';
import {useState, useEffect} from 'react';
import Shimmer from './Shimmer';

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

//alwys use key
//always use unique id ... dont use index no recommended

const Body = () => {
 //local state variable
const [listofRestaurants, setListOfRestaurant] = useState(resObj);

//takes function and parameter
useEffect(() => {
        fetchData();
                },    [])

const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json);
    const restaurantCards = json.data.cards.map(card => card.card);
}

if(listofRestaurants.length === 0){
    return <Shimmer/>
}
    return(
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn'
                 onClick={() => {
                   const filteredList = listofRestaurants.filter(
                    (res) => res.info.avgRating > 4.4
                   );
                   setListOfRestaurant(filteredList);
                }}
                    >
                    Top Rated Restaurants

                </button>
            </div>
            <div className='res-container'>
               {listofRestaurants.map((res) => (
                    <RestaurantCard resData={res.info} key={res.info.id} />
                ))}
            </div>

        </div>
    );
};


export default Body;