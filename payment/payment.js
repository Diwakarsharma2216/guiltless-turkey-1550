const estimatedTotal = document.getElementById('estimated-total');
const payButton = document.getElementById('pay-button');

let cartItems = JSON.parse(localStorage.getItem('cartItem')) || [];
let total = 0;

cartItems.forEach(item => {
  total += item.price * item.quantity;
});

estimatedTotal.innerHTML = `Estimated Total: $${total}`;

//payButton.addEventListener('click', event => {
//  event.preventDefault();
//  // Simulate a successful payment
//  alert('Payment successful!');
//  localStorage.removeItem('cartItem');
//  location.href = '../description/cart.html';
//});



const cardNumber = document.getElementById("card-number");
const expirationDate = document.getElementById("expiration-date");
const cvv = document.getElementById("cvv");


payButton.addEventListener("click", validateForm);

function validateForm() {
    let isValid = true;

    // validate card number
    if (!validateCardNumber(cardNumber.value)) {
        alert("Please enter a valid card number");
        isValid = false;
    }

    // validate expiration date
    else if (!validateExpirationDate(expirationDate.value)) {
        alert("Please enter a valid expiration date in the format MM/YY");
        isValid = false;
    }

    // validate cvv
    else if (!validateCVV(cvv.value)) {
        alert("Please enter a valid CVV code");
        isValid = false;
    }

    else if (isValid) {
        // submit form or redirect to the next page
        alert('Payment successful!');
        localStorage.removeItem('cartItem');
        location.href = '../cart/cart.html';
        
    }
}

function validateCardNumber(cardNumber) {
    // add validation logic for card number
    return /^\d{16}$/.test(cardNumber);
}

function validateExpirationDate(expirationDate) {
    // add validation logic for expiration date
    return /^(0[1-9]|1[0-2])\/\d{2}$/.test(expirationDate);
}

function validateCVV(cvv) {
    // add validation logic for cvv
    return /^\d{3}$/.test(cvv);
}









  
  
  
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