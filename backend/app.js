const express = require('express');

const app = express();

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
