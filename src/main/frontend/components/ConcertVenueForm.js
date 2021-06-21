import React, { useEffect } from "react";
import _ from 'lodash'


const ConcertVenueForm = (props) => {

return(
<form>

<div>
<label htmlFor="name">Name:</label>
<input
name= "name"
id="name"
type="text"
/>
</div>

<div>
<label htmlFor="address">Address:</label>
<input
name= "address"
id="address"
type="text"
/>
</div>

<div>
<label htmlFor="city">City:</label>
<input
name= "city"
id="city"
type="text"
/>
</div>

<div>
<label htmlFor="state">State:</label>
<input
name="state"
id="state"
type="text"
/>
</div>

<div>
<label htmlFor="zipCode">Zip Code:</label>
<input
name= "zipCode"
id="zipCode"
type="text"
/>
</div>

<div>
<label htmlFor="phoneNumber">Phone Number:</label>
<input
name= "phoneNumber"
id="phoneNumber"
type="text"
/>
</div>

<div>
<label htmlFor="description">Description:</label>
<input
name= "description"
id="description"
type="text"
/>
</div>

<div>
<label htmlFor="capacity">Capacity:</label>
<input
name= "capacity"
id="capacity"
type="number"
/>
</div>

<div>
<label htmlFor="imgUrl">Img Url:</label>
<input
name= "imgUrl"
id="imgUrl"
type="text"
/>
</div>

</form>


)

}

export default ConcertVenueForm