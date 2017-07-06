import React, { Component } from 'react';
import Chapter from './Chapter';
import Homepage from './Homepage';
import TableOfContents from './TableOfContents';
import { forEach, map } from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bible: null,
      tocActive: false,
      selectedBook: 'Genesis',
      selectedChapter: 1
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
    // fetch('/bible')
    //   .then(data => data.json())
    //   .then(json => {
    //     this.setState({
    //       bible: json
    //     })
    //   });
  }
  render() {
    return (
      <div className="app">
        {
          this.state.tocActive ?
          <TableOfContents
            selectedChapter={this.state.selectedChapter}
            selectedBook={this.state.selectedBook}
            selectBook={this.selectBook.bind(this)}
            selectChapter={this.selectChapter.bind(this)}
          />
          : null
        }
        <Homepage
          tocActive={this.state.tocActive}
          toggleToc={this.toggleToc.bind(this)}
          selectedChapter={this.state.selectedChapter}
          selectedBook={this.state.selectedBook}
          activateReadingView={this.activateReadingView.bind(this)}
        />
      </div>
    );
  }
}

export default App;