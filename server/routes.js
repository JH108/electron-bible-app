import path from 'path';
import bible from './esvBibleJson.json';
import formattedBible from './formattedEsvBible.json';

const Routes = (app) => {
  app.get('/bible', (req, res) => {
    res.send(formattedBible);
  });
  app.get('/bible/query', (req, res) => {
    let book = req.query.book;
    let chapter = req.query.chapter;
    res.send(JSON.stringify({
      chapter,
      book,
      chapterText: formattedBible[book][chapter]
    }));
  });
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
  });
};

module.exports = Routes;
