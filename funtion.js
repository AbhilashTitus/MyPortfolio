//---------------------------------------------------------------ABOUT AND EXPERIENCE SESSION-------------------------------------------------------------------
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
//---------------------------------------------------------------SIDE MENU-------------------------------------------------------------------

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

//---------------------------------------------------------------Email Validation-------------------------------------------------------------------


var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-Error");


function validateName() {
    var name = document.getElementById("contact-name").value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = 'valid';
    return true;
}
function validateEmail() {
    var email = document.getElementById("contact-email").value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Invalid'
        return false;
    }
    emailError.innerHTML = 'valid';
    return true;
}

function validateMessage() {
    var message = document.getElementById("contact-message").value;
    var required = 5;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + 'more characters required';
        return false;
    }
    messageError.innerHTML = 'valid';
    return true;

}

function validateForm() {
    if (!validateName() || !validateEmail() || !validateMessage()) {
        submitError.style.display='block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){
            submitError.style.display='none';
        }, 
        1500);
        return false;
    }
}


//---------------------------------------------------------------AJAS and Google Sheet Data Collection-------------------------------------------------------------------


$("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxt7gotGUuLwbbsHIeLVtNiN1BjRJJBXRYnnl1D0yYJq53ZjHwvHXKoENy3wCjoYHkc/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error: function (err) {
            alert("Something Error")

        }
    })
})