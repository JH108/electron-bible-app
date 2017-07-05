import path from 'path';
import bible from './esvBibleJson.json';
import { getBook } from './formatJsonBible.js';

const Routes = (app) => {
  app.get('/bible', (req, res) => {
    res.send(getBook(bible.Joel));
  });
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
  });
};

module.exports = Routes;
