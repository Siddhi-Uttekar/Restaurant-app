import { MENU_API } from "../utils/constants";
import { useState, useEffect } from 'react';

const useRestauarantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();

    }, []);

    const fetchData = async () =>{
        const data = await fetch(MENU_API + resId);
        const json = await data.json();

    };

    return resInfo;
};

export default useRestauarantMenu;