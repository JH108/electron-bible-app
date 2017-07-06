import React, { Component } from 'react';
import Books from './reuseable-components/Books';
import Chapters from './reuseable-components/Chapters';

const chapters = (() => {
  let nums = [];
  for (var i = 50; i > 0; i--) {
    nums.push(i.toString())
  }
  return nums;
})()

class TableOfContents extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const {
      selectedChapter,
      selectedBook,
      selectBook,
      selectChapter,
      booksOfBible,
      chapters
    } = this.props;

    return (
      <div className="table-of-contents">
        <Books
          selectedBook={selectedBook}
          selectBook={selectBook}
          books={booksOfBible}
        />
        <span className="line"></span>
        <Chapters
          selectedChapter={selectedChapter}
          selectChapter={selectChapter}
          chapters={chapters}
        />
      </div>
    );
  }
}

export default TableOfContents;
