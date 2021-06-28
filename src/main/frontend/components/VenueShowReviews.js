import React, { useEffect, useState } from "react";
import EditSubmittedTile from "./EditSubmittedTile";
import EditReview from "./EditReview";

const VenueShowReviews = (props) => {
  const { eventName, userName, text, rating, id } = props.review;
  const [reviewEdit, setReviewEdit] = useState(false);
  const [isEditSubmitted, setIsEditSubmitted] = useState(false);

  useEffect(() => {}, [isEditSubmitted]);

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
    </div>
  );
};

export default VenueShowReviews;
