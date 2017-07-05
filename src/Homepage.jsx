import React, { Component } from 'react';
import MenuButton from './MenuButton';

class Homepage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="homepage">
        <div className="header">
          <MenuButton />
          <h1 className="esv-bible">
          ESV Bible</h1>
        </div>
        <div className="footer">
          <h1 className="start-reading-now">START READING NOW</h1>
        </div>
      </div>
    );
  }
}

export default Homepage;