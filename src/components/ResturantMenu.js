import { useEffect ,useState} from "react";
import Shimmer from "./Shimmer";
const ResturantMenu=()=>{
const[resInfo,setResinfo]=useState(null);
useEffect(()=>{
fetchMenu();
},[])
const fetchMenu=async()=>{
    const data=await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING%22"
    )
    const json=await data.json();
   
  
    setResinfo(json.data)
}
console.log(resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//const{name,cuisines,avgRating,costForTwo}=resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants


    return resInfo===null?(<Shimmer/>):(<div className="menu">
    <h1>Name of the Resturant</h1>
    <h2>{name}</h2>
    <ul>

       
    </ul>

    </div>)
}
export default ResturantMenu;