// To change the background of navbar
window.addEventListener('scroll', function () {
  let navbar = document.querySelector('.navbar');
  let scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

let previousScrollPosition = window.scrollY;

window.onscroll = function () {
  const currentScrollPosition = window.scrollY;

  if (previousScrollPosition > currentScrollPosition) {
    // Scrolling up
    document.querySelector("nav").classList.remove("hide-navbar");
  } else {
    // Scrolling down
    document.querySelector("nav").classList.add("hide-navbar");
  }

  previousScrollPosition = currentScrollPosition;
};


// ******* horizontal bar ********
// document.addEventListener("DOMContentLoaded", function() {
//   const cardContainer = document.getElementById("cardContainer");
//   const cards = Array.from(cardContainer.getElementsByClassName("card"));

//   function updateActiveCard() {
//     const containerWidth = cardContainer.offsetWidth;
//     const scrollLeft = cardContainer.scrollLeft;

//     const containerCenter = 0;
//     const activeCard = cards.find(card => {
//       const cardOffsetLeft = card.offsetLeft;
//       const cardWidth = card.offsetWidth;
//       const cardCenter = cardOffsetLeft + 0;

//       return cardCenter >= scrollLeft + containerCenter && cardCenter <= scrollLeft + containerCenter + cardWidth;
//     });

//     cards.forEach(card => {
//       card.classList.remove("active");
//     });

//     if (activeCard) {
//       activeCard.classList.add("active");
//     }
//   }

//   cardContainer.addEventListener("hover", updateActiveCard);
//   updateActiveCard();
// });
