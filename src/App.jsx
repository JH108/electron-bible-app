import React, { Component } from 'react';
import Chapter from './Chapter';
import Homepage from './Homepage';
import TableOfContents from './TableOfContents';
import { forEach, map } from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
      tocActive: false,
      selectedBook: 'Genesis',
      selectedChapter: null
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
  // componentDidMount() {
  //   fetch('/bible')
  //     .then(data => data.json())
  //     .then(json => {
  //       this.setState({
  //         book: json
  //       })
  //     });
  // }
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
        />
      </div>
    );
  }
}

export default App;