import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <div
      className={
        'h-20 sm:h-28 border-t border-zinc-700 flex flex-row justify-center items-center'
      }
    >
      <span className='text-zinc-300'>
        &copy; {currentYear} Code Works Company
      </span>
    </div>
  )
}
