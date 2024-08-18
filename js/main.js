// Show Products In Page
// Catch Row cards
let rowCards = document.querySelector(".row");
// Creat Function To Show products
// Create Array contains Card Tile
let arrayTitle = [
  "summary_Tshirt",
  "Shoese",
  "Bag",
  "Blue_Shoese",
  "Scarf",
  "jacket",
  "Cut_Shoes",
  "Blue_Jacket",
  "Zety_Bag",
  "Watch",
  "Cap",
  "White_Shoes",
];
// Create Array Contains Classes
let arrayClasses = [
  "jacket",
  "shoes",
  "bag",
  "shoes",
  "cap",
  "jacket",
  "shoes",
  "jacket",
  "bag",
  "watch",
  "cap",
  "shoes",
];
const showProducts = () => {
  let card = "";
  for (let i = 0; i < 12; i++) {
    card += `
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12 item all ${
                      arrayClasses[i]
                    }">
              <div class="card" >
                <img src="../img/${i + 1}.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${arrayTitle[i]}</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
        
        `;
  }
  rowCards.innerHTML = card;
};
showProducts();
// Catch Variables
// Catch Input To Filter
let inputFilter = document.querySelector("form input");
// Catch All Cards
let cards = Array.from(document.querySelectorAll(".item"));

// Add Event On Input To Filter (keyup)
inputFilter.addEventListener("keyup", filter);
// Make function To Get Value Search
function filter() {
  let valueSearch = inputFilter.value.toLowerCase();
  for (let i = 0; i < arrayTitle.length; i++) {
    let item = arrayTitle[i].toLowerCase();
    if (item.indexOf(valueSearch) == -1) {
      cards[i].style.display = "none";
    } else {
      cards[i].style.display = "block";
    }
  }
}

// Make gallery filter

// Catch Lis
let lis = document.querySelectorAll(".project ul li");
lis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageProducts);
});

// Make Function Gallery Filterable

function removeActive() {
  lis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
    inputFilter.addEventListener("keyup", filter);
  });
}

// Create Function To Mange Show And Hide Products

function manageProducts() {
  cards.forEach((card) => {
    card.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((item) => {
    item.style.display = "block";
  });
}
