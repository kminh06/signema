import React, { useState } from 'react'
import SearchResult from './SearchResult'

export default function SearchBar() {
  const [search, setSearch] = useState('')
  const [searching, setSearching] = useState(false)
  const [result, setResult] = useState()

  async function handleSearch(e) {
    e.preventDefault()
    setSearching(true)
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${
        import.meta.env.PUBLIC_OMDB_API_KEY
      }&t=${search}`
    )
    const movie = await response.json()
    setSearching(false)
    setResult(movie)
    console.log(movie)
  }

  return (
    <div className='flex flex-col items-center gap-4 mb-8 px-4'>
      <div className='bg-zinc-950 w-full sm:w-[600px] lg:w-[720px] px-4 mx-4 mt-8 flex flex-row items-center gap-4 relative shadow-md shadow-black'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
        <input
          className='w-full outline-none bg-transparent py-4 sm:pr-20'
          type='text'
          placeholder='Watch any movie or show'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch(e)
            }
          }}
        />
        <button
          onClick={handleSearch}
          className='hidden sm:block h-full w-20 bg-red-700 absolute right-0 hover:cursor-pointer hover:bg-red-600 transition-all font-semibold'
        >
          {searching ? <span>...</span> : <span>Search</span>}
        </button>
      </div>
      <SearchResult movie={result} />
    </div>
  )
}
