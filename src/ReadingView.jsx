import React, { Component } from 'react';
import Footer from './reuseable-components/Footer';
import Header from './reuseable-components/Header';
import Chapter from './Chapter';

class ReadingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chapter: null
    };
  }
  componentDidMount() {
    fetch('/bible')
      .then(body => body.json())
      .then(json => this.setState({
        chapter: json['1']
      }));
  }
  render() {
    const {
      chapter
    } = this.state;
    return (
      <div className="reading-view">
        <Header />
        <Chapter chapter={chapter} />
        <Footer />
      </div>
    );
  }
}

export default ReadingView;