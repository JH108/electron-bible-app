import React, { Component } from 'react';
import { map } from 'lodash';

class Chapter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      chapter
    } = this.props;
    return (
      <div>
        { chapter ?
          map(chapter["1"], (c) => <p>{ c }</p>)
          : null }
      </div>
    );
  }
}

export default Chapter;
