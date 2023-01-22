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
  //user code

let userdata=JSON.parse(localStorage.getItem('userdata'))||[];

let form=document.querySelector('form');
let loginstatus=document.getElementById('loginstatus');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let flag=false;
    for(let key of userdata){
        if(key.email==form.email.value){
            // console.log(key.password,form.password)
            if(key.password==form.password.value){
                flag=true;
                break;
            }
            // else{
            //     loginstatus.innerText='Password Wrong';
            // }
        }
    }
    if(flag){
       alert('Login Successfully');
        window.location.href="http://127.0.0.1:5500/index/index.html";
    }
    else{
      loginstatus.innerText='Wrong Detail';
    }
});


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