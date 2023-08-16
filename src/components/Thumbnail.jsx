import React, { useState } from 'react'

export default function Thumbnail(props) {
  const [starred, setStarred] = useState(props.starred)

  function handleStar(e) {
    e.preventDefault()
    setStarred(!starred)
  }

  return (
    <a
      href={`/movie/${props.no}`}
      className='w-fit block transition-all ease-in-out hover:opacity-80 relative'
    >
      {/* {starred === true ? (
        <StarSolid
          className='h6 w-6 absolute top-1 right-1 text-yellow-500'
          onClick={handleStar}
        />
      ) : (
        <StarOutline
          className='h6 w-6 absolute top-1 right-1'
          onClick={handleStar}
        />
      )} */}
      <img
        loading='lazy'
        src={props.movie.thumbnail}
        className='h-60 w-40 object-cover rounded-lg lg:h-80 lg:w-52'
        alt={props.movie.title}
      />
    </a>
  )
}
