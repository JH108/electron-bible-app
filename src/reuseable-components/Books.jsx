import React from 'react';
import { map } from 'lodash';

const Books = ({ books, selectedBook, selectBook }) => (
  <div className="tb-books">
    <div className="tb-headers">
      <h1 className="tb-header-text">Books</h1>
    </div>
    <div className="tb-books-body">
      {map(books, (book, key) => (
        <h1 className="tb-books-body-text" key={key}>{ book }</h1>
      ))}
    </div>
  </div>
);

export default Books;
