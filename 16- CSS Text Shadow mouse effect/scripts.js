const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");

function shadow(e) {
  //get width and height of where we hover over

  /*  const width = hero.offsetWidth;
  const height = hero.offsetHeight; */
  // Above line, but in destructuring :
  const { offsetWidth: width, offsetHeight: height } = hero;

  // where the cursors is :
  /* let x = e.offsetX;
  let y = e.offsetY; */
  let { offsetX : x, offsetY : y } = e;

  // get the position of the cursor :
 console.log(x, y);
  console.log(e);

// 
if(this !== e.target) {
  x = x + e.target.offsetLeft;
  y = y + e.target.offsetTop;
}





}

hero.addEventListener('mousemove', shadow);
