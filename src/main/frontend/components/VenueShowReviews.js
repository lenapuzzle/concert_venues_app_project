import React, { useEffect, useState } from "react";

const VenueShowReviews = (props) => {
  const { eventName, userName, text, rating } = props.review;

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
    </div>
  );
};

export default VenueShowReviews;
