import React from 'react'
import { Link } from 'react-router-dom'


export default function DogBreedImages (props) {
  const { images, breed } = props
  return (
    <div className="dog-breed-images">
      <div>
        <h1>{breed}</h1>
      </div>
      <Link to="/"><button>Back</button></Link>
      <div>
        { images && images.map(url => <img src={ url } alt="Dog" />) }
        { !images && 'Loading...' }
      </div>
    </div>
  )
}