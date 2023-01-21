function getProductIdFromUrl() {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get('productId');
}


const productId = getProductIdFromUrl();
const productUrl = `https://63c4d1cdf80fabd877db7506.mockapi.io/newproduct/${productId}`;
let description=`<p>Go big on your LA Lakers fandom with this graphic tee.
<ol>Details
<li>Knit fabric</li>
<li>Los Angeles Lakers team logo text | basketball net graphics </li>
<li>Style: 1067</li>
<li>Imported</li>
<li>Fit</li>
</ol>


<ul>
<li>Crew neck</li>
<li>Approx. length (M): 29.5"</li>
<li>Model height: 6'0" | Wear size: Medium</li>
<li>Care & Materials</li>
<li>60% cotton, 40% polyester</li>
<li>Machine wash/dry</li>
</ul>

</p>`

let cartItem = [];
fetch(productUrl)
  .then(response => response.json())
  .then(data => {
    
    const product = data;
    console.log(data)
    

    // Generate the HTML for the product page
    
    
    const productHTML = `
      <div id="product-image-container">
        <img src="${product.img}" alt="${product.name}">
        
      </div>
      <div id="product-details-container">
        <h1>${product.name}</h1>
        <p>Price: $${product.price} <span>
        Comp. Value : $${product.price*2}</span></p>
        <label for="size-select">size : Select size</label>

        <select id="size-select" >
            
            <option value="Small">S</option>
            <option value="medium">M</option>
            <option value="large">L</option>
            <option value="xlarge">xL</option>
          </select>
        <h4>Product Detail and Fit</h4>
        <p>${description}</p>
        <button id="add-to-cart">Add to Cart</button>
      </div>
    `;

    // Add the HTML to the page
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = productHTML;


  
    

    // Add an event listener to the "Add to Cart" button
    const addToCartButton = document.getElementById('add-to-cart');
    let cartItem = JSON.parse(localStorage.getItem('cartItem')) || [];
    addToCartButton.addEventListener('click', () => {
      // Add the product to the cart
      addProductToCart(product);
      cartItem.push(product)
      localStorage.setItem('cartItem', JSON.stringify(cartItem));
      window.location.href='#'
      console.log(JSON.parse(localStorage.getItem('cartItem')));

    });
   
  

    // Get  products
    fetch('https://63c4d1cdf80fabd877db7506.mockapi.io/newproduct')
      .then(response => response.json())
      .then(similarProducts => {
        // Filter out the current product and also shhow nly the type sample
        
        const filteredSimilarProducts = similarProducts.filter(p => p.id !== product.id && p.type==product.type);
        console.log(filteredSimilarProducts)
        const limitedSimilarProducts = filteredSimilarProducts.slice(0, 4);

        // Generate the HTML for the similar products
        let similarProductsHTML = '<div id="similar-product-headline"><h1>You May Also Like </h1></div>';
        limitedSimilarProducts.forEach(similarProduct => {
          similarProductsHTML += `
          <div class="similar-product" data-product-id="${similarProduct.id}">
          

              <img src="${similarProduct.img}" alt="${similarProduct.name}">
              <h2>${similarProduct.name}</h2>
              <p>Price: $${similarProduct.price}</p>
              <span>
        Comp. Value : $${product.price*2}</span>
              
            </div>
          `;
          console.log(similarProduct.id)

        });


  
        // Add the similar products to the page
        const similarProductsContainer = document.getElementById('similar-products-container');
        similarProductsContainer.innerHTML = similarProductsHTML;

      // Add click event listener to each similar product so when you clic it will callback to product description page
      const similarProductElements = document.getElementsByClassName('similar-product');
      for (let i = 0; i < similarProductElements.length; i++) {
        similarProductElements[i].addEventListener('click', (event) => {
          const productId = event.currentTarget.getAttribute('data-product-id');
          console.log(productId)
          fetch(`https://63c4d1cdf80fabd877db7506.mockapi.io/newproduct/${productId}`)
            .then(response => response.json())
            .then(data => {
              // Extract the product data from the API response
              const product = data;
              // Generate the HTML for the product page
              const productHTML = `
                <div id="product-image-container">
                  <img src="${product.img}" alt="${product.name}">
                </div>
                <div id="product-details-container">
                  <h1>${product.name}</h1>
                  <p>Price: $${product.price}
                  <span>
                  Comp. Value : $${product.price*2}</span></p>
                  <label for="size-select">size : Select size</label>

        <select id="size-select" >
            ${product.sizes}
            <option value="Small">S</option>
            <option value="medium">M</option>
            <option value="large">L</option>
            <option value="xlarge">xL</option>
          </select>
                  <h4>Product Detail and Fit</h4>
                  <p>${description}</p>
                  <button id="add-to-cart">Add to Cart</button>
                </div>
              `;
              // Add the HTML to the page
              productContainer.innerHTML = productHTML;
            })
            .catch(error => {
              console.error('Error fetching product:', error);
            });
        });
      }
    })
      .catch(error => {
        console.error('Error fetching similar products:', error);
      });
  })
  .catch(error => {
    console.error('Error fetching product data:', error);
  });

// Function to add a product to the cart
function addProductToCart(product) {
  const cartItemCount = document.getElementById('cart-item-count');
  
  alert("item added")
  
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

