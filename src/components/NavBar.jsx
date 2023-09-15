import React from 'react'

export default function NavBar(props) {
  const navs = [
    {
      route: '/',
      label: 'Movies',
    },
    {
      route: '/shows',
      label: 'Shows',
    },
  ]

  const selected = (index, propsIndex) => {
    if (index === propsIndex) {
      return 'border-b-2 border-red-500 font-semibold'
    } else {
      return 'border-b border-zinc-700 text-zinc-400'
    }
  }

  return (
    <div className='relative top-px flex flex-row gap-4 text-sm'>
      {navs.map((nav) => (
        <a
          className={
            'py-3 transition-all ' + selected(navs.indexOf(nav), props.selected)
          }
          href={nav.route}
          key={nav.route}
        >
          <span className='hover:bg-zinc-700 px-3 py-1.5 transition-all rounded'>
            {nav.label}
          </span>
        </a>
      ))}
    </div>
  )
}
