import React from "react"

const EditSubmittedTile = props => {

  return(
    <div>
      <h3>Your review edit has been submitted.</h3>
      <button type="button" onClick={props.handleContinue}>Continue</button>
    </div>
  )
}

export default EditSubmittedTile;