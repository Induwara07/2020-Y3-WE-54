var email = document.forms['form']['email'];


var email_error = document.getElementById('email_error');
var email_confirm = document.getElementById('inser_mass');




email.addEventListener('textInput', email_Verify);


function myvalidated(){
    
    if(email.value.length == 0){
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    
    if(email.value.length > 0){
        email.style.border = "1px solid red";
        email_confirm.style.display = "block";
        email.focus();
        email_error.disabled;
        return false;
        
        
    }
    
  
    
    
}

function email_Verify(){
    if(email.value.length >= 8){
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}