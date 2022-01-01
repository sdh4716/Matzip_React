import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function App(props) {
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    props.getRating(rating)
    // Some logic
  }

  return (
    <div className='App'>
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        size={40}
        label
        showTooltip
        transition
        fillColor='orange'
        emptyColor='gray'
        className='foo' // Will remove the inline style if applied
        allowHalfIcon
      />
      {/* Use rating value */}
      {/* {rating} */}
    </div>
  )
}