import React from "react"

const ReviewSubmittedTile = props => {

  return(
    <div>
      <h3>Your review has been submitted.</h3>
      <button type="button" onClick={props.handleContinue}>Continue</button>
    </div>
  )
}

export default ReviewSubmittedTile;