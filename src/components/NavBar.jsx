import React from 'react'

export default function NavBar(props) {
  const navs = [
    {
      route: '/',
      label: 'Home',
    },
    {
      route: '/leaderboard',
      label: 'Leaderboard',
    },
  ]

  const selected = (index, propsIndex) => {
    if (index === propsIndex) {
      return 'border-b border-red-500 font-semibold'
    } else {
      return 'border-b border-zinc-700 text-zinc-300'
    }
  }

  return (
    <div className='relative top-px flex flex-row gap-4'>
      {navs.map((nav) => (
        <a
          className={
            'py-3 transition-all ' + selected(navs.indexOf(nav), props.selected)
          }
          href={nav.route}
        >
          <span className='hover:bg-zinc-800 px-2 py-1 transition-all rounded'>
            {nav.label}
          </span>
        </a>
      ))}
    </div>
  )
}
