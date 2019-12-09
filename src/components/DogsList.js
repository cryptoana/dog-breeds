import React from 'react';
import { Link } from 'react-router-dom'

export default class DogsList extends React.Component {
  renderDogBreed(breed) {
    return <li key={breed}>
      <Link to ={ `/dog-breeds/${breed}`}>{breed}</Link></li>
  }

  render () {
    const { dogBreeds } = this.props
    return (
      <div className="breedList">
        <h1>Dogs Breeds</h1>
        {/* if state dogbreeds is null, display 'Loading' */}
        { !dogBreeds && 'Loading...'}
        {/* render the <ul> with dog breeds only when dogBreeds contains something (non-null) */}
        { dogBreeds && 
          <ul>
            {dogBreeds.map(this.renderDogBreed)}
          </ul>
        }
      </div>
    )
  }


}