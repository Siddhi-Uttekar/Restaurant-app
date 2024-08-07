import {useState, useEffect} from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import React from 'react';


const RestauarntMenu  = () =>{

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    }, []);

    const fetchMenu = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }


    return resInfo ==null ? <Shimmer/> : (
        <div>
            <h1>name of restaurant{resInfo?.cards[2].card.card.info.name}</h1>
            <h2>recommended</h2>
            {/* <h2>{resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name}</h2> */}
            {/* <h2>{resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[0].card.info.price}</h2>

            <h2>{resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.info.name}</h2>
            <h2>{resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.info.price}</h2> */}
        </div>
    )
}

export default RestauarntMenu;