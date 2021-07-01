import React, { useState } from "react";
import { Redirect } from "react-router";
import _ from 'lodash'

import StateDropdown from "./StateDropdown";
import ErrorList from "./ErrorList"

const ConcertVenueForm = (props) => {

  const[formPayload, setFormPayload] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    capacity: "",
    description: "",
    imgUrl: "",
    phoneNumber: ""
  })

  const [errors, setErrors] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [venueId, setVenueId] = useState(null)

  const addVenue = async() => {
    try {
      const response = await fetch(`/api/v1/venues`, {
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
      setVenueId(body.venue.id)
      setShouldRedirect(true) 
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  const validForSubmission = () => {
    const errors = {}
    for(const field in formPayload) {
      if(field !== "capacity" && field !== "description" && 
          formPayload[field].trim() === "") {
        errors[field] = "is blank"
      }
    }
    setErrors(errors)
    return _.isEmpty(errors)
  }

  const clearForm = () => {
    setFormPayload({
      name: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      capacity: "",
      description: "",
      imgUrl: "",
      phoneNumber: ""
    })
    setErrors({})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(validForSubmission()) {
      addVenue(formPayload)
      clearForm()
    }
  }

  const handleInputChange = event => {
    setFormPayload({
      ...formPayload,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  if(shouldRedirect) {
    return <Redirect push to={`/concert-venues/${venueId}`} />
  }

  return(
    <div className="form tile">
      <h3>Add a Venue</h3>
      <form  onSubmit={handleSubmit}>
        <ErrorList errors={{...errors, ...props.errors}} />
        <div className="form-input">
          <label htmlFor="name">Name: </label>
          <input
            name= "name"
            id="name"
            type="text"
            value={formPayload.name}
            onChange={handleInputChange}
            className="input-box"
          />
        </div>

        <div className="form-input">
          <label htmlFor="address">Address: </label>
          <input
            name= "address"
            id="address"
            type="text"
            value={formPayload.address}
            onChange={handleInputChange}
            className="input-box"
          />
        </div>

        <div className="form-input">
          <label htmlFor="city">City: </label>
          <input
            name= "city"
            id="city"
            type="text"
            value={formPayload.city}
            onChange={handleInputChange}
            className="input-box"
          />
        </div>

        <div className="form-input">
          <label htmlFor= "state"> State: </label>
          <StateDropdown
            handleInputChange={handleInputChange}
            state={formPayload.state}
          />
        </div>

        <div className="form-input">
          <label htmlFor="zipCode">Zip Code: </label>
          <input
            name= "zipCode"
            id="zipCode"
            type="text"
            value={formPayload.zipCode}
            onChange={handleInputChange}
            className="input-box"
          />
        </div>

        <div className="form-input">
          <label htmlFor="phoneNumber">Phone Number: </label>
          <input
            name= "phoneNumber"
            id="phoneNumber"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="XXX-XXX-XXXX"
            value={formPayload.phoneNumber}
            onChange={handleInputChange}
            className="input-box"
          />
        </div>

        <div className="form-input">
          <label htmlFor="description">Description: </label>
          <textarea
            name= "description"
            id="description"
            type="text"
            value={formPayload.description}
            onChange={handleInputChange}
            className="input-box"
          ></textarea>
        </div>

        <div className="form-input">
          <label htmlFor="capacity">Capacity: </label>
          <input
            name= "capacity"
            id="capacity"
            type="number"
            min="0"
            value={formPayload.capacity}
            onChange={handleInputChange}
            className="input-box"
          />
        </div>

        <div className="form-input">
          <label htmlFor="imgUrl">Img Url: </label>
          <input
            name= "imgUrl"
            id="imgUrl"
            type="text"
            value={formPayload.imgUrl}
            onChange={handleInputChange}
            className="input-box"
          />
        </div>

        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default ConcertVenueForm