import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

// 음식점 댓글에 표시할 별점 설정 컴포넌트
export default function App({star}) {
  const [rating, setRating] = useState(star) // initial rating value

  return (
    <div className='App'>
      <Rating
        //onClick={handleRating}
        ratingValue={(rating*20)} //별점 데이터값
        size={30} //사이즈
        label
        showTooltip
        transition
        fillColor='orange' //색상
        emptyColor='gray' //배경
        className='foo' // Will remove the inline style if applied
        allowHalfIcon
        readonly='True' //값 고정
      />
      {/* Use rating value */}
      {/* {rating} */}
    </div>
  )
}