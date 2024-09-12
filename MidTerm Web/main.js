addEventListener('submit', function(event){
    event.preventDefault();
    const username=this.document.getElementById('username').value;
    const password=this.document.getElementById('password').value;
  
   
    if(username=="admin"  && password=="123"){
        this.alert("Login&SignUp successfully");
    }
    else{
        alert("Invalid username and password.");
    }

    this.document.getElementById('username').value="";
    this.document.getElementById('password').value="";
    this.document.getElementById('email').value="";
});
var password=document.getElementById('password');
//var confirmpassword=document.getElementById('cpassword');
var toggle=document.getElementById('toggle');
showHidePassword=() => {
    if(password.type=='password'){
        password.setAttribute('type','text');
        toggle.classList.remove('fa-eye');
        toggle.classList.add('fa-eye-slash');
    }else{
        toggle.classList.remove('fa-eye-slash');
        toggle.classList.add('fa-eye');
        password.setAttribute('type','password');
    }
};
toggle.addEventListener("click",showHidePassword);

