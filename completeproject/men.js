// let BaseUrl = "https://images.bewakoof.com/t640/"



/*      slider js start here    */


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



/*  slider js end here */


const url ="https://63c4d1cdf80fabd877db7506.mockapi.io/newproduct";

/*all the event listner are here*/


let container = document.getElementById("container")

let filter_container = document.getElementById("for_lable")
let sort_container= document.getElementById("sort_Size_Container")






let data_For_Other_application= []


/*  event listner end */
window.addEventListener("load",showdata)

function showdata(){
    // console.log("Hi")
    fetchValut()
    displayfilter()
    displaySort()
  

   
}

function fetchValut(){

fetch(url)
.then((res)=> res.json())
.then((data)=>{
    console.log(data)
    let needyData = data.filter((el)=>{
        // console.log(+el.id>=61)
        if(el.category == "Men" && +el.id!=92){
            return el
        }
    })
    // console.log(needyData)
    rendercard(needyData)
    
 
    data_For_Other_application=needyData
})
}


function cart(){

  let bag = document.getElementsByClassName("Add_to_cart_box")
  for(let el of bag){
 el.addEventListener("click",()=>{
  let dataId=el.dataset.id;
  for(let key of data_For_Other_application ){
    if(dataId===key.id){
      console.log(key)
    }
  }
    console.log("HI",el.dataset.id)
  })
  }
  
  console.log(bag)
}


function filter_giver(){

  let for_filter= document.getElementById("filter_Size")
  
  for_filter.addEventListener("click",()=>{
    // console.log("Hi")
    console.log(for_filter.value)
    let filtered_Data=data_For_Other_application.filter(el=>{
      if(for_filter.value==el.Size){
        return el
      }else if(for_filter.value==el.Size){
        return el
      }else if(for_filter.value==el.Size){
        return el
      }else if(for_filter.value==""){
        return el
      }
    })
    // console.log(filtered_Data)
    if(filtered_Data.length==0){
      rendercard(needyData)
   

    }else{
      rendercard(filtered_Data)
    
    }
  
  })
}




function filter_BY_colour(){

  let filter_By_Colour= document.getElementById("filter_Colour")
  filter_By_Colour.addEventListener("click",()=>{
  
    let filtered_Data_By_Colour= data_For_Other_application.filter(el=>{
      if(el.colour_for_sorting== filter_By_Colour.value){
        return el
      }else if(el.colour_for_sorting == filter_By_Colour.value){
        return el
      }else if(el.colour_for_sorting== filter_By_Colour.value){
        return el
      }else if(filter_By_Colour.value == ""){
        return el
      }
    })
    if(filtered_Data_By_Colour.length==0){
      rendercard(needyData)

    }else{
      rendercard(filtered_Data_By_Colour)
    }
    // console.log(filtered_Data_By_Colour)
  })

}

function sortByPrice(){
  let sort_price = document.getElementById("sort_price")

  sort_price.addEventListener("click",()=>{
    
    let sortedData= data_For_Other_application.sort((a,b)=>{
      if(sort_price.value === "L_T_H"){
        return (+a.price) - (+b.price)
      }else if(sort_price.value === "H_T_L"){
        return (+b.price)- (+a.price)
      }
      
      
    })


    if(sortedData.length == 0){
      rendercard(needyData)
    }else{
      rendercard( sortedData)
    }
    console.log(sortedData)
  })

}

/*        */




/*  */












function displayfilter(){
  filter_container.innerHTML=createfilter()
  
  filter_giver()
  filter_BY_colour()
  sortByPrice()

}

function displaySort(){
  sort_container.innerHTML=createSort()
 
}




/* All the utilities ie card making , filter maker, sort maker */


function rendercard(data){
  let cardData=[]
data.forEach(item=>{
  let card=`

    

  <div class="product" >
  <img src=${item.img} alt="Product Image" id="product-image">
  
  <div id="product_info">
    <div id="actual_product">
    <h3 id="product-name">${item.name}</h3>
    <p id="product-price">RS. ${item.price}</p>
    

  </div>
    <div class="Add_to_cart_box" data-id="${item.id}">
      <img src="https://www.shutterstock.com/image-vector/shopping-bag-icon-flat-vector-600w-1670113852.jpg" id="Add_to_cart" id="cursor"   >
    </div>
  
  </div>
  
</div>
  
  `
  cardData.push(card) 
})

container.innerHTML=cardData.join("")
cart()

}



function createfilter(){

  let filterDiv=`

  <div class="for_evenly">
               <label for="filter_Size">filter By Size:</label>
               <select name="for_Sort" id="filter_Size">
                 <option value="">Select</option>
                 <option value="XL">XL</option>
                 <option value="M">Medium</option>
                 <option value="S">Small</option>
                 <option value="L">Larg</option>
               </select>
              </div>
         
       
         <div class="for_evenly">
           <label for="filter_Colour">filter By Colour:</label>
           <select name="for_Colour" id="filter_Colour">
             <option value="">Select</option>
             <option value="Green">Green</option>
             <option value="White">White</option>
             <option value="Black">Black</option>
           </select>
         </div>
        
             <div class="for_evenly">
                    <label for="sort_price">sort By Price:</label>
                     <select name="for_Sort" id="sort_price">
                       <option value="">Select</option>
                        <option value="L_T_H">Price Low To High</option>
                        <option value="H_T_L">Price High To Low</option>
            
                      </select>
               </div>
         
  
  `

  return filterDiv
}




// function createSort(){


//   let sortDiv=`
//   <label for="sort_price">sort By Price:</label>
//       <select name="for_Sort" id="sort_price">
//         <option value="">Select</option>
//         <option value="L_T_H">Price Low To High</option>
//         <option value="H_T_L">Price High To Low</option>
       
//       </select>
//   `

//   return sortDiv
// }



let user=document.getElementById("loginAcc")
user.addEventListener("click",()=>{
 window.location.href="user.html"
})


let head1=document.getElementById("head/1")
head1.addEventListener("click",()=>{
  window.location.href="index.html"
})


//sending id to product describtion page
function rendercard(needyData) {
  let output = '';
  needyData.forEach(product => {
      output += `
      <div class="card" data-product-id="${product.id}"> 
        <img src="${product.img}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
      </div>
      `;
  });
  container.innerHTML = output;

  // Add click event listener to each card
  const cardElements = document.getElementsByClassName('card');
  for (let i = 0; i < cardElements.length; i++) {
      cardElements[i].addEventListener('click', (event) => {
        const productId = event.currentTarget.getAttribute('data-product-id');
        // Redirect to the product page
        window.location.href = `description.html?productId=${productId}`;
      });
  }
}
