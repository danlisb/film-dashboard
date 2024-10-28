// public/index.js
document.addEventListener("DOMContentLoaded", () => {
  // Busca os dados da API no servidor e insere os filmes no DOM
  fetch("/api/movies")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao buscar filmes");
      }
      return response.json();
    })
    .then((data) => {
      const filmesContainer = document.getElementById("filmes-container");
      data.results.forEach((filme) => {
        const filmeElement = document.createElement("div");
        filmeElement.classList.add("filme-card");

        filmeElement.innerHTML = `
          <h2>${filme.title}</h2>
          <p>${filme.overview}</p>
          <p>Avaliação: ${filme.vote_average.toFixed(1)}</p>
          <img src="https://image.tmdb.org/t/p/w500${
            filme.poster_path
          }" alt="${filme.title}">
        `;

        filmesContainer.appendChild(filmeElement);
      });
    })
    .catch((error) => console.error("Erro ao buscar filmes:", error));
});
