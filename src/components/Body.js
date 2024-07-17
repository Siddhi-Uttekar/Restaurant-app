
import React from 'react'
import ReactDOM from 'react-dom/client';
import RestaurantCard from '../RestaurantCard';
import resObj from '../../utils/mockData';
import {useState} from 'react';

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



    return(
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn'
                 onClick={() => {
                   const filteredList = listofRestaurants.filter(

                    (res) => res.info.avgRating > 5
                   );
                   setListOfRestaurant(filteredList);
                }}
                    >
                    Top Rated Restaurants

                </button>
            </div>
            <div className='res-container'>
            {/* {resObj.map((res) => (
                   <RestaurantCard resData={res.info} key={res.info.id} />
               ))} */}
               {listofRestaurants.map((res) => (
                    <RestaurantCard resData={res.info} key={res.info.id} />
                ))}
            </div>

        </div>
    );
};


export default Body;