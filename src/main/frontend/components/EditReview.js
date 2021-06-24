import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { useLocation } from "react-router-dom"
import _ from "lodash";

const EditReview = (props) => {
let location = useLocation();
const [formPayload, setFormPayload] = useState({
      eventName: "",
      userName: "",
      text: "",
      rating: "",
      venueId: "",
});

  const [errors, setErrors] = useState({});
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const id = props.match.params.id;

  const fetchReview = async () => {
    try {
      const response = await fetch(`/api/v1/venues/${formPayload.venueId}/reviews`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseBody = await response.json();
      setFormPayload(responseBody.review);
    } catch (error) {
      console.error(`There was an error in fetch: ${error}`);
    }
  };

  const editReview = async () => {
    try {
      const response = await fetch(`/api/v1/admin/venues${formPayload.venueId}/reviews`, {
        method: "PUT",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(formPayload),
      });
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json();
          return setErrors(body.errors);
        } else {
          const errorMessage = `${response.status} (${response.statusText})`;
          const error = new Error(errorMessage);
          throw error;
        }
      }
      const body = await response.json();
      setShouldRedirect(true);
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`);
    }
  };

  const validForSubmission = () => {
    const errors = {};
    for (const field in formPayload) {
      if (field !== "id" &&
          field !== "text" &&
          formPayload[field].trim() === "") {
        errors[field] = "is blank";
      }
    }
      setErrors(errors);
      return _.isEmpty(errors);
  }

  const resetForm = () => {
    setFormPayload({
      eventName: "",
      userName: "",
      text: "",
      rating: "",
      venueId: "",
    });
    setErrors({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validForSubmission()) {
      editReview(formPayload);
      resetForm();
    }
  };

  const handleInputChange = (event) => {
    setFormPayload({
      ...formPayload,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  useEffect(() => {
    fetchReview()
  }, [location.pathname])

  if (shouldRedirect) {
    return <Redirect push to={`/concert-venues/${id}`} />;
  }

  return(
    <form onSubmit={handleSubmit}>
    <ErrorList errors={{ ...errors, ...props.errors }} />
    <div>
      <label htmlFor="eventName"> EventName:</label>
      <input
        name="eventName"
        id="eventName"
        type="text"
        value={formPayload.eventName}
        onChange={handleInputChange}
      />
    </div>

    <div>
      <label htmlFor="userName">User Name:</label>
      <input
        name="userName"
        id="userName"
        type="text"
        value={formPayload.userName}
        onChange={handleInputChange}
      />
    </div>

    <div>
      <label htmlFor="text">Review:</label>
      <input
        name="text"
        id="text"
        type="text"
        value={formPayload.text}
        onChange={handleInputChange}
      />
    </div>

    <div>
      <label htmlFor="rating">Rating:</label>
      <input
        name="rating"
        id="rating"
        type="number"
        min="1"
        max="10"
        value={formPayload.rating}
        onChange={handleInputChange}
      />
    </div>

    <div>
      <VenueField
        handleInputChange={handleInputChange}
        venueId={formPayload.venueId}
      />
    </div>

    <input className="button" type="submit" value="Add A Review" />
  </form>    
  );
};

export default EditReview;