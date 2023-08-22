import React from 'react'
import NavBar from './NavBar'

export default function Header({ user, movie, no, selected, navBar }) {
  return (
    <div
      className={
        'flex flex-row justify-center items-center border-b border-zinc-700'
      }
    >
      <header className='flex flex-col w-full relative pt-4 sm:pt-8 mx-4 sm:mx-8 select-none justify-center h-fit'>
        <span className='text-xl mb-4 sm:mb-8'>
          <a
            id='logo'
            className='font-bold bg-white text-black px-2 py-1 border-b-4 border-red-700'
            href='/'
          >
            SIGNEMA
          </a>
          {movie ? (
            <span className='text-zinc-500 text-sm sm:text-lg'>
              <span className='mx-4'>/</span>
              <a className='text-white' href={`/movie/${no}`}>
                {movie}
              </a>
            </span>
          ) : (
            <></>
          )}
        </span>
        {/* {navBar ? <NavBar selected={selected} /> : <></>} */}
      </header>
    </div>
  )
}
