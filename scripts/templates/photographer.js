// Exemple de la fonction photographerFactory
export function photographerFactory(data) {
    const { name, portrait, city, tagline, price } = data;
    const article = document.createElement('article');

    article.innerHTML = `
        <img src="assets/photographers/${portrait}" alt="${name}" height="100px">
        <h2>${name}</h2>
        <p>${city}</p>
        <p>${tagline}</p>
        <p>${price}€/jour</p>
    `;

    return article;
}
