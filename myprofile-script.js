function editPhone() {
   var newPhone = prompt("Enter your new phone number:");
   if (newPhone !== null) {
       document.getElementById("phone").textContent = newPhone;
   }
}

function editEmail() {
   var newEmail = prompt("Enter your new email address:");
   if (newEmail !== null) {
       document.getElementById("email").textContent = newEmail;
   }
}
