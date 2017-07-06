import React, { Component } from 'react';
import Footer from './reuseable-components/Footer';
import Header from './reuseable-components/Header';
import Chapter from './Chapter';

class ReadingView extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const {
      chapter,
      book,
      chapterText,
      toggleToc
    } = this.props;
    return (
      <div className="reading-view">
        <Header
          chapter={chapter}
          book={book}
          toggleToc={toggleToc}
        />
        <Chapter chapter={chapterText} />
        <Footer />
      </div>
    );
  }
}

export default ReadingView;