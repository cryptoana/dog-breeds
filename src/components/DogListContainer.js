import React from 'react';
import request from 'superagent';
import DogsList from './DogsList';

export default class DogListContainer extends React.Component {
  state = { 
    dogBreeds: null
  }

  // // fetch dog breeds and call updateBreeds on the response
  componentDidMount() {
    request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        const breeds = Object.keys(response.body.message)
        this.updateBreeds(breeds)
      })
      .catch(console.error)
  }

  // // storing breeds in local state, so we can update the state and display them on screen
  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    })
  }

  render() {
    return (
      <DogsList dogBreeds={this.state.dogBreeds}/>
    )
  }
}