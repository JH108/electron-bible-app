import React from 'react';
import MenuButton from './MenuButton';

const Header = ({ toggleToc, chapter, book }) => {
  return (
  <div className="header">
    <MenuButton toggleToc={toggleToc}/>
    { chapter && book ?
      <h1 className="esv-bible">
        { `${book} ${chapter}` }</h1>
      : <h1 className="esv-bible">
        ESV Bible</h1>
      }
  </div>
  );
};

export default Header;
