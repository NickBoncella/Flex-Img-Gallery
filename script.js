/*** ADD EVENT LISTENERs TO PANELS ***/
const panels = document.querySelectorAll('.panel');

// panels.forEach(function(panel) {
//   panel.addEventListener('click', expandPanel);
// })
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleOpenActive));

/*** TOGGLE OPEN FUNC ***/
function toggleOpen() {
  this.classList.toggle('open');
}
/*** TOGGLE OPEN ACTIVE FUNC ***/
function toggleOpenActive(e) {
  // check if flex grow transition complete
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}
