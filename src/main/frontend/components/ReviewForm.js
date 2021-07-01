import React, { useState } from "react";
import _ from "lodash";

import ErrorList from "./ErrorList";

const ReviewForm = (props) => {
  const[formPayload, setFormPayload] = useState({
    eventName: "",
    userName: "",
    text: "",
    rating: "",
    venueId: props.id
    })

  const [errors, setErrors] = useState({})

  const addReview = async() => {
    try {
      const response = await fetch(`/api/v1/venues/${props.id}/reviews`, {
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
      props.reviewSubmitted();
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
      venueId: props.id
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
    <div className="review-form tile">
      <form onSubmit={handleSubmit}>
        <ErrorList errors={{ ...errors, ...props.errors }} />
        <div className="form-input">
          <label htmlFor="eventName"> EventName:</label>
          <input
            name="eventName"
            id="eventName"
            type="text"
            value={formPayload.eventName}
            onChange={handleInputChange}
            className="input-box"
          />
        </div>

        <div className="form-input">
          <label htmlFor="userName">User Name:</label>
          <input
            name="userName"
            id="userName"
            type="text"
            value={formPayload.userName}
            onChange={handleInputChange}
            className="input-box"
          />
        </div>

        <div className="form-input">
          <label htmlFor="text">Review:</label>
          <input
            name="text"
            id="text"
            type="text"
            value={formPayload.text}
            onChange={handleInputChange}
            className="input-box"
          />
        </div>

        <div className="form-input">
          <label htmlFor="rating">Rating:</label>
          <input
            name="rating"
            id="rating"
            type="number"
            min="1"
            max="10"
            value={formPayload.rating}
            onChange={handleInputChange}
            className="input-box"
          />
        </div>

        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ReviewForm