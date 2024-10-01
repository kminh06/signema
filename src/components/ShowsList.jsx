import React from 'react'
import data from '../database.json'
import Thumbnail from './Thumbnail'

export default function MoviesList({ heading, children }) {
  return (
    <div className='pt-4 mb-8'>
      <a
        href={children && '/shows'}
        className={'text-2xl font-bold ml-4 sm:ml-10 '}
      >
        {heading}
      </a>
      <div className='overflow-x-auto mx-4 sm:mx-8' id='section-container'>
        <div className='flex flex-row gap-4 sm:gap-6 flex-wrap justify-center mt-4 w-max overflow-x-auto pb-2'>
          {data.shows.map((show) => {
            if (show.new === false) {
              return (
                <Thumbnail
                  movie={show}
                  key={data.shows.indexOf(show)}
                  href={`/show/${data.shows.indexOf(show)}`}
                />
              )
            }
          })}
          <div className='flex flex-col items-center justify-center'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
