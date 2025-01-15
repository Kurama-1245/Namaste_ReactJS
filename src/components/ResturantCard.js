import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  // const { resData } = props; //destructuring of props
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    props.resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-[#f0f0f0] hover:bg-pink-300">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-b">{name}</h3>
      <h4>Cuisines:</h4>
      <ul>
        {cuisines.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h5>{avgRating + " Star"}</h5>
      <h5>{sla.deliveryTime} Min</h5>
    </div>
  );
};

export default ResturantCard;
