const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send({message: "Hello, Express!"});
});

app.get('/api/customers', (req, res) => {
    res.send([
        {
            id: 1,
            image: 'https://picsum.photos/200/150?1',
            name: '홍길동',
            birthday: '961222',
            gender: '남자',
            job: '대학생',
          },
          {
            id: 2,
            image: 'https://picsum.photos/200/150?2',
            name: '이순신',
            birthday: '930211',
            gender: '남자',
            job: '디자이너',
          },
          {
            id: 3,
            image: 'https://picsum.photos/200/150?3',
            name: '트와이스',
            birthday: '970303',
            gender: '걸그룹',
            job: '가수',
          }
    ]);
});

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});