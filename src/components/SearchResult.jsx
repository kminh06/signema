import React from 'react'

export default function SearchResult({ movie }) {
  return (
    movie && (
      <div className='bg-zinc-950 w-full sm:w-[600px] lg:w-[720px] mx-4 flex flex-row items-center gap-4 relative rounded py-4'>
        {!movie.Error ? (
          <a
            href={`/watch/${movie.imdbID}`}
            className='px-4 flex flex-row items-center transition-all hover:bg-zinc-800 hover:cursor-pointer w-full py-2 gap-4'
          >
            <img className='h-20 w-14' src={movie.Poster}></img>
            <div className='flex flex-col gap-1'>
              <h1 className='font-semibold text-lg'>{movie.Title}</h1>
              <p className='font-medium text-sm text-zinc-400'>{movie.Year}</p>
              <p className='font-medium text-sm text-zinc-400'>
                {movie.Actors}
              </p>
            </div>
          </a>
        ) : (
          <div className='px-4 flex flex-row items-center w-full py-2 gap-4 text-zinc-400'>
            <p>No results found.</p>
          </div>
        )}
      </div>
    )
  )
}
