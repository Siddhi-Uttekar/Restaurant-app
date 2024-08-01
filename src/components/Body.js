
// import React from 'react'
// import RestaurantCard from './RestaurantCard';
// import resObj from '../../utils/mockData';
// import {useState, useEffect} from 'react';

// // const Body = () => {
// //     return(
// //         <div className='body'>
// //             <div className='search'>Search</div>
// //             <div className='res-container'>
// //                 <RestaurantCard resName="Meghna Foods" cusine="Biriyani, North Indian"/>
// //                 <RestaurantCard resName="Kfc" cusine = "McBurger, Fries, Coke"/>
// //             </div>

// //         </div>
// //     )
// // }

// //alwys use key
// //always use unique id ... dont use index no recommended

// const Body = () => {
//  //local state variable
// const [listofRestaurants, setListOfRestaurant] = useState(resObj);

// //takes function and parameter
// useEffect(() => {
//         fetchData();
//                 },    [])

//                 const fetchData = async () => {
//                     try {
//                       const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//                       const data = await response.json();

//                       // Extract restaurant cards from the data
//                     //   const restaurantCards = data.data.cards.map(card => card.card.info);
//                     //   setListOfRestaurant(restaurantCards);
//                     } catch (error) {
//                       console.error('Error fetching data:', error);
//                     }
//                   };

//     return(
//         <div className='body'>
//             <div className='filter'>
//                 <button className='filter-btn'
//                  onClick={() => {
//                    const filteredList = listofRestaurants.filter(
//                     (res) => res.info.avgRating > 4.4
//                    );
//                    setListOfRestaurant(filteredList);
//                 }}
//                     >
//                     Top Rated Restaurants

//                 </button>
//             </div>
//             <div className='res-container'>
//                {listofRestaurants.map((res) => (
//                     <RestaurantCard resData={res.info} key={res.info.id} />
//                 ))}
//             </div>

//         </div>
//     );
// };


// export default Body;


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
const [listofRestaurants, setListOfRestaurant] = useState([]);

//takes function and parameter
useEffect(() => {
        fetchData();
                },    [])

                const fetchData = async () => {
                                       const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

                                       );
                      const json = await response.json();
                      console.log(json)



 setListOfRestaurant(json.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(restaurant => restaurant.info))





                  };

                  //conditional rendering
                  if(listofRestaurants.length == 0){

                    return <Shimmer/>
                  }

    return(
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn'
                 onClick={() => {
                   const filteredList = listofRestaurants.filter(
                    (res) => res.avgRating > 4
                   );
                   setListOfRestaurant(filteredList);
                }}
                    >
                    Top Rated Restaurants

                </button>
            </div>
            <div className='res-container'>
               {listofRestaurants.map((res) => (
                    <RestaurantCard resData={res} key={res.id} />
                ))}
            </div>

        </div>
    );
};


export default Body;