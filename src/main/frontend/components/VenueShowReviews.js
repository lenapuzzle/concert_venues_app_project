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
        <button type="button" onClick={handleClick}>
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
      {editButton}
      {editReviewForm}
      <button type="button" onClick={handleDeleteClick}>
        Delete Review
      </button>
    </div>
  );
};

export default VenueShowReviews;
