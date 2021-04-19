// Get products containers
const ipad = document.querySelector('.product-container:nth-of-type(1)');
const watch = document.querySelector('.product-container:nth-of-type(2)');
const iphone = document.querySelector('.product-container:nth-of-type(3)');
const macbook = document.querySelector('.product-container:nth-of-type(4)');

// Get card description containers
const ipadDescription = document.querySelectorAll('.card-description-container')[0];
const watchDescription = document.querySelectorAll('.card-description-container')[1];
const iphoneDescription = document.querySelectorAll('.card-description-container')[2];
const macbookDescription = document.querySelectorAll('.card-description-container')[3];
const aboutDescription = document.querySelectorAll('.card-description-container')[4];

// Get menu button, nav element and about container
const menuButton = document.querySelector('.menu-icon-container');
const nav = document.querySelector('nav');
const about = document.querySelector('.about-container');


// Add events to IPad container
ipad.addEventListener('mouseenter', function(event) {
  ipadDescription.classList.remove('hide-element');
});

ipad.addEventListener('mouseleave', function(event) {
  ipadDescription.classList.add('hide-element');
});

// Add events to Watch container
watch.addEventListener('mouseenter', function(event) {
  watchDescription.classList.remove('hide-element');
});

watch.addEventListener('mouseleave', function(event) {
  watchDescription.classList.add('hide-element');
});

// Add events to IPhone container
iphone.addEventListener('mouseenter', function(event) {
  iphoneDescription.classList.remove('hide-element');
});

iphone.addEventListener('mouseleave', function(event) {
  iphoneDescription.classList.add('hide-element');
});

// Add events to MacBook container
macbook.addEventListener('mouseenter', function(event) {
  macbookDescription.classList.remove('hide-element');
});

macbook.addEventListener('mouseleave', function(event) {
  macbookDescription.classList.add('hide-element');
});

// Add events to About container
about.addEventListener('mouseenter', function(event) {
  aboutDescription.classList.remove('hide-element');
});

about.addEventListener('mouseleave', function(event) {
  aboutDescription.classList.add('hide-element');
});

// Add menu button click event
menuButton.addEventListener('click', function(event) {
  if (nav.classList.contains('nav-mobile')) {
    nav.classList.remove('nav-mobile');
  } else {
    nav.classList.add('nav-mobile');
  }
})