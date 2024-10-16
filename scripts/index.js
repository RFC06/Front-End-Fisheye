// index.js
import { createPhotographer } from './templates/factories/photographerFactory.js';
import { photographerFactory } from './templates/photographer.js';
import { mediaFactory } from './templates/media.js';


// PARTIE DES PHOTOGRAPHES : START //

async function getPhotographers() {
    try {
        const response = await fetch('../../data/photographers.json');
        const data = await response.json();
        console.log("Données récupérées :", data);
        return data.photographers;
    } catch (error) {
        console.error('Erreur lors de la récupération des données photographes :', error);
    }
}


// Appelez getPhotographers et ajoutez les éléments au DOM
getPhotographers().then((photographerList) => {
    const photographersSection = document.querySelector('.photographer_section');
    
    if (photographersSection) {
        photographerList.forEach((photographerData) => {
            const photographer = createPhotographer(photographerData);
            console.log(photographer);
            const photographerElement = photographerFactory(photographer);
            photographersSection.appendChild(photographerElement);
        });
    } else {
        console.error('L\'élément .photographers-section n\'existe pas dans le DOM.');
    }
});

// PARTIE DES PHOTOGRAPHES : END //

// PARTIE DES MEDIAS : START //

async function getMedias() {
    try {
        const response = await fetch('../../data/photographers.json');
        const data = await response.json();
        console.log("Données récupérées :", data);
        return data.medias;
    } catch (error) {
        console.error('Erreur lors de la récupération des données medias :', error);
    }
}

async function getMediasByPhotogrpherId(id) {
    try {
        const response = await fetch('../../data/photographers.json');
        const data = await response.json();
        console.log("Données récupérées :", data);
        

        //aller  chercher dans ""data.medias"" ceux qui on un photogrpaID = id
 


       // const medias = recherche dans data sa la liste des media du photographe;
        
        return medias;
    } catch (error) {
        console.error('Erreur lors de la récupération des données medias :', error);
    }
}


// Appelez getMedias et ajoutez les éléments au DOM
getMedias().then((mediaList) => {
    const mediasSection = document.querySelector('.medias-section');
    
    if (mediasSection) {
        mediaList.forEach((media) => {
            const mediaElement = mediaFactory(media);
            mediasSection.appendChild(mediaElement);
        });
    } else {
        console.error('L\'élément .medias-section n\'existe pas dans le DOM.');
    }
});


// PARTIE DES MEDIAS : END //

