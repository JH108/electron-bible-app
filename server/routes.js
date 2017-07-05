import path from 'path';
import bible from './esvBibleJson.json';
import { getBook } from './formatJsonBible.js';

const Routes = (app) => {
  app.get('/bible', (req, res) => {
    res.send(getBook(bible.Joel));
  });
  app.get('/bible/:book/:chapter', (req, res) => {
    let book = req.params.book;
    let chapter = req.params.chapter;
    res.send(JSON.stringify(getBook(bible[book])[chapter]));
  });
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
  });
};

module.exports = Routes;
