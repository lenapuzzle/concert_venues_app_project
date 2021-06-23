import React from "react";
import { Link } from "react-router-dom";

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
    id
  } = props.venue;

  let editButton;
  if(props.isAdmin) {
    editButton = <Link to={`/admin/${id}`}>
        <button type="button">Edit Venue</button>
      </Link>
  }
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} />
      <p>{description}</p>
      {editButton}
    </div>
  );
};

export default VenueTile;
