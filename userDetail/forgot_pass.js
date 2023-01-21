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


  //body

let userdata=JSON.parse(localStorage.getItem('userdata'))||[];


let form=document.querySelector('form');
let display_pass=document.getElementById('passdisplay');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let flag=false;
for(let key of userdata){
    if(key.email==form.email.value){
        if(key.phone==form.number.value){
            display_pass.innerText="Your password is:-"+key.password;
            alert("Your password is:-"+key.password);
            flag=true;
            break;
        }
        else{
          display_pass.innerText='Please fill correct information'
        }
    }
}
if(!flag){
  alert('wrong detail');
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