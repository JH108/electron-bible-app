import React, { Component } from 'react';
import Books from './reuseable-components/Books';
import Chapters from './reuseable-components/Chapters';

class TableOfContents extends Component {
  constructor(props) {
    super(props);
  }
  // Lines 10-26 are to enable the closing of the modal on a click outside its box
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside.bind(this));
  }

  componentWillUnmout() {
    document.removeEventListener('mousedown', this.handleClickOutside.bind(this));
  }

  setRef(node) {
    this.ref = node;
  }

  handleClickOutside(event) {
    if (this.ref && !this.ref.contains(event.target)) {
      this.props.toggleToc();
    }
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
      <div ref={this.setRef.bind(this)} className="table-of-contents">
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
