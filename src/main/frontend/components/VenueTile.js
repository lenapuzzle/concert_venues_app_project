import React from "react";
import { Link } from "react-router-dom";

const VenueTile = (props) => {
  const { id, name, description, imgUrl } = props.venue;

  let editButton;
  if (props.isAdmin) {
    editButton = (
      <Link to={`/admin/${id}`}>
        <button type="button">Edit Venue</button>
      </Link>
    );
  }
  return (
    <div>
      <Link to={`/concert-venues/${id}`}>
        <h2>{name}</h2>
      </Link>

      <Link to={`/concert-venues/${id}`}>
        <img src={imgUrl} />
      </Link>

      <p>{description}</p>
      {editButton}
    </div>
  );
};

export default VenueTile;
