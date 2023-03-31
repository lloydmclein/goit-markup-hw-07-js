import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = galleryItems.map(({ preview, description }) => 
    `<div class="gallery__item">
   <img class="gallery__image" src="${preview}" alt="${description}"></div>`
).join("");

const galleryPage = document.querySelector(".gallery");
galleryPage.innerHTML = gallery;

console.log(gallery);