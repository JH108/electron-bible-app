import React, { Component } from 'react';
import Chapter from './Chapter';
import Homepage from './Homepage';
import TableOfContents from './TableOfContents';
import ReadingView from './ReadingView';
import { forEach, map } from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksOfBible: null,
      tocActive: false,
      selectedBook: 'Genesis',
      selectedChapter: 1,
      chapter: null,
      book: null,
      chapterText: null
    }
  }
  toggleToc() {
    let prevState = !this.state.tocActive;
    this.setState({
      tocActive: prevState
    });
  }
  selectBook(book) {
    this.setState({
      selectedBook: book
    });
  }
  selectChapter(chapter) {
    this.setState({
      selectedChapter: chapter
    });
  }
  activateReadingView({ selectedBook, selectedChapter }) {
    this.props.history.push(`/read?book=${selectedBook}&chapter=${selectedChapter}`);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    console.log(this.props.location);
    if (this.props.location.search) {
      let url = this.props.location.search;
      fetch(`/bible/query${url}`)
        .then(body => body.json())
        .then(json => this.setState({
          chapter: json.chapter,
          book: json.book,
          chapterText: json.chapterText
        }));
    }
    fetch('/booksOfBible')
      .then(body => body.json())
      .then(json => this.setState({
        booksOfBible: json
      }));
  }
  render() {
    const {
      selectedChapter,
      selectedBook,
      tocActive,
      chapter,
      book,
      chapterText
    } = this.state;
    return (
      <div className="app">
        {
          this.state.tocActive ?
          <TableOfContents
            selectedChapter={selectedChapter}
            selectedBook={selectedBook}
            selectBook={this.selectBook.bind(this)}
            selectChapter={this.selectChapter.bind(this)}
          />
          : null
        }
        {
          this.props.location.pathname === '/read' ?
          <ReadingView
            tocActive={tocActive}
            toggleToc={this.toggleToc.bind(this)}
            selectedChapter={selectedChapter}
            selectedBook={selectedBook}
            chapter={chapter}
            book={book}
            chapterText={chapterText}
            activateReadingView={this.activateReadingView.bind(this)}
          />
          : <Homepage
            tocActive={tocActive}
            toggleToc={this.toggleToc.bind(this)}
            selectedChapter={selectedChapter}
            selectedBook={selectedBook}
            activateReadingView={this.activateReadingView.bind(this)}
          />
        }
      </div>
    );
  }
}

export default App;