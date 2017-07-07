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
  }

  componentDidUpdate() {
    this.refs.textContent
    this.refs.textContent.scrollTop = 0;
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
      prevChapter,
      tocActive
    } = this.props;

    return (
      <div className="reading-view">
        <Header
          selectedChapter={selectedChapter}
          selectedBook={selectedBook}
          toggleToc={toggleToc}
          tocActive={tocActive}
        />
        <div ref="textContent" className="reading-view-content">
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