import React, { Component } from 'react';
import Books from './reuseable-components/Books';
import Chapters from './reuseable-components/Chapters';

class TableOfContents extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      selectedChapter,
      selectedBook,
      selectBook,
      selectChapter
    } = this.props;
    return (
      <div className="table-of-contents">
        <Books
          selectedBook={selectedBook}
          selectBook={selectBook}
        />
        <span className="line"></span>
        <Chapters
          selectedChapter={selectedChapter}
          selectChapter={selectChapter}
        />
      </div>
    );
  }
}

export default TableOfContents;
