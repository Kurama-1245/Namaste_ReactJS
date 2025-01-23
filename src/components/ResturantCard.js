import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  // const { resData } = props; //destructuring of props
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    props.resData?.info;
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-[#f0f0f0] hover:bg-pink-300"
    >
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold">{name}</h3>
      <h2>Cuisines: {cuisines.join(", ")}</h2>
      <h5>{avgRating + " Star"}</h5>
      <h5>{sla.deliveryTime} Min</h5>
    </div>
  );
};

export const withPromotedlabel = (ResturantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <ResturantCard {...props} />
      </>
    );
  };
};

export default ResturantCard;
