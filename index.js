import express, { json } from 'express';
import cors from 'cors';
const app = express();

app.use(json()); // Middleware для парсинга JSON-данных
app.use(cors()); // Enable CORS for all routes

// Пример начального массива данных
// eslint-disable-next-line max-len
let data = {
  gameData: [
    'empty',
    'empty',
    'empty',
    'empty',
    'empty',
    'empty',
    'empty',
    'empty',
    'empty',
  ],
  isActiveGame: true,
  activeSing: null,
  isReset: false,
  isGameOver: false,
};

// const gameOver = () => {
//   return data.gameData.every((el) => el !== 'empty');
// };

// Роут для получения текущего состояния массива
app.get('/data', (req, res) => {
  res.json(data);
});

// Роут для обновления массива
app.post('/update', (req, res) => {
  const newData = req.body; // Получение новых данных из тела запроса
  data = newData; // Обновление массива данных
  console.log(data);
  res.json(newData);
});
app.listen(process.env.PORT || 3000)
