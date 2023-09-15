import React, { useEffect, useRef } from 'react'

export default function ShowPlayer({ id, episode, season }) {
  const iframeRef = useRef(null)

  useEffect(() => {
    const iframe = iframeRef.current

    if (iframe) {
      const handleMessage = (event) => {
        if (event.origin === 'https://multiembed.mov') {
          const iframeDocument = iframe.contentDocument
          const imgTags = iframeDocument.querySelectorAll('html body img')

          imgTags.forEach((img) => {
            img.remove()
          })
        }
      }

      window.addEventListener('message', handleMessage)

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('message', handleMessage)
      }
    }
  }, [])

  return (
    <div className='pt-[56.25%] w-full relative'>
      <iframe
        ref={iframeRef}
        className='absolute top-0 left-0 w-full h-full shadow-2xl shadow-zinc-600 overflow-hidden'
        // src={`https://multiembed.mov/directstream.php?video_id=${id}`}
        src={`https://multiembed.mov/directstream.php?video_id=${id}&s=${season}&e=${episode}`}
        allowFullScreen={true}
      ></iframe>
    </div>
  )
}
