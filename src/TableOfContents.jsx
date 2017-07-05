import React, { Component } from 'react';
import Books from './reuseable-components/Books';
import Chapters from './reuseable-components/Chapters';

class TableOfContents extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Books />
        <Chapters />
      </div>
    );
  }
}

export default TableOfContents;
