import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(MENU_URL + resId)
        const res = await data.json()
        setResInfo(res.data)
        console.log(res.data)
    }
    return resInfo
}

export default useRestaurantMenu;