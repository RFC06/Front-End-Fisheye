// FONCTION MENU DÉROULANT
//scripts/utils/sortImages.js
export function sortImages(gallery, criteria) {
    //const gallery = document.getElementById("gallery");
    //const images = Array.from(gallery.getElementsByClassName("media-card"));

    gallery.sort((a, b) => {
        if (criteria === "popularity") {
            return b.likes - a.likes;
        } else if (criteria === "date") {
            return new Date(b.date) - new Date(a.date);
        } else if (criteria === "title") {
            return a.title.localCompare(b.title);
        }
    });

    return gallery;

    //images.forEach(image => gallery.appendChild(image));
}