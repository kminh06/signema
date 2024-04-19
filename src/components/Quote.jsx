import React from 'react'

export default function Quote({ quote }) {
  return (
    <div className='w-fit px-10 pt-4 pb-2 sm:px-8 mx-auto sm:pt-8 sm:pb-4 max-w-[800px]'>
      <quote className='mx-auto text-center text-lg md:text-xl'>
        &quot;{quote.quote}&quot;
        {/* &quot;#Up #your #grindset&quot; */}
      </quote>
      <div className='text-right text-zinc-400'>- {quote.author}</div>
    </div>
  )
}
