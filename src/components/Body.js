import ResturentCard from "./ResturentCard";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useState } from "react";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filterResturant, setFilterResturant] = useState("");
  const [listOfRestaurants, setlistOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
    console.log("useEffect called");
  }, []);
  const fetchData = async () => {
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json();
    console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
     )
    setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };
  console.log("render comp");
  if (setlistOfRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="container">
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              value={searchText}
              className="search-box"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>
            <button
              onClick={() => {
                console.log({ searchText });

                const filteredResturant = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText)
                );
                setlistOfRestaurant(filteredResturant);
              }}
            >
              search
            </button>
          </div>
          <button
            className="filter-btn"
            onClick={() => {
              const filterList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.1
              );
              setlistOfRestaurant(filterList);
            }}
            onMouseOver={() => {
              console.log("mouse pass");
            }}
          >
            Top Rated Resturant{" "}
          </button>
        </div>

        <div className="restro-container ">
          {listOfRestaurants.map((restaurant) => (
            <ResturentCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
