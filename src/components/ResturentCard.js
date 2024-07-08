import { CDN_URL } from "../utils/constant";
const ResturentCard = (props) => {
  const { resData } = props;

  const {
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
    sla,
  } = resData?.info;
  return (
    <div className="flip-card col-sm-4">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="card-img" src={CDN_URL + cloudinaryImageId} />
          <h5>{name}</h5>
        </div>

        <div className="flip-card-back">
          <p></p>
          <p>{cuisines.map(String).join(",")}</p>
          <p>{avgRating}⭐</p>
          <p>{costForTwo.toUpperCase()}</p>
          <p>{sla.slaString}</p>
        </div>
      </div>
    </div>
  );
};

export default ResturentCard;
