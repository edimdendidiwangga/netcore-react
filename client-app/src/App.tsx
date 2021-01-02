import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    values: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/values')
      .then((response) => {
        this.setState({ values: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.values.map((value: any, i: number) => (
              <li key={i}>{value.name}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default App;
