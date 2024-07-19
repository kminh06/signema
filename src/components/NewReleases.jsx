import React from 'react'
import data from '../database.json'
import Thumbnail from './Thumbnail'

export default function NewReleases({ heading }) {
  return (
    <div className='pt-4 pb-6'>
      <a
        href={children && '/movies'}
        className={
          'text-2xl font-bold ml-4 sm:ml-10 ' +
          (children && 'hover:underline hover:cursor-pointer')
        }
      >
        {heading}
      </a>
      <div className='overflow-x-auto mx-4 sm:mx-8' id='section-container'>
        <div className='flex flex-row gap-4 sm:gap-6 flex-wrap justify-center mt-4 w-max overflow-x-auto pb-2'>
          {data.movies.map((movie) => {
            if (movie.new === true) {
              return (
                <Thumbnail
                  movie={movie}
                  key={data.movies.indexOf(movie)}
                  href={`/movie/${data.movies.indexOf(movie)}`}
                />
              )
            }
          })}
          {/* <div className='flex flex-col items-center justify-center'>
            {children}
          </div> */}
        </div>
      </div>
    </div>
  )
}
