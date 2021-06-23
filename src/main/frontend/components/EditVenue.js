import React, { useState } from "react";

import { Redirect } from "react-router";
import _ from "lodash";

import StateDropdown from "./StateDropdown";
import ErrorList from "./ErrorList";

const EditVenue = (props) => {
  const {
    id,
    name,
    address,
    city,
    state,
    zipCode,
    capacity,
    description,
    imgUrl,
    phoneNumber,
  } = props;
  const [formPayload, setFormPayload] = useState({
    name: name,
    address: address,
    city: city,
    state: state,
    zipCode: zipCode,
    capacity: capacity,
    description: description,
    imgUrl: imgUrl,
    phoneNumber: phoneNumber,
  });

  const [errors, setErrors] = useState({});
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [venueId, setVenueId] = useState(null);

  const addVenue = async () => {
    try {
      const response = await fetch(`/api/v1/admin/${id}`, {
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
      console.log("body", body);
      setVenueId(body.venue.id);
      setShouldRedirect(true);
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`);
    }
  };

  const validForSubmission = () => {
    const errors = {};
    for (const field in formPayload) {
      if (
        field !== "capacity" &&
        field !== "description" &&
        formPayload[field].trim() === ""
      ) {
        errors[field] = "is blank";
      }
      // }
      setErrors(errors);
      return _.isEmpty(errors);
    }

    const resetForm = () => {
      setFormPayload({
        name: name,
        address: address,
        city: city,
        state: state,
        zipCode: zipCode,
        capacity: capacity,
        description: description,
        imgUrl: imgUrl,
        phoneNumber: phoneNumber,
      });
      setErrors({});
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      if (validForSubmission()) {
        addVenue(formPayload);
        resetForm();
      }
    };

    const handleInputChange = (event) => {
      setFormPayload({
        ...formPayload,
        [event.currentTarget.name]: event.currentTarget.value,
      });
    };

    if (shouldRedirect) {
      return <Redirect push to={`/concert-venues/${venueId}`} />;
    }

    return (
      <form onSubmit={handleSubmit}>
        <ErrorList errors={{ ...errors, ...props.errors }} />
        <div>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            id="name"
            type="text"
            value={formPayload.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="address">Address:</label>
          <input
            name="address"
            id="address"
            type="text"
            value={formPayload.address}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="city">City:</label>
          <input
            name="city"
            id="city"
            type="text"
            value={formPayload.city}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <StateDropdown
            handleInputChange={handleInputChange}
            state={formPayload.state}
          />
        </div>

        <div>
          <label htmlFor="zipCode">Zip Code:</label>
          <input
            name="zipCode"
            id="zipCode"
            type="text"
            value={formPayload.zipCode}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            name="phoneNumber"
            id="phoneNumber"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={formPayload.phoneNumber}
            onChange={handleInputChange}
          />
          <small>Format: 123-456-7890</small>
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <input
            name="description"
            id="description"
            type="text"
            value={formPayload.description}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="capacity">Capacity:</label>
          <input
            name="capacity"
            id="capacity"
            type="number"
            min="0"
            value={formPayload.capacity}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="imgUrl">Img Url:</label>
          <input
            name="imgUrl"
            id="imgUrl"
            type="text"
            value={formPayload.imgUrl}
            onChange={handleInputChange}
          />
        </div>

        <input className="button" type="submit" value="Submit" />
      </form>
    );
  };
};
export default EditVenue;
