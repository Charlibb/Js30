const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100; // 100px

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
if (this !== e.target) {
  x = x + e.target.offsetLeft;
  y = y + e.target.offsetTop;
}


//how far shadow goes

const xwalk = Math.round((x / width * walk) - (walk / 2));
const ywalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `  
     ${xwalk}px ${ywalk}px 0 rgba(255,0,0,0.7),
     ${xwalk * -1}px ${ywalk}px 0 rgba(0,255,0,0.7),
        ${xwalk}px ${ywalk * -1}px 0 rgba(0,0,255,0.7),
        ${xwalk * -1}px ${ywalk * -1}px 0 rgba(255,255,0,0.7)
     `;

    console.log(xwalk, ywalk);


}

hero.addEventListener('mousemove', shadow);
