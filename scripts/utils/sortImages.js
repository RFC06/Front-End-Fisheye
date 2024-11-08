// FONCTION MENU DÉROULANT
//scripts/utils/sortImages.js
export function sortImages(criteria) {
    const gallery = document.getElementById("gallery");
    const images = Array.from(gallery.getElementsByClassName("media-card"));

    images.sort((a, b) => {
        if (criteria === "popularity") {
            return b.getAttribute("data-likes") - a.getAttribute("data-likes");
        } else if (criteria === "likes") {
            return new Date(b.getAttribute("data-date")) - new Date(a.getAttribute("data-date"));
        } else if (criteria === "title") {
            return a.getAttribute("data-title").localeCompare(b.getAttribute("data-title"));
        }
    });

    images.forEach(image => gallery.appendChild(image));
}