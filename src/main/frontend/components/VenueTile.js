import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

const VenueTile = (props) => {
  const { id, name, description, imgUrl } = props.venue;
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const deleteVenue = async () => {
    try {
      const response = await fetch(`/api/v1/venues/${id}`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(props.venue),
      });
      if (!response.ok) {
        const errorMsg = `${response.status} (${response.statusText})`;
        const error = new Error(errorMsg);
        throw error;
      }
      const responseBody = await response.json();
      setShouldRedirect(true);
    } catch (error) {}
  };

  let editButton;
  const handleButtonClick = (event) => {
    event.preventDefault();
    deleteVenue();
  };

  if (props.isAdmin) {
    editButton = (
      <div>
        <Link to={`/admin/${id}`}>
          <button type="button">Edit Venue</button>
        </Link>

        <button type="button" onClick={handleButtonClick}>
          Delete Venue
        </button>
      </div>
    );
  }

  if (shouldRedirect) {
    return <Redirect push to={`/admin/concert-venues`} />;
  }

  return (
    <div className={"tile"}>
      <Link to={`/concert-venues/${id}`}>
        <h2>{name}</h2>
      </Link>

      <Link to={`/concert-venues/${id}`}>
        <img 
          src={imgUrl}
          className="venue-image" />
      </Link>

      <p>{description}</p>
      {editButton}
    </div>
  );
};

export default VenueTile;
