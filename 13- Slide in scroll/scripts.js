// makes the function not run all the time
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  /* console.log(e) */
  /* console.count(e)  */
  /* console.log(window.scrollY + window.innerHeight) */; // pixel level at current bottom of the viewport
  sliderImages.forEach(sliderImage => {
          /* window.scrollY Retorna el número de píxeles que han sido desplazados en el documento mediante el scroll vertical.
          window.innerHeight    Representa la altura (en pixeles) del viewport 
          height especifica la altura del area de contenido de un elemento. Especificamos que queremos
          que en cada imagen (sliderImage)a la mitad ( /2 )comienze el slide in
          */

          const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
      console.log("this is wondownscrolly + inner height "+ window.scrollY + window.innerHeight)    
      console.log("this is sliderimage / 2  "+ sliderImage.height / 2 + window.innerHeight) 
      console.log("this is the slideinat " + slideInAt)  
      

     const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop; 
    const isNotScrolled = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolled) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');

    }
  });
}



    /* offsetTop retorna la distancia del elemento actual respecto al borde superior del nodo offsetParent. */
 

window.addEventListener("scroll", debounce(checkSlide));
