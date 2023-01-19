function admindata(name,email,pass){
    this.name=name;
    this.email=email;
    this.pass=pass;
}

let Admin_data_log_in=[];
Name=[{name:""}];

Admin_data_log_in.push(new admindata('Dhiraj Kumar','dhirajrajpp@gmail.com',1234));
Admin_data_log_in.push(new admindata('Samir','samirshinde011@gmail.com',1234));
Admin_data_log_in.push(new admindata('Divakar','divaker@gmail.com',1234));
Admin_data_log_in.push(new admindata('Hemant','hemant@gmail.com',1234));
Admin_data_log_in.push(new admindata('unknown','unknown@gmail.com',1234));

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
})