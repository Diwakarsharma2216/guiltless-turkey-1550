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
})