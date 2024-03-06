const speed = document.querySelector('.speed-value');
const arrow = document.querySelector('.arrow');

console.log('hello there ');

navigator.geolocation.watchPosition((data) => {
  console.log(data);
});
