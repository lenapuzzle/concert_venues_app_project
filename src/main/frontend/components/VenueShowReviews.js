import React, { useState } from "react";
import { Redirect } from "react-router";

const VenueShowReviews = (props) => {
  const { eventName, userName, text, rating } = props.review;

  const [shouldRedirect, setShouldRedirect] = useState(false)

  const deleteReview = async () => {
    try {
      const response = await fetch(`/api/v1/reviews/${props.review.id}`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(props.review),
      });
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const reviewData = await response.json();
      setShouldRedirect(true);
    } catch (error) {
      console.error(`There was an error in fetch: ${error}`);
    }
  }

  const handleDeleteClick = event => {
    event.preventDefault()
    deleteReview()
  }

  if (shouldRedirect) {
    return <Redirect push to={`/concert-venues/${props.venueId}`} />;
  }

  return (
    <div>
      <div>
        <span>{userName}</span>
      </div>
      <div>
        <span>Rating: {rating}</span>
      </div>
      <div>
        <span> Show/Event: {eventName}</span>
      </div>
      <p>
        <span>{text}</span>
      </p>
      <button type="button" onClick={handleDeleteClick}>Delete Review</button>
    </div>
  );
};

export default VenueShowReviews;
