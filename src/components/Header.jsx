import React from 'react'

export default function Header({ user, movie, no }) {
  return (
    <div
      className={
        'h-20 flex flex-row justify-center items-center border-b border-zinc-700'
      }
    >
      <header className='flex flex-row w-full relative m-4 sm:m-8 select-none'>
        <span className='text-xl'>
          <a
            id='logo'
            className='font-bold bg-white text-black px-2 py-1 border-b-4 border-red-700'
            href='/'
          >
            SIGNEMA
          </a>
          {movie ? (
            <span className='text-zinc-500 sm:visible invisible'>
              <span className='mx-4'>/</span>
              <a className='text-white' href={`/movie/${no}`}>
                {movie}
              </a>
            </span>
          ) : (
            <></>
          )}
        </span>
      </header>
    </div>
  )
}
