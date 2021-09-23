const express = require('express');

const app = express();

app.get('/posts', (req, res) => {
  res.json({ posts: 'my posts' });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
