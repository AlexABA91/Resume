let images = document.images;
let imagesTotalCaunt = images.length;
let imagesLoaderCaunt = 0;
let persDisplay = document.getElementById('prosentage')
let preloader = document.getElementById('preloder')
for (i = 0; i < imagesTotalCaunt; i++) {
   imageClone = new Image();
   imageClone.onload = image_loaded;
   imageClone.onerror = image_loaded;
   imageClone.src = images[i].src
}
console.log(imagesTotalCaunt);
console.log(imagesLoaderCaunt);
console.log(images)
function image_loaded() {
   imagesLoaderCaunt++;
   persDisplay.innerHTML = (((100 / imagesTotalCaunt) * imagesLoaderCaunt) << 0) + '%';
   if (imagesLoaderCaunt >= imagesTotalCaunt) {
      document.body.onload = function () {
         setTimeout(() => {
            if (!preloader.classList.contains('done')) {
               preloader.classList.add('done')
            }
         }, 2000);
      }
   }
}

