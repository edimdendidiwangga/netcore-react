import React from 'react';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react';

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
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {
            this.state.values.map((value: any, i: number) => (
              <List.Item key={i}>{value.name}</List.Item>
            ))
          }
        </List>
      </div>
    )
  }
}

export default App;
