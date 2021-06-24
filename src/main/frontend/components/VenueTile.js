import React from "react";
import { Link } from "react-router-dom";

const VenueTile = (props) => {
  const { id, name, description, imgUrl } = props.venue;

  let editButton;
  if(props.isAdmin) {
    editButton = <Link to={`/admin/${id}`}>
        <button type="button">Edit Venue</button>
      </Link>
  }
  return (
    <div>
      <a href={`/concert-venues/${id}`}>
        <h2>{name}</h2>
      </a>

      <a href={`/concert-venues/${id}`}>
        <img src={imgUrl} />
      </a>

      <p>{description}</p>
      {editButton}
    </div>
  );
};

export default VenueTile;
