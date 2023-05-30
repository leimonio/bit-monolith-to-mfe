import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DetailsMain } from '../components/DetailsMain/DetailsMain'
import { comingSoon } from '../db'

export const HomeDetails = () => {
  const { id } = useParams()
  const currentMovie = comingSoon.find((el) => el.id.toString() === id)

  return (
    <>
      <div className="playback">
        <video controls width="100%" height="100%" muted loop autoPlay>
          <source
            key={currentMovie.id}
            src={currentMovie.video}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <DetailsMain />
    </>
  )
}
