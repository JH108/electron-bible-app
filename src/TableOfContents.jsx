import React, { Component } from 'react';
import Books from './reuseable-components/Books';
import Chapters from './reuseable-components/Chapters';

const booksOfBibleInOrder = ['Genesis','Exodus','Leviticus','Numbers','Deuteronomy','Joshua','Judges','Ruth','1 Samuel','2 Samuel','1 Kings','2 Kings','1 Chronicles','2 Chronicles','Ezra','Nehemiah','Esther','Job','Psalms','Proverbs','Ecclesiastes','Song of Solomon','Isaiah','Jeremiah','Lamentations','Ezekiel','Daniel','Hosea','Joel','Amos','Obadiah','Jonah','Micah','Nahum','Habakkuk','Zephaniah','Haggai','Zechariah','Malachi','Matthew','Mark','Luke','John','Acts','Romans','1 Corinthians','2 Corinthians','Galatians','Ephesians','Philippians','Colossians','1 Thessalonians','2 Thessalonians','1 Timothy','2 Timothy','Titus','Philemon','Hebrews','James','1 Peter','2 Peter','1 John','2 John','3 John','Jude','Revelation'];

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
          books={booksOfBibleInOrder}
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
