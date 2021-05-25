const express = require('express')
const cors = require('cors');

const app = express()
const port = 3001

const posts = [
  {
    title: 'My second blog post',
    paragraphs: [
      'Hello there',
      'This is an example of a componentized blog post',
    ],
  },
  {
    title: 'My first blog post',
    paragraphs: [
      '<div style="background: pink">Hello there</div>',
      'This is another example.',
      'Wa-hoo!',
    ],
  },
  {
    title: 'The final blog post',
    paragraphs: [
      'C’est fin',
    ],
  },
];

app.use(cors());

app.get('/posts', (req, res) => {
  console.log("posts requested");
  res.json(posts)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
