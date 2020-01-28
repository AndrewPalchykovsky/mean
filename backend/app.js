const express = require('express');

const app = express();


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );

  res.setHeader(
    'Access-Conterol-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );

  next();
});

app.use('/api/posts', (req, res, next) => {
  const posts = [{
      id: 'adjhasjd21',
      title: "This title is from server",
      content: "Content from server"
    },
    {
      id: 'asdasf2323',
      title: "Second title is from server",
      content: "Second content from server",
    }
  ]
  res.status(200).json({
    message: 'Posts fetched succesfully',
    posts: posts
  });
});



module.exports = app;
