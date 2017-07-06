import React, { Component } from 'react';
import Footer from './reuseable-components/Footer';
import Header from './reuseable-components/Header';
import sky from 'public/images/fullsizeoutput_155.png';

class Homepage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      toggleToc,
      selectedChapter,
      selectedBook,
      activateReadingView
    } = this.props;
    return (
      <div className="homepage">
        <Header toggleToc={toggleToc} />
        <div className="orange-overlay">
          <h1 className="the-heavens-declare">
            The heavens declare the glory of God, and the sky above proclaims his handiwork.
          </h1>
          <img src={'images/fullsizeoutput_155.png'}/>
        </div>
        <Footer
          selectedChapter={selectedChapter}
          selectedBook={selectedBook}
          activateReadingView={activateReadingView}
        />
      </div>
    );
  }
}

export default Homepage;