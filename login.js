
const submit = document.querySelector("#submit") ;


function perform (){

      const email = document.querySelector("#email").value ;
const password = document.querySelector("#password").value ;

      if(email.length<5){
            alert("Incorrect email") ;
         }
         else if(password.length<5){
            alert("Password wrong") ;
         } 
         else{
            window.location.href='http://127.0.0.1:5500/main-page.html';
         } ;
}

submit.addEventListener("click" , perform) ;
 



