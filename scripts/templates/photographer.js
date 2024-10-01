// photographer.js
export function photographerFactory(data) {
    const { id, name, city, tagline, price, portrait } = data;
    
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