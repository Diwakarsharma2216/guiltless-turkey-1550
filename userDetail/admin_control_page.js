let admin_name = JSON.parse(localStorage.getItem('admin_name'));
let admin_name_cart = document.querySelector('#admin_name');
let form_get_id = document.getElementById('get_id');
let form_update_price = document.getElementById('update_price');
let form_delete_item = document.getElementById('delete');
let form_post_item = document.getElementById('post_item');
let append_div = document.getElementById('append_item');
let item_data;
let data_url='https://63c4d1cdf80fabd877db7506.mockapi.io/newproduct'

Fetch('https://63c4d1cdf80fabd877db7506.mockapi.io/newproduct');



window.addEventListener('load', (e) => {
    e.preventDefault();
    admin_name_cart.innerHTML = `<h1>Your  Welcome:-<span> ${admin_name[0].name}</span></h1>`
});

form_post_item.addEventListener('submit',(e)=>{
    e.preventDefault();
    let obj={
        "name":form_post_item.name.value,
        "img": form_post_item.image.value,
        "price":form_post_item.price.value ,
        "category":form_post_item.Category.value ,
        "colour":form_post_item.colour.value ,
        "colour_for_sorting": form_post_item.colour_for_sorting.value,
        "type":form_post_item.type.value,
        "Size": form_post_item.size.value
      }
      console.log(obj);
      post_item(obj);
})




form_delete_item.addEventListener('submit',(e)=>{
    e.preventDefault();
    let Id=form_delete_item._id.value;
    // console.log(Id);
    delete_item(Id);
});


form_get_id.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = form_get_id.name.value;
    console.log(item_data);
    setTimeout(() => {
        for (let key of item_data) {
            if (key.name == name) {
                append_item(key);
                console.log(key);
                break;
            }
        }
    }, 0);
});


form_update_price.addEventListener('submit',(e)=>{
    e.preventDefault();
    let id=form_update_price.id_number.value;
    let newprice=form_update_price.price.value;
    update_price(id,newprice);
});

function post_item(obj){
    let post_Data=fetch(`https://63c4d1cdf80fabd877db7506.mockapi.io/newproduct`,{
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
          });
    post_Data.then((res)=>{
        return res.json();
    })
    .then((data)=>{
        alert("Item Posted")
        append_item(data);
    })
    .catch((error)=>{
        console.log(error);
    })
}



function delete_item(id){
            //    console.log(id);  
    let Delete=fetch(`https://63c4d1cdf80fabd877db7506.mockapi.io/newproduct/${+id}`,{
        method: 'DELETE',
    });
    Delete.then((res)=>{
        return res.json();
    })
    .then((data)=>{
        alert("Item Deleted")
        append_item(data);
    })
    .catch((error)=>{
        console.log(error);
    });
}


function update_price(id,newprice){
    let obj={'price':newprice};
    console.log(id,newprice);
    let patch_Data=fetch(`https://63c4d1cdf80fabd877db7506.mockapi.io/newproduct/${+id}`,{
  method: 'PUT', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(obj)
    });
    patch_Data.then((res)=>{
        return res.json();
    })
    .then((data)=>{
        alert("Price Updated")
        append_item(data)
    })
    .catch((error)=>{
        console.log(error);
    });
}


function append_item(data) {
    let templete_string_data = `<div>
                               <h1>your item is:-</h1>
                                    <h2>Name:- ${data.name}</h2>
                                    <img src="${data.img}" alt="image">
                                    <p>price:- ${data.price}</p>
                                    <h2>ID:- ${data.id}</h2>
                                    <p>Size:- ${data.Size}</p>
                                    <p>Category:- ${data.category}</p>
                                    <p>Colour:- ${data.colour}</p>
                                    <p>Types:- ${data.type}</p>
                                </div>`
                                append_div.innerHTML=templete_string_data;                      
}


function Fetch(url) {
    let fetchdata = fetch(url);
    fetchdata.then((res) => {
        return res.json();
    })
        .then((data) => {
            item_data = data;
            console.log(item_data);
        })
        .catch((error) => {
            console.log(error);
        });
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
  slides[slideIndex3-1].style.display = "block"; 
  setTimeout(showSlides3, 1000); // Change image every 2 seconds
  }