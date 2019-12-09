import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import DogListContainer from './components/DogListContainer'
import DogBreedImagesContainer from './components/DogBreedImagesContainer';

function App() {
  return (
    <div className="App">
      <main>
        <Route exact path='/' component={DogListContainer} />
        <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
      </main>
    </div>
  );
}

export default App;
