// Buscar por título: /search/movie
// Buscar filmes populares: /movie/popular
// Buscar detalhes de um filme específico: /movie/{movie_id}

import 'dotenv/config';
import fetch from 'node-fetch';

export async function fetchPopularMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.apiKey}&language=pt-BR&page=1`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    throw new Error('Erro ao buscar filmes');
  }
}
