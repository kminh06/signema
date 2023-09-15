import React, { useState, useRef } from 'react'
import ShowPlayer from './ShowPlayer'

export default function Show({ id, seasonsCount, episodes }) {
  const [episode, setEpisode] = useState(1)
  const [season, setSeason] = useState(1)
  const seasons = []
  const ref = useRef(null)

  for (let i = 0; i < seasonsCount; i++) {
    seasons.push({
      number: i + 1,
      episodes: Array.from({ length: episodes[i] }, (_, index) => index + 1),
    })
  }

  function handleSelectEpisode(s, e) {
    setSeason(s)
    setEpisode(e)
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='flex flex-col'>
      <h1
        ref={ref}
        className='text-2xl sm:text-4xl font-extrabold mb-4 sm:mb-8'
      >
        S{season}:E{episode}
      </h1>
      <div>
        <ShowPlayer id={id} episode={episode} season={season} />
      </div>
      <div className='mt-4 sm:mt-8'>
        {/* <h1 className='text-xl sm:text-3xl font-extrabold mb-6'>
          Select episode:
        </h1> */}
        {seasons.map((s) => (
          <div key={s.number} className='my-4'>
            <h2 className='text-lg sm:text-xl font-medium sm:font-bold mb-1'>
              Season {s.number}
            </h2>
            <div
              id='section-container'
              className='flex flex-row gap-4 pb-2 overflow-x-auto'
            >
              {s.episodes.map((ep) => (
                <button
                  key={s.episodes.indexOf(ep) + 1}
                  className={
                    'border px-4 py-0.5 rounded w-max transition-all font-medium ' +
                    (season === s.number &&
                    episode === s.episodes.indexOf(ep) + 1
                      ? 'bg-red-700 border-red-700 text-black'
                      : 'border-zinc-700 hover:bg-zinc-100 hover:text-black')
                  }
                  onClick={(e) => {
                    e.preventDefault
                    handleSelectEpisode(s.number, s.episodes.indexOf(ep) + 1)
                  }}
                >
                  <span>{s.episodes.indexOf(ep) + 1}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
