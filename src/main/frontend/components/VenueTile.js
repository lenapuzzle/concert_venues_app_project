import React from "react";

const VenueTile = (props) => {
  const {
    id,
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
      <a href={`/concert-venues/${id}`}>
        <h2>{name}</h2>
      </a>

      <a href={`/concert-venues/${id}`}>
        <img src={imgUrl} />
      </a>

      <p>{description}</p>
    </div>
  );
};

export default VenueTile;
