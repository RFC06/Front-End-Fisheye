// index.js
import { photographerFactory } from '../templates/photographer.js'; // Assurez-vous que le chemin est correct

async function getPhotographers() {
    try {
        const response = await fetch('../../data/photographers.json');
        const data = await response.json();
        console.log("Données récupérées :", data);
        return data.photographers;
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
    }
}

getPhotographers().then((photographers) => {
    const photographersSection = document.querySelector('.photographers-section');
    
    if (photographersSection) {
        photographers.forEach((photographer) => {
            const photographerElement = photographerFactory(photographer);
            photographersSection.appendChild(photographerElement);
        });
    } else {
        console.error('L\'élément .photographers-section n\'existe pas dans le DOM.');
    }
});





// Appelez getPhotographers et ajoutez les éléments au DOM
getPhotographers().then((photographers) => {
    const photographersSection = document.querySelector('.photographers-section');
    
    if (photographersSection) {
        photographers.forEach((photographer) => {
            const photographerElement = photographerFactory(photographer);
            photographersSection.appendChild(photographerElement);
        });
    } else {
        console.error('L\'élément .photographers-section n\'existe pas dans le DOM.');
    }
});
