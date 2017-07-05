import React, { Component } from 'react';
import Chapter from './Chapter';
import { forEach, map } from 'lodash';
import Homepage from './Homepage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null
    }
  }
  // componentDidMount() {
  //   fetch('/bible')
  //     .then(data => data.json())
  //     .then(json => {
  //       this.setState({
  //         book: json
  //       })
  //     });
  // }
  render() {
    return (
      <div className="app">
      <Homepage />
        {
          map(this.state.book, (chapter, key) => (
            <Chapter
              chapter={chapter}
              key={key}
            />
          ))
        }
      </div>
    );
  }
}

export default App;