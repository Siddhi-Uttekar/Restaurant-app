import {useState, useEffect} from 'react';
import Shimmer from './Shimmer';


const RestauarntMenu  = () =>{

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    }, []);

    const fetchMenu = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=752535&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }


    return resInfo ==null ? <Shimmer/> : (
        <div>
            <h1>name of restaurant</h1>
            <h2>menu</h2>
        </div>
    )
}

export default RestauarntMenu;