// makes the function not run all the time
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
      let context = this, args = arguments;
      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

 const sliderImages = document.querySelectorAll('.slide-in') 

 function checkSlide(e) {
     /* console.log(e) */
     console.count(e) 
     sliderImages.forEach(sliderImage =>{
         const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;

         const imageBottom = sliderImage.offsetTop + sliderImage.height;
         const isHalfShown = slideInAt > sliderImage.offsetTop;
         console.log(isHalfShown)
         
        })
 }

window.addEventListener('scroll',debounce(checkSlide)) 