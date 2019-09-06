import React, { Component } from 'react';
import { Header, Icon, List } from 'semantic-ui-react';
import axios from 'axios';
import { IActivity } from '../models/activity';

interface IState {
  activities: IActivity[];
}

class App extends Component<{}, IState> {
  readonly state: IState = {
    activities: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/activities')
      .then((response: { data: any }) => {
        this.setState({
          activities: response.data,
        });
      });
  }
  render() {
    return (
      <div>
        {/* This is just a test to see if semantic is installed. */}
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content> Reactivities: </Header.Content>
        </Header>
        <List>
          {this.state.activities.map((activity: any) => (
            <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
