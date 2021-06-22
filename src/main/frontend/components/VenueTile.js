import React from "react";

const VenueTile = (props) => {
  const {
    name,
    city,
    state,
    address,
    zip,
    phoneNumber,
    capacity,
    description,
    imgUrl,
  } = props.venue;

  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} />
      <p>{description}</p>
    </div>
  );
};

export default VenueTile;
