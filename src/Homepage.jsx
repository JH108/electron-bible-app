import React, { Component } from 'react';
import MenuButton from './MenuButton';

class Homepage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <MenuButton />
        <h1 className="esv-bible">
        ESV Bible</h1>
      </div>
    );
  }
}

export default Homepage;