import React from 'react'
import RestaurantCard from './RestaurantCard';
import {useState, useEffect} from 'react';
import Shimmer from './Shimmer';
import {Link} from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';

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
const [searchlistofRestaurants, setSearchListOfRestaurant] = useState([]);
//binding the value with searchtext(local state variable)
//imppp - whenever local variable/ state variable changes react re renders whole component
const [searchText, setSearchText] = useState("");

//takes function and parameter
useEffect(() => { fetchData();},  [])

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
                                     );
            const json = await response.json();
            console.log(json)

        setListOfRestaurant(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(restaurant => restaurant.info));
        setSearchListOfRestaurant(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(restaurant => restaurant.info))

                                  };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>looks like you are offline!</h1>
    else

     //conditional rendering
    return listofRestaurants.length == 0 ? <Shimmer/>
    :(
        <div className='body'>
            <div className='filter flex'>

              <div className='search p-2 m-2'>
                <input type='text' className='search-box border-solid border-black'
                value={searchText}
                onChange={(e)=> {setSearchText(e.target.value)}}
                ></input>

                <button className=" bg-green-400 px-2 py-1 m-4 rounded-sm "
                onClick={() =>{
                    const filteredRestaurant = listofRestaurants.filter((res)=>
                        res.name.toLowerCase().includes(searchText.toLowerCase())

                    );

                    setSearchListOfRestaurant(filteredRestaurant);
                }}

                >Search</button>
              </div>

              <div className='search p-2 m-2 flex items-center'>
              <button className='filter-btn px-2 py-1 bg-orange-300 rounded-sm '
                 onClick={() => {
                   const filteredList = listofRestaurants.filter(
                    (res) => res.avgRating > 4
                   );
                   setSearchListOfRestaurant(filteredList);
                }}
                    >
                    Top Rated Restaurants

                </button>

              </div>

            </div>
            <div className=' res-container flex flex-wrap p-2 m-2 gap-4'>
               {searchlistofRestaurants.map((res) => (
                    <Link key={res.id}  to={"/restaurants/" + res.id }><RestaurantCard resData={res} /></Link>
                ))}
            </div>

        </div>
    );
};

export default Body;
