/* For Search form*/
let searchForm =document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

/* Shoping cart */
let shoppingCart =document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

/* Profile  */
let loginForm =document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

/* For Home/Menu bar */
let navbar =document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}


window.onscroll= () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });


  // Existing code for product data and rendering products...

// Global cart object to store cart items
const cart = {
  items: [],
  total: 0,
};

function addToCart(product) {
  // Check if the product is already in the cart
  const existingItem = cart.items.find(item => item.id === product.id);
  if (existingItem) {
      existingItem.quantity++;
  } else {
      cart.items.push({ ...product, quantity: 1 });
  }
  
  // Update the cart total
  cart.total += product.price;
  
  // Display cart items and total
  updateCartUI();
}

function updateCartUI() {
  const cartContainer = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("cart-total");
  
  // Clear the cart container before updating
  cartContainer.innerHTML = "";
  
  // Render each cart item
  cart.items.forEach(item => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("box");
      
      const itemName = document.createElement("h3");
      itemName.textContent = item.name;
      
      const itemPrice = document.createElement("div");
      itemPrice.classList.add("price");
      itemPrice.textContent = `$${item.price.toFixed(2)}`;
      
      const itemQuantity = document.createElement("div");
      itemQuantity.textContent = `Quantity: ${item.quantity}`;
      
      cartItem.appendChild(itemName);
      cartItem.appendChild(itemPrice);
      cartItem.appendChild(itemQuantity);
      
      cartContainer.appendChild(cartItem);
  });
  
  // Update the cart total display
  totalDisplay.textContent = `Total: $${cart.total.toFixed(2)}`;
}

// Event listener for Add to Cart buttons
document.querySelectorAll(".btn.add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
      const productId = parseInt(button.dataset.productId);
      const product = productsData.find(item => item.id === productId);
      addToCart(product);
  });
});
