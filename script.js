const posts = [
  {
    id: 1,
    titulo: "Primeiro Post",
    conteudo: "Conteúdo do primeiro post do blog."
  },
  {
    id: 2,
    titulo: "Segundo Post",
    conteudo: "Conteúdo do segundo post."
  }
];

// Lista posts
if (document.getElementById("posts")) {
  const container = document.getElementById("posts");
  posts.forEach(post => {
    container.innerHTML += `
      <article>
        <h2>${post.titulo}</h2>
        <p>${post.conteudo.substring(0, 60)}...</p>
        <a href="post.html?id=${post.id}">Ler mais</a>
      </article>
    `;
  });
}

// Post individual
if (document.getElementById("post")) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const post = posts.find(p => p.id === id);

  document.getElementById("post").innerHTML = `
    <h1>${post.titulo}</h1>
    <p>${post.conteudo}</p>
  `;
}
