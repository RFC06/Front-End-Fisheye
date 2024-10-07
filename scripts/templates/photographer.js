// Exemple de la fonction photographerFactory
export function photographerFactory(data) {
    const { id, name, portrait, city, tagline, price } = data;

    const link = document.createElement('a');
    link.setAttribute('href', `/photographer.html?id=${id}`)

    const article = document.createElement('article');


    //création du lien en html : <a href="/photographer.html">AAAA</a>

   

    article.innerHTML = `
        <img src="assets/photographers/${portrait}" alt="${name}" height="100px">
        <h2>${name}</h2>
        <p>${city}</p>
        <p>${tagline}</p>
        <p>${price}€/jour</p>
    `;

    link.appendChild(article);

    return link;
}







function photographerTemplate(data) {
  const { name, portrait } = data;
  // Utilise les backticks pour interpréter la variable 'portrait' dans l'URL de l'image
  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
      const article = document.createElement('article');

      // Crée un élément img et définis les attributs
      const img = document.createElement('img');
      img.setAttribute("src", picture);
      img.setAttribute("alt", name); // Ajoute un attribut alt pour l'accessibilité

      // Crée un élément h2 et définis son texte
      const h2 = document.createElement('h2');
      h2.textContent = name;

      // Ajoute l'image et le titre (h2) à l'article
      article.appendChild(img);
      article.appendChild(h2);

      return article;
  }

  // Retourne l'objet ou la fonction souhaitée
  return { getUserCardDOM };
}
