import React, { useEffect, useState } from "react";
import VenueShowReviews from "./VenueShowReviews.js";
import ReviewForm from "./ReviewForm.js";
import ReviewSubmittedTile from "./ReviewSubmittedTile.js";

const VenueShow = (props) => {
  const [venue, setVenue] = useState({ reviews: [] });
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);
  const [successfulEdit, setSuccessfulEdit] = useState(false);
  const venueId = props.match.params.id;

  const fetchVenue = async () => {
    try {
      const response = await fetch(`/api/v1/venues/${venueId}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const venueData = await response.json();
      setVenue(venueData.venue);
    } catch (error) {
      console.error(`There was an error in fetch: ${error}`);
    }
  };

  useEffect(() => {
    fetchVenue();
  }, [isReviewSubmitted, successfulEdit]);

  const handleEdit = () => {
    setSuccessfulEdit(true);
  };

  let reviews = venue.reviews.map((review) => {
    return (
      <VenueShowReviews
        key={review.id}
        review={review}
        venueId={venueId}
        handleEdit={handleEdit}
      />
    );
  });

  const handleClick = (event) => {
    event.preventDefault();
    setShowReviewForm(true);
  };

  const handleContinue = (event) => {
    event.preventDefault();
    setIsReviewSubmitted(false);
  };

  // Toggles the view of logic below
  const reviewSubmitted = () => {
    setIsReviewSubmitted(true);
    setShowReviewForm(false);
  };

  let reviewSubmittedResponse;
  let reviewForm;
  let reviewButton;
  // Determines display of reviews or form or submitted page
  if (showReviewForm) {
    reviewForm = <ReviewForm id={venueId} reviewSubmitted={reviewSubmitted} />;
    reviewButton = "";
  } else if (isReviewSubmitted) {
    reviewSubmittedResponse = (
      <ReviewSubmittedTile handleContinue={handleContinue} />
    );
  } else {
    reviewButton = (
      <div>
        <button type="button" onClick={handleClick}>
          Add Review
        </button>
        <h3>Reviews:</h3>
        <div>{reviews}</div>
      </div>
    );
  }

  return (
    <div className="tile show">
      <div>
        <h2>{venue.name}</h2>
      </div>
      <div>
        <img src={venue.imgUrl} />
      </div>
      <div>
        <p>{venue.description}</p>
      </div>
      <h3>Address:</h3>
      <div>
        <span>{venue.address}, </span>
        <span>{venue.city}, </span>
        <span>{venue.state} </span>
        <span>{venue.zipCode}</span>
      </div>
      <h3>Phone Number:</h3>
      <div>
        <span>{venue.phoneNumber}</span>
      </div>
      <div>
        <h4>Capacity: {venue.capacity}</h4>
      </div>
      {reviewButton}
      {reviewSubmittedResponse}
      {reviewForm}
    </div>
  );
};
export default VenueShow;
