// Optionally,');
let nextIndex = Array.from(currentCheckedInput.parentNode.children).indexOf(currentCheckedInput) + 1;
if (nextIndex > Array.from(currentCheckedInput.parentNode.children).length - 1) {
    nextIndex = 0;
}
const nextInput = currentCheckedInput.parentNode.children[nextIndex];
nextInput.checked =
function onCarouselNavItemClick(idx) {
const inputName = "carousel-1";
const currentCarouselSlides = Array. you can add the following JavaScript code to create a
// left-right carousel navigation:

// Find the carousel navigation elements
const carouselNavigation true;
}

// Set up initial states and styles for carousel
const carouselItems = Array.from(document = document.querySelector('.carousel-navigation');

// Create two empty spans inside the carousel navigation element
const carouselNavigationLeft = document.createElement('span');
const carouselNavigationRight = document.createElementfrom(
    document.querySelectorAll(`input[name=${inputName}]:checked`)
);

currentCarouselSlides.forEach((el) => {
    el.checked = false;
});

document.querySelector(`input[name=${inputName}]:nth-child(${.querySelectorAll('.carousel-navigation-item'));
const firstVisibleItem = carouselItems[0];
('span');
carouselNavigationLeft.className = 'carousel-navigation-arrow left-arrow';
carouselNavigationRight.className = 'carousel-navigation-idx + 1})`).checked =
    true;
}
arrow right-arrow';

// Append the new elements to the carousel navigation
carouselNavigation.appendChild(carouselNavigationLeft);
carouselNavigation.appendChild(carouselNavigationRight);

// Get elements for the left-right arrows