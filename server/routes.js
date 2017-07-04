import path from 'path';
import bible from './esvBibleJson.json';

const Routes = (app) => {
  app.get('/bible', (req, res) => {
    res.send(bible.Joel);
  });
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
  });
};

module.exports = Routes;
