// alert("Not fully functional jst clicked on Register Button to be transfered to main page ");

const input = document.querySelector("#email");
const password = document.querySelector("#password");
const repPassword = document.querySelector("#r-password");
const registerBtn = document.querySelector("#submit");
const checkBox = document.querySelectorAll(".check-box");
const choice1 = document.querySelector("#choice1");
const choice2 = document.querySelector("#choice2");
const submit = document.querySelector("#submit");

// Ensure only one checkbox is selected at a time
checkBox.forEach(checkbox => {
   checkbox.addEventListener("change", function() {
      if (this.checked) {
         checkBox.forEach(otherCheckbox => {
            if (otherCheckbox !== this) {
               otherCheckbox.checked = false;  // Uncheck the other checkbox
            }
         });
      }
      updateInputType();
   });
});

// Update input type based on selected checkbox
function updateInputType() {
   if (choice1.checked) {
      input.type = "email";
      input.placeholder = "Email";
   } else if (choice2.checked) {
      input.type = "tel";
      input.placeholder = "+91        Phone Number";
   }else {
      input.disabled = true ;
      input.placeholder = "" ;
   }
}

submit.addEventListener("click" , function(){
   if(password===repPassword){
      windows.location.href = "http://127.0.0.1:5500/main-page.html";
   }else {
      alert("both passwords doesn't match");
   }
})


choice1.addEventListener("change", updateInputType);
choice2.addEventListener("change", updateInputType);
