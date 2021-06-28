import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { useLocation } from "react-router-dom";
import _ from "lodash";

import StateDropdown from "./StateDropdown";
import ErrorList from "./ErrorList";

const EditVenue = (props) => {
  let location = useLocation();
  const [formPayload, setFormPayload] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    capacity: "",
    description: "",
    imgUrl: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const id = props.match.params.id;

  const fetchVenue = async () => {
    try {
      const response = await fetch(`/api/v1/venues/${id}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseBody = await response.json();
      setFormPayload(responseBody.venue);
    } catch (error) {
      console.error(`There was an error in fetch: ${error}`);
    }
  };

  const editVenue = async () => {
    try {
      const response = await fetch(`/api/v1/admin/venues/${id}`, {
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
      if (
        field !== "capacity" &&
        field !== "description" &&
        field !== "id" &&
        field !== "reviews" &&
        field !== "approved" &&
        formPayload[field].trim() === ""
      ) {
        errors[field] = "is blank";
      }
    }
    setErrors(errors);
    return _.isEmpty(errors);
  };

  const resetForm = () => {
    setFormPayload({
      name: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      capacity: "",
      description: "",
      imgUrl: "",
      phoneNumber: "",
    });
    setErrors({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validForSubmission()) {
      editVenue(formPayload);
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
    fetchVenue();
  }, [location.pathname]);

  if (shouldRedirect) {
    return <Redirect push to={`/concert-venues/${id}`} />;
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

export default EditVenue;
