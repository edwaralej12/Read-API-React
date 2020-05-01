import React, { Component } from 'react';
import Loading from './components/Loading';
import './styles/App.css';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: null,
      data: {}

    }
  }

  _fetchData() {
    Axios.get('https://swapi.dev/api/vehicles/')
      .then(res => {
        const vehicleData = res.data.results;
        console.log(vehicleData);
        this.setState(
          {
            loading: false,
            data: vehicleData,
          });
      })
      .catch((error) => {
        this.setState(
          {
            loading: false,
            error : isNaN
            
          }
        )
      });
  }

  componentDidMount() {
    this._fetchData();

  }


  render() {

    if (this.state.loading) {
      return (
        <div className='App'>
          <Loading />
        </div>
      );
    }

    if (this.state.error !== null) {
      return <h1>Error</h1>
    }

    return (
      <div className="App">
        <h1>Ciclo de vida </h1>
        <h2>nombre del personaje del estado</h2>
        <ul>
          {this.state.data.map((character) => (
            <li>{character.name}</li>
          ))}

        </ul>
      </div>
    )
  }
}



export default App;
