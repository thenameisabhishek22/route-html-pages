const express = require('express');
const path = require('path');

const app = express();
const port = 3001; 

const routes = [
  { url: '/', file: 'index.html' },
  { url: '/about-us', file: 'about.html' },
  { url: '/contact', file: 'contact.html' }
];

app.use(express.static(path.join(__dirname, 'public')));

routes.forEach(route => {
  app.get(route.url, (req, res) => {
    res.sendFile(path.join(__dirname, route.file));
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
