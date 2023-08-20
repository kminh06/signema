import React, { useState } from 'react'

export default function Thumbnail(props) {
  const [starred, setStarred] = useState(props.starred)

  return (
    <a
      href={`/movie/${props.no}`}
      className='w-fit block transition-all ease-in-out hover:opacity-80 relative'
    >
      <img
        src={props.movie.thumbnail}
        className='h-60 w-40 object-cover rounded-lg lg:h-80 lg:w-52'
        alt={props.movie.title}
      />
    </a>
  )
}
