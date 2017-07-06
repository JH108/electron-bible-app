import React from 'react';
import MenuButton from './MenuButton';

const Header = ({ toggleToc }) => {
  return (
  <div className="header">
    <MenuButton toggleToc={toggleToc}/>
    <h1 className="esv-bible">
    ESV Bible</h1>
  </div>
  );
};

export default Header;
