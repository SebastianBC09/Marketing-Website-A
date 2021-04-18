// Get products containers
const ipad = document.querySelector('.product-container:nth-of-type(1)');
const watch = document.querySelector('.product-container:nth-of-type(2)');
const iphone = document.querySelector('.product-container:nth-of-type(3)');
const macbook = document.querySelector('.product-container:nth-of-type(4)');

// Get products description containers
const ipadDescription = document.querySelectorAll('.product-description-container')[0];
const watchDescription = document.querySelectorAll('.product-description-container')[1];
const iphoneDescription = document.querySelectorAll('.product-description-container')[2];
const macbookDescription = document.querySelectorAll('.product-description-container')[3];

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