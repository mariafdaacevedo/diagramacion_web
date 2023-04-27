'use strict'
addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed")
    /*---------- */
    const divs = document.querySelectorAll('.image-container div');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox img');

divs.forEach((div) => {
  div.addEventListener('click', () => {
    const img = div.querySelector('img');
    window.open(img.src, '_blank', `width=${window.innerWidth},height=${window.innerHeight}`);

  });
});
    /*------------ */
});


