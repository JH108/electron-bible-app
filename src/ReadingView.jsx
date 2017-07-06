import React, { Component } from 'react';
import Footer from './reuseable-components/Footer';
import Header from './reuseable-components/Header';
import Chapter from './Chapter';

class ReadingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chapter: null,
      book: null,
      chapterText: null
    }
  }
  componentDidMount() {
    let url = this.props.location.search;
    fetch(`/bible/query${url}`)
      .then(body => body.json())
      .then(json => this.setState({
        chapter: json.chapter,
        book: json.book,
        chapterText: json.chapterText
      }));
  }
  render() {
    const {
      chapter,
      book,
      chapterText
    } = this.state;
    return (
      <div className="reading-view">
        <Header
          chapter={chapter}
          book={book}
        />
        <Chapter chapter={chapterText} />
        <Footer />
      </div>
    );
  }
}

export default ReadingView;