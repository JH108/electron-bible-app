import React from 'react';
import { map } from 'lodash';

const Chapters = ({ chapters, selectedChapter, selectChapter }) => (
  <div className="tb-chapters">
    <div className="tb-headers">
      <h1 className="tb-header-text">Chapters</h1>
    </div>
    <div className="tb-chapters-body">
      {map(chapters, (chapters, key) => (
        <h1 className="tb-chapters-body-text" key={key}>{ chapters }</h1>
      ))}
    </div>
  </div>
);

export default Chapters;
