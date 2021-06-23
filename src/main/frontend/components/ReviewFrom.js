import React, { useState } from "react";
import { Redirect } from "react-router";
import _ from "lodash";

import VenueField from "./VenueField";
import ErrorList from "./ErrorList";

const VenueForm = (props) => {

  const[formPayload, setFormPayload] = useState({
    eventName: "",
    userName: "",
    text: "",
    rating: "",
    venueId: ""
    })

  const [errors, setErrors] = useState({})

  const addReview = async() => {
    try {
      const response = await fetch(`/api/v1/reviews/${venudId}`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(formPayload)
      })
      if (!response.ok) {
        if(response.status === 422) {
          const body = await response.json()
          return setErrors(body.errors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw(error)
        }
      }
      const body = await response.json()
      console.log("body", body)
      setReviewId(body.review.id)
    
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }
  
  const validForSubmission = () => {
    const errors = {}
    for(const field in formPayload) {
      if(formPayload[field].trim() === "") {
        errors[field] = "is blank"
      }
    }
    setErrors(errors)
    return _.isEmpty(errors)
  }

  const clearForm = () => {
    setFormPayload({
      eventName: "",
      userName: "",
      text: "",
      rating: "",
      venueId: "",
    })
    setErrors({})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(validForSubmission()) {
      addReview(formPayload)
      clearForm()
    }
  }

  const handleInputChange = event => {
    setFormPayload({
      ...formPayload,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  return (
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

export default ReviewForm