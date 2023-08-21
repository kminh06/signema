export default function Thumbnail(props) {
  return (
    <a
      href={`/movie/${props.no}`}
      className='w-fit block transition-all ease-in-out hover:opacity-80 relative'
    >
      <img
        loading='lazy'
        src={props.movie.thumbnail}
        className='h-60 w-40 object-cover rounded-lg lg:h-80 lg:w-52'
        alt={props.movie.title}
      />
    </a>
  )
}
