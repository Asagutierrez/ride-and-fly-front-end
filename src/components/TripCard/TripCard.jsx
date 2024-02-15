// npm modules
import { Link } from 'react-router-dom'

// css 
import './TripCard.css'

const TripCard = ( {trip} ) => {


  return (
    <div className='outer-postcard-container'>
        {/* <Link to={`/trips/${trip._id}`}> */}
      <div className='postcard-container'>
      <ul>
        {/* <li>User name: {trip.carPal.name}</li> */}
        <li>Date/Time: {trip.post.date}</li>
        <li>Airport: {trip.post.airport}</li>
        <li>Terminal: {trip.post.terminal}</li>
        <li>Dropoff: {trip.post.dropOff} </li>
        <li>Party size: {trip.post.partySize}</li>
        <li>Luxury Car: {trip.post.luxuryCar ? 'Yes' : 'No'}</li>
        <li>Oversized Luggage: {trip.post.oversizedLuggage ? 'Yes' : 'No'}</li>
        <li>Traveling with a Pet: {trip.post.travelingWithPet ? 'Yes' : 'No'}</li>
        <li>Car Type: {trip.post.carType}</li>
      </ul>
      </div>
      {/* </Link> */}
    </div>
  )
}

export default TripCard