import React, { Component } from 'react';
import Chapter from './Chapter';
import { forEach, map } from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null
    }
  }
  componentDidMount() {
    fetch('/bible')
      .then(data => data.json())
      .then(json => {
        console.log(json);
        this.setState({
          book: json
        })
      });
  }
  render() {
    return (
      <div>
        Hello I am working!
        <Chapter chapter={this.state.book} />
      </div>
    );
  }
}

export default App;