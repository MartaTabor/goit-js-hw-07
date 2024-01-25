import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryArray = galleryItems.map(
  (item) =>
    `<li class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a></li>`
);

gallery.innerHTML = galleryArray.join("");

console.log(galleryItems);
