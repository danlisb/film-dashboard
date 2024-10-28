import express from 'express';
import fetch from 'node-fetch'; // Para usar no servidor
import 'dotenv/config';
import path from 'path';

const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(process.cwd(), 'public')));

// Função para buscar filmes populares
const fetchPopularMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.apiKey}&language=pt-BR&page=1`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    throw new Error("Erro ao buscar filmes");
  }
};

// Rota para a API de filmes
app.get('/api/movies', async (req, res) => {
  try {
    const data = await fetchPopularMovies();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar filmes' });
  }
});

// Rota para a página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
