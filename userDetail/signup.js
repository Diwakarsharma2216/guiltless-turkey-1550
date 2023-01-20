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

  //middle section

let userdata=JSON.parse(localStorage.getItem('userdata'))||[];

let form=document.querySelector('form');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let obj={
        name:`${form.firstname.value} ${form.lastname.value}`,
        phone:form.number.value,
        gender:form.gender.value,
        dob:form.dob.value
    }
    let flag=false;
   if(form.email.value==form.C_email.value){
    obj.email=form.email.value;
    flag=true;
   }
   else{
    alert('Email not Match Please Confirm Email')
   }

   if(form.password.value==form.C_password.value){
    obj.password=form.password.value;
    if(flag){
        userdata.push(obj);
        localStorage.setItem('userdata',JSON.stringify(userdata));
        alert('Your Accout create successfully');
        window.location.href='./user.html';
    }
   }
   else{
    alert('password not Match');
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