let cartContainer = document.getElementById('cart-container');
const cartItemsContainer = document.getElementById("cart-items");
let cartItem = JSON.parse(localStorage.getItem('cartItem')) || [];


if (cartItem.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty</p>';
  } else {
    let cartHTML = '';
    cartItem.forEach(item => {
      cartHTML += `
                <div id="heading-cart"><h1>Shopping Bag</h1><span>cart item : ${cartItem.length}</span></div>
                
              <div class="cart-item">
                  <img src="${item.img}" alt="${item.name}">
                  
                  
                  <div id="name-div"><h2>${item.name}</h2></div>
                  <p>Price: $${item.price}</p>
                  <p>Quantity: ${item.quantity||1}</p>
                  
                  <button class="increase-quantity" data-product-id="${item.id}">+</button>
                  <button class="decrease-quantity" data-product-id="${item.id}">-</button>

                  <button class="remove-from-cart" data-product-id="${item.id}">Remove</button>
              </div>
          `;
    });
    cartContainer.innerHTML = cartHTML;
  }


// Add an event listener to the remove button
const removeButtons = document.querySelectorAll('.remove-from-cart');
removeButtons.forEach(button => {
    button.addEventListener('click', event => {
        const productId = event.target.dataset.productId;
        let index = -1;
        cartItem.forEach((item, i) => {
            if(item.id === productId) index = i;
        });
        if(index !== -1) {
            cartItem.splice(index, 1); 
            localStorage.setItem('cartItem', JSON.stringify(cartItem));
            location.reload();

        }
        cartHTML ='';
        cartItem.forEach(item => {
            cartHTML += `
            <div id="heading-cart"><h1>Shopping Bag</h1><span>cart item : ${cartItem.length}</span></div>
                
            <div class="cart-item">
                <img src="${item.img}" alt="${item.name}">
                
                
                <div id="name-div"><h2>${item.name}</h2></div>
                <p>Price: $${item.price}</p>
                <p>Quantity: ${item.quantity||1}</p>
                
                <button class="increase-quantity" data-product-id="${item.id}">+</button>
                <button class="decrease-quantity" data-product-id="${item.id}">-</button>

                <button class="remove-from-cart" data-product-id="${item.id}">Remove</button>
            </div>
            `;
        });
        cartContainer.innerHTML = cartHTML;
    });
});

function addProductToCart(product) {
    product.quantity = 1;
    cartItem.push(product);
    localStorage.setItem('cartItem', JSON.stringify(cartItem));
    
}

// to increase the quantity 
function increaseQuantity(productId) {
    let productIndex = cartItem.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
      cartItem[productIndex].quantity += 1;
      localStorage.setItem('cartItem', JSON.stringify(cartItem));
      location.reload();
      let cartHTML = '';
    cartItem.forEach(item => {
      cartHTML += `
              <div class="cart-item">
                  <img src="${item.img}" alt="${item.name}">
                  <h2>${item.name}</h2>
                  <p>Price: $${item.price}</p>
                  <p>Quantity: ${+item.quantity}</p>
                  <button class="increase-quantity" data-product-id="${item.id}">+</button>
                  <button class="decrease-quantity" data-product-id="${item.id}">-</button>

                  <button class="remove-from-cart" data-product-id="${item.id}">Remove</button>
              </div>
          `;
    });
    cartContainer.innerHTML = cartHTML;
      
    }
  }

  

  const increaseButtons = document.querySelectorAll('.increase-quantity');
increaseButtons.forEach(button => {
    button.addEventListener('click', event => {
        const productId = event.target.dataset.productId;
        increaseQuantity(productId);
    });
});


// decrease quantity
function decreaseQuantity(productId) {
    let productIndex = cartItem.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
      cartItem[productIndex].quantity -= 1;
      if (cartItem[productIndex].quantity <= 0) {
        cartItem.splice(productIndex, 1);
      }
      localStorage.setItem('cartItem', JSON.stringify(cartItem));
      location.reload();
      let cartHTML = '';
    cartItem.forEach(item => {
      cartHTML += `
              <div class="cart-item">
                  <img src="${item.img}" alt="${item.name}">
                  <h2>${item.name}</h2>
                  <p>Price: $${item.price}</p>
                  <p>Quantity: ${+item.quantity}</p>
                  <button class="increase-quantity" data-product-id="${item.id}">+</button>
                  <button class="decrease-quantity" data-product-id="${item.id}">-</button>

                  <button class="remove-from-cart" data-product-id="${item.id}">Remove</button>
              </div>
          `;
    });
    cartContainer.innerHTML = cartHTML;
      
    }
  }
  
//add event listener for decrease button like the remove button

  const decreaseButtons = document.querySelectorAll('.decrease-quantity');
decreaseButtons.forEach(button => {
    button.addEventListener('click', event => {
        const productId = event.target.dataset.productId;
        decreaseQuantity(productId);
    });
});




function updateOrderSummary() {
    let summaryHTML = '';
    let totalPrice = 0;
    cartItem.forEach(item => {
        const itemTotal = +item.price * (+item.quantity);
        totalPrice += itemTotal;
        summaryHTML += `
            <div class="summary-item">
                <p>${+item.price} x ${item.quantity||1}</p>
                
                <p>$${itemTotal||item.price}</p>
                <hr>
            </div>
        `;
    });
    document.getElementById("summary-items").innerHTML = summaryHTML;
    document.getElementById("total-price").innerHTML = `Estimated Total: $${+totalPrice}`;
 }
 
 const quantityInputs = document.querySelectorAll('.quantity-input');
 quantityInputs.forEach(input => {
    input.addEventListener('change', event => {
        const productId = event.target.dataset.productId;
        const newQuantity = event.target.value;
        cartItem.forEach(item => {
            if(item.id === productId) {
                item.quantity = newQuantity;
                localStorage.setItem('cartItem', JSON.stringify(cartItem));
                updateOrderSummary();
            }
        });
    });
 });
 
 updateOrderSummary();
 


 // redirect to a payment page
 const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', event => {
  window.location.href = '../payment/payment.html';
});





  
  
  
  //navbar website 
  
  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    var i;
    var slides = document.querySelectorAll("#slider h3");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
  
  
  
  /////////////////////////////////////
  
  ///bavbar and footer 
  //advartisement slider
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.querySelectorAll("#slider h3");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
 

  // advertise ment slider 
  let slideIndex1 = 0;
showSlides1();

function showSlides1() {
  let i;
  let slides = document.querySelectorAll("#slider-1 h3");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {slideIndex1 = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides1, 1000); // Change image every 2 seconds
  }
 

  //slider three part here 
  let slideIndex3 = 0;
showSlides3();

function showSlides3() {
  let i;
  let slides = document.querySelectorAll("#slider-3 h3");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex3++;
  if (slideIndex3 > slides.length) {slideIndex3 = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides3, 1000); // Change image every 2 seconds
  }



  
// const data = [{name: "John", age: 25}, {name: "Mike", age: 32}, {name: "Sarah", age: 18}];



// let searchbtn=document.getElementById("search")
// let search = (term) => {
//   // fetch(`https://63c4d1cdf80fabd877db7506.mockapi.io/newproduct${term}`)
//   .then(response => response.json())
//   .then(data => {
//       const filteredData = data.filter(item => item.name.toLowerCase().includes(term.toLowerCase()));
//       console.log(filteredData);
//   })
//   .catch(error => console.log(error));
// }

// let ans=search(searchbtn)
// console.log(ans)

//start three here


fetch("https://63c4d1cdf80fabd877db7506.mockapi.io/newproduct")
.then((res)=>{
  return res.json()
})
.then((data)=>{
  checkout(data)
})

 let searchbtn=document.getElementById("search")
 let timer;
 let sec=500;
 function checkout(data){
  for( let i=0;i<data.length;i++){
    if(data[i].innerText.toLowerCase().includes(input.value.toLowerCase())){
      data[i].classList.remove("hidden")
    }else{
      data[i].classList.add("hidden")
    }
  }
 }
 searchbtn.addEventListener("keyup",function(){
  clearTimeout(timer)
  timer=setTimeout(checkout,1000)
 })