import React from 'react'
import data from '../database.json'
import Thumbnail from './Thumbnail'

export default function MoviesList() {
  return (
    <div className='pt-4'>
      <h2 className='text-2xl font-semibold ml-4 sm:ml-8'>Our Collection</h2>
      <div className='overflow-x-auto mx-4' id='section-container'>
        <div className='flex flex-row gap-4 sm:gap-6 flex-wrap justify-center mt-4 w-max overflow-x-auto pb-2'>
          {data.shows.map((show) => {
            if (show.new === 'FALSE') {
              return (
                <Thumbnail
                  movie={show}
                  key={data.shows.indexOf(show)}
                  href={`/show/${data.shows.indexOf(show)}`}
                />
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}
