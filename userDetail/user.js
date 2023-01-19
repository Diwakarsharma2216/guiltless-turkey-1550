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
            else{
                loginstatus.innerText='Password Wrong';
            }
        }
    }
    if(flag){
        loginstatus.innerText='Login Successfully';
        window.location.href='index.html';
    }
})