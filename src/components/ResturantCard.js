import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  // const { resData } = props; //destructuring of props
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    props.resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h5>{avgRating + " Star"}</h5>
      <h5>{sla.deliveryTime} Min</h5>
    </div>
  );
};

export default ResturantCard;
