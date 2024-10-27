import express from 'express';
import { fetchPopularMovies } from './index.js';
import 'dotenv/config'

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/movies', async (req, res) => {
  try {
    const data = await fetchPopularMovies();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar filmes' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
