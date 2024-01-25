import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryArray = galleryItems.map(
  (item) =>
    `<li class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a></li>`
);

gallery.innerHTML = galleryArray.join("");

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source} width="800" height="600">
`);

  instance.show();

  function escapeKeyDown(event) {
    if (event.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", escapeKeyDown);
    }
  }

  document.addEventListener("keydown", escapeKeyDown);
});

console.log(galleryItems);
