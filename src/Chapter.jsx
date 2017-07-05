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
      <div className="reading-view-content">
        <p className="reading-view-text">{ chapter }</p>
      </div>
    );
  }
}

export default Chapter;
