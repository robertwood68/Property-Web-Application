'use strict';
/**
 * Script used for toggling visibility of passwords on signup page
 */
var togglePassword = document.querySelector("#togglePassword"); // image of eye in first password field
var password = document.querySelector("#password"); // first password field

// changes the type of the input from password to text and vice versa when clicked, also changes the eye icon accordingly
togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye");
});

var togglePass = document.querySelector("#togglePass"); // image of eye in the second password field
var pass = document.querySelector("#passwordConfirm"); // second password field

// performs the same actions as above but on the elements of the second password input rather than the first
togglePass.addEventListener("click", function () {
    // toggle the type attribute
    const type = pass.getAttribute("type") === "password" ? "text" : "password";
    pass.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye");
});