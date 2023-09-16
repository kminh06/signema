import React from 'react'
import NavBar from './NavBar'

export default function Header({ movie, no, selected, navBar, year }) {
  return (
    <div
      className={
        'flex flex-row justify-center items-center border-b border-zinc-700 bg-zinc-950'
      }
    >
      <header className='flex flex-col w-full relative pt-4 sm:pt-8 mx-4 sm:mx-8 select-none justify-center h-fit'>
        <span className={'mb-4 ' + (!navBar && 'sm:mb-8')}>
          <a
            id='logo'
            className='font-bold bg-white text-black px-2 py-1 border-b-4 border-red-700 sm:text-lg'
            href='/'
          >
            SIGNEMA
          </a>
          {movie ? (
            <span className='text-zinc-500 text-base sm:text-lg'>
              <span className='mx-4'>/</span>
              <a className='text-zinc-100 font-medium' href={`/movie/${no}`}>
                <span>{movie}</span>
                <span className='hidden sm:inline'> ({year})</span>
              </a>
            </span>
          ) : (
            <></>
          )}
        </span>
        {navBar ? <NavBar selected={selected} /> : <></>}
      </header>
    </div>
  )
}
