const triggers = document.querySelectorAll('.cool > li');
const dropDown = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter(e) {
  console.log('entered');
  this.classList.add('trigger-enter');
  setTimeout(() => {
    this.classList.add('trigger-enter-active');
  }, 200);
}

function handleLeave(e) {
  console.log('leaves');

  this.classList.remove('trigger-enter');
  setTimeout(() => {
    this.classList.remove('trigger-enter-active');
  }, 500);
}

triggers.forEach((trigger) =>
  trigger.addEventListener('mouseenter', handleEnter)
);

triggers.forEach((trigger) =>
  trigger.addEventListener('mouseleave', handleLeave)
);
