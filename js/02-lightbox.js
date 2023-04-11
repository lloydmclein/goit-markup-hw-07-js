import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const lightBoxMarkup = createLightboxMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", lightBoxMarkup);


function createLightboxMarkup(items) {
    return items
        .map(({ preview, original, description }) => {
            return ` <a class="gallery__link" href="${original}">
      <img class="gallery__image"
      src="${preview}" 
      alt="${description}" />
      </a> `
        }).join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});