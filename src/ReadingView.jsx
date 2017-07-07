import React, { Component } from 'react';
import Footer from './reuseable-components/Footer';
import Header from './reuseable-components/Header';

class ReadingView extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (!this.props.readingViewActive) {
      this.props.toggleReadingView();
    }
    window.scrollTo(0, 0);
  }
  render() {
    const {
      selectedChapter,
      selectedBook,
      chapterText,
      toggleToc,
      readingViewActive,
      toggleReadingView,
      nextChapter,
      prevChapter
    } = this.props;
    return (
      <div className="reading-view">
        <Header
          selectedChapter={selectedChapter}
          selectedBook={selectedBook}
          toggleToc={toggleToc}
        />
        <div className="reading-view-content">
          <p className="reading-view-text">{ chapterText }</p>
        </div>
        <Footer
          readingViewActive={readingViewActive}
          nextChapter={nextChapter}
          prevChapter={prevChapter}
        />
      </div>
    );
  }
}

export default ReadingView;