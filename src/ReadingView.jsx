import React, { Component } from 'react';
import Footer from './reuseable-components/Footer';
import Header from './reuseable-components/Header';

class ReadingView extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    if (!this.props.readingViewActive) {
      this.props.toggleReadingView();
    }
  }
  render() {
    const {
      chapter,
      book,
      chapterText,
      toggleToc,
      readingViewActive,
      toggleReadingView,
      nextChapter
    } = this.props;
    return (
      <div className="reading-view">
        <Header
          chapter={chapter}
          book={book}
          toggleToc={toggleToc}
        />
        <div className="reading-view-content">
          <p className="reading-view-text">{ chapterText }</p>
        </div>
        <Footer
          readingViewActive={readingViewActive}
          nextChapter={nextChapter}
        />
      </div>
    );
  }
}

export default ReadingView;