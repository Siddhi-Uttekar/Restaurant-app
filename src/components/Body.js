
import React from "react";
import RestaurantCard from "./RestaurantCard";
import resObj from "../../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
=======
import React from 'react'
import RestaurantCard from './RestaurantCard';
import resObj from '../../utils/mockData';
import {useState, useEffect} from 'react';
import Shimmer from './Shimmer';
import {Link} from "react-router-dom";

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
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const response = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const json = await response.json();
		console.log(json);

		setListOfRestaurant(
			json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
				(restaurant) => restaurant.info
			)
		);
		setSearchListOfRestaurant(
			json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
				(restaurant) => restaurant.info
			)
		);
	};

	//conditional rendering
	return listofRestaurants.length == 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter">
				<div className="search">
					<input
						type="text"
						className="search-box"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					></input>

					<button
						onClick={() => {
							const filteredRestaurant = listofRestaurants.filter((res) =>
								res.name.toLowerCase().includes(searchText.toLowerCase())
							);

							setSearchListOfRestaurant(filteredRestaurant);
						}}
					>
						Search
					</button>
				</div>

				<button
					className="filter-btn"
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
			<div className="res-container">
				{searchlistofRestaurants.map((res) => (
					<RestaurantCard resData={res} key={res.id} />
				))}
			</div>
		</div>
	);
=======
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

     //conditional rendering
    return listofRestaurants.length == 0 ? <Shimmer/>
    :(
        <div className='body'>
            <div className='filter'>

              <div className='search'>
                <input type='text' className='search-box'
                value={searchText}
                onChange={(e)=> {setSearchText(e.target.value)}}
                ></input>

                <button onClick={() =>{
                    const filteredRestaurant = listofRestaurants.filter((res)=>
                        res.name.toLowerCase().includes(searchText.toLowerCase())

                    );

                    setSearchListOfRestaurant(filteredRestaurant);
                }}

                >Search</button>
              </div>

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
               {searchlistofRestaurants.map((res) => (
                    <Link key={res.id}  to={"/restaurants/" + res.id }><RestaurantCard resData={res} /></Link>
                ))}
            </div>

        </div>
    );
};

export default Body;
