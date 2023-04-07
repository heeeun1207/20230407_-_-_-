const express = require('express');
const moment = require('moment');
const ejs = require('ejs');
const path = require('path');

const app = express();
const port = 3050;

// 뷰 엔진 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 라우팅
app.get('/', (req, res) => {
  const now = moment();
  const data = {
    year: now.format('YYYY'),
    month: now.format('M'),
    date: now.format('D'),
    hour: now.format('h'),
    minute: now.format('mm'),
    second: now.format('ss'),
    weekday: now.format('dddd')
  };
  res.render('index', { data });
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
