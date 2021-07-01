import React, { useEffect, useState } from "react";
import EditReview from "./EditReview";
import { Redirect } from "react-router";

const VenueShowReviews = (props) => {
  const { eventName, userName, text, rating, id } = props.review;
  const [reviewEdit, setReviewEdit] = useState(false);
  const [isEditSubmitted, setIsEditSubmitted] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setReviewEdit(true);
  };

  const editReviewSubmitted = () => {
    setIsEditSubmitted(true);
    setReviewEdit(false);
  };

  let editButton;
  let editReviewForm;

  if (reviewEdit) {
    editReviewForm = (
      <EditReview
        id={id}
        handleEdit={props.handleEdit}
        reviewSubmitted={editReviewSubmitted}
        venueId={props.venueId}
      />
    );
    editButton = "";
  } else {
    editButton = (
      <div>
        <button type="button" className="button" onClick={handleClick}>
          Edit Review
        </button>
      </div>
    );
  }

  const [shouldRedirect, setShouldRedirect] = useState(false);

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
  };

  const handleDeleteClick = (event) => {
    event.preventDefault();
    deleteReview();
  };

  if (shouldRedirect) {
    return <Redirect push to={`/concert-venues/${props.venueId}`} />;
  }

  return (
    <div className="review">
      <div>
        <h4> Show/Event: {eventName}</h4>
        <p>
          <span>Rating: {rating}</span>
        </p>
        <div>
          <span>
            <span className="highlight">{userName}</span> says...
          </span>
        </div>
        <p className="description-text">{text}</p>
      </div>
      <div>
        {editButton}
        {editReviewForm}
        <button type="button" className="button" onClick={handleDeleteClick}>
          Delete Review
        </button>
      </div>
    </div>
  );
};

export default VenueShowReviews;
