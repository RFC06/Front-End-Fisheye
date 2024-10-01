// media.js
export function mediaFactory(data) {
    const { id, photographerId, title, image, likes, date, price } = data;

    // const toto = document.createElement('media');
    const media = document.createElement('media');

    // toto.innerHTML = `
    media.innerHTML = `
    <img src="assets/media/${photographerId}/${image}" alt="${title}" height="100px">
    <h2>${title}</h2>
        <p>${likes}</p>
        <p>${date}</p>
        <p>${price}€</p>
    `;

    // return toto;
    return media;
}