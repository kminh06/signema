import React from 'react'
import data from '../movies.json'
import Thumbnail from './Thumbnail'

export default function NewReleases() {
  return (
    <div className='pt-4 pb-6'>
      <h2 className='text-2xl font-semibold ml-4 sm:ml-8'>New Releases</h2>
      <div className='overflow-x-auto mx-4' id='section-container'>
        <div className='flex flex-row gap-4 sm:gap-6 flex-wrap justify-center mt-4 w-max overflow-x-auto pb-2'>
          {data.movies.map((movie) => {
            if (movie.new === 'TRUE') {
              return (
                <Thumbnail
                  movie={movie}
                  key={data.movies.indexOf(movie)}
                  no={data.movies.indexOf(movie)}
                  starred={false}
                />
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}
