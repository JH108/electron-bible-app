import React, { Component } from 'react';
import Homepage from './Homepage';
import TableOfContents from './TableOfContents';
import ReadingView from './ReadingView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksOfBible: null,
      chapters: null,
      tocActive: false,
      selectedBook: 'Genesis',
      selectedChapter: 1,
      chapterText: null,
      readingViewActive: false
    }
  }

  toggleToc() {
    let prevState = !this.state.tocActive;

    this.setState({
      tocActive: prevState
    });
  }

  toggleReadingView() {
    this.setState({
      readingViewActive: !this.state.readingViewActive
    });
  }

  prevChapter() {
    window.scrollTo(0, 0);

    let currentChapter = this.state.selectedChapter;
    let currentBook = this.state.selectedBook;
    let chapters = this.state.chapters;
    let books = this.state.booksOfBible;

    // needed to make previous chapter different than next chapter because if you go back a book your chapter number will be the last chapter of the new book which I do not track. So I need to do an api call to get the chapters of the new book and must ensure that the api call for the new chapter doesn't happen until the first api call has returned the chapters.
    if (parseInt(currentChapter) - 1 === 0) {
      currentBook = books[books.indexOf(currentBook) - 1] || 'Revelation';
      fetch(`/chapters/${currentBook}`)
        .then(body => body.json())
        .then(json => this.setState({
          chapters: json
        }))
        .then(() => {
          currentChapter = this.state.chapters.length.toString();
          let url = `?book=${currentBook}&chapter=${currentChapter}`

          fetch(`/bible/query${url}`)
            .then(body => body.json())
            .then(json => this.setState({
              selectedChapter: json.chapter,
              selectedBook: json.book,
              chapterText: json.chapterText
            }))
            .then(() => this.activateReadingView({
              selectedBook: this.state.selectedBook,
              selectedChapter: this.state.selectedChapter
            }));
        });
    } else {
      currentChapter = parseInt(currentChapter) - 1;
      currentChapter.toString();
      let url = `?book=${currentBook}&chapter=${currentChapter}`

      fetch(`/bible/query${url}`)
        .then(body => body.json())
        .then(json => this.setState({
          selectedChapter: json.chapter,
          selectedBook: json.book,
          chapterText: json.chapterText
        }))
        .then(() => this.activateReadingView({
          selectedBook: this.state.selectedBook,
          selectedChapter: this.state.selectedChapter
        }));
    }
  }

  nextChapter() {
    window.scrollTo(0, 0);

    let currentChapter = this.state.selectedChapter;
    let currentBook = this.state.selectedBook;
    let chapters = this.state.chapters;
    let books = this.state.booksOfBible;

    if (parseInt(currentChapter) + 1 > parseInt(chapters[chapters.length - 1])) {
      currentChapter = '1';
      currentBook = books[books.indexOf(currentBook) + 1] || 'Genesis';
    } else {
      currentChapter = parseInt(currentChapter) + 1;
      currentChapter.toString();
    }

    let url = `?book=${currentBook}&chapter=${currentChapter}`

    fetch(`/bible/query${url}`)
      .then(body => body.json())
      .then(json => this.setState({
        selectedChapter: json.chapter,
        selectedBook: json.book,
        chapterText: json.chapterText
      }))
      .then(() => this.activateReadingView({
        selectedBook: this.state.selectedBook,
        selectedChapter: this.state.selectedChapter
      }));
  }

  selectBook(book) {
    fetch(`/chapters/${book}`)
      .then(body => body.json())
      .then(json => this.setState({
        chapters: json,
        selectedBook: book
      }));
  }

  selectChapter(chapter) {
    let url = `?book=${this.state.selectedBook}&chapter=${chapter}`

    fetch(`/bible/query${url}`)
      .then(body => body.json())
      .then(json => this.setState({
        selectedBook: json.book,
        selectedChapter: json.chapter,
        chapterText: json.chapterText,
        tocActive: !this.state.tocActive
      }))
      .then(() => this.activateReadingView({
        selectedBook: this.state.selectedBook,
        selectedChapter: this.state.selectedChapter
      }));
  }

  activateReadingView({
    selectedBook,
    selectedChapter
  }) {
    this.props.history.push(`/read?book=${selectedBook}&chapter=${selectedChapter}`);
  }

  componentDidMount() {

    if (this.props.location.search) {
      let url = this.props.location.search;
      fetch(`/bible/query${url}`)
        .then(body => body.json())
        .then(json => this.setState({
          selectedChapter: json.chapter,
          selectedBook: json.book,
          chapterText: json.chapterText
        }));
    }
    fetch('/booksOfBible')
      .then(body => body.json())
      .then(json => this.setState({
        booksOfBible: json
      }));
    fetch(`/chapters/${this.state.selectedBook}`)
      .then(body => body.json())
      .then(json => this.setState({
        chapters: json
      }));
    window.scrollTo(0, 0);
  }

  render() {
    const {
      selectedChapter,
      selectedBook,
      tocActive,
      chapterText,
      booksOfBible,
      chapters,
      readingViewActive
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
            chapters={chapters}
            booksOfBible={booksOfBible}
          />
          : null
        }
        {
          this.props.location.pathname === '/read' ?
          <ReadingView
            tocActive={tocActive}
            toggleToc={this.toggleToc.bind(this)}
            readingViewActive={readingViewActive}
            toggleReadingView={this.toggleReadingView.bind(this)}
            selectedChapter={selectedChapter}
            selectedBook={selectedBook}
            chapterText={chapterText}
            activateReadingView={this.activateReadingView.bind(this)}
            nextChapter={this.nextChapter.bind(this)}
            prevChapter={this.prevChapter.bind(this)}
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