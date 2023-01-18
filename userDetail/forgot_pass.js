let userdata=JSON.parse(localStorage.getItem('userdata'))||[];


let form=document.querySelector('form');
let display_pass=document.getElementById('passdisplay');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
for(let key of userdata){
    if(key.email==form.email.value){
        if(key.phone==form.number.value){
            display_pass.innerText=key.password;
            break;
        }
    }
}
})