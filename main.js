function checkForm() {
 name = document.getElementById("name").value;
 email = document.getElementById("email").value;
 comment = document.getElementById("comment").value;

 if (name == "")
 {
 hideAllErrors();
 document.getElementById("nameError").style.display = "inline";
 document.getElementById("name").select();
 document.getElementById("name").focus();
 return false;
 }
 else if (email == "")
 {
 hideAllErrors();
 document.getElementById("emailError").style.display = "inline";
 document.getElementById("email").select();
 document.getElementById("email").focus();
 return false;
 }
 else if (comment == "")
 {
 hideAllErrors();
 document.getElementById("commentError").style.display = "inline";
 document.getElementById("comment").select();
 document.getElementById("comment").focus();
 return false;
 }
 if (!checkEmail(email))
 {
 alert('Email address is invalid');
 return false;
 }
 return true;
}

function hideAllErrors() {
 document.getElementById("nameError").style.display = "none";
 document.getElementById("emailError").style.display = "none";
 document.getElementById("commentError").style.display = "none";
}

function checkEmail(inputvalue) {
 var pattern = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
 return pattern.test(inputvalue);
}
