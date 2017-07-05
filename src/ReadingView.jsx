import React, { Component } from 'react';

class ReadingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null
    }
  }
  render() {
    return (
      <div className="reading-view">
        Reading View is active
      </div>
    );
  }
}

export default ReadingView;