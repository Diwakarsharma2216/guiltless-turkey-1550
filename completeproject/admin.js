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

  //body part



function admindata(name,email,pass){
    this.name=name;
    this.email=email;
    this.pass=pass;
}

let Admin_data_log_in=[];
Name=[{name:""}];

Admin_data_log_in.push(new admindata('Dhiraj','dhirajrajpp@gmail.com',1234));
Admin_data_log_in.push(new admindata('Samir','12@12',1234));
Admin_data_log_in.push(new admindata('Divakar','12@12',1234));
Admin_data_log_in.push(new admindata('Hemant','12@12',1234));
Admin_data_log_in.push(new admindata('Sabar','12@12',1234));

let form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let flag=false;
    // let name=JSON.parse(localStorage.getItem('admin_name'));
   for(let key of Admin_data_log_in){
    if(key.name==form.name.value && key.email==form.email.value && key.pass==form.pass.value){
        flag=true;
        Name[0].name=key.name;
        localStorage.setItem('admin_name',JSON.stringify(Name));
        break;
    }
   }
   if(flag){
    alert('Welcome to the Admin page');
    window.location.href="./admin_control_page.html";
   }
   else{
    alert('Please fill your correct detail');
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