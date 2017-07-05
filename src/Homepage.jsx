import React, { Component } from 'react';
import MenuButton from './reuseable-components/MenuButton';
import sky from 'public/images/fullsizeoutput_155.png';

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
        <div className="orange-overlay">
          <h1 className="the-heavens-declare">
            The heavens declare the glory of God, and the sky above proclaims his handiwork.
          </h1>
          <img src={'images/fullsizeoutput_155.png'}/>
        </div>
        <div className="footer">
          <h1 className="start-reading-now">START READING NOW</h1>
        </div>
      </div>
    );
  }
}

export default Homepage;