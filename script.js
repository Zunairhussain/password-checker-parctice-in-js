function checkPasswordStrength() {
    var password = document.getElementById("passwordInput").value;
    var strengthMeter = document.getElementById("result");
    var strength = 0;

    // Check length
    if (password.length >= 8) {
        strength += 1;
    }

    // Check special characters
    var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (specialChars.test(password)) {
        strength += 1;
    }

    // Check uppercase letters
    var uppercaseChars = /[A-Z]+/;
    if (uppercaseChars.test(password)) {
        strength += 1;
    }

    // Check lowercase letters
    var lowercaseChars = /[a-z]+/;
    if (lowercaseChars.test(password)) {
        strength += 1;
    }

    // Check numbers
    var numbers = /[0-9]+/;
    if (numbers.test(password)) {
        strength += 1;
    }

    // Display the strength 
    if (strength === 0) {
        strengthMeter.textContent = "Weak";
        strengthMeter.style.color = "red";
    } else if (strength <= 2) {
        strengthMeter.textContent = "Medium";
        strengthMeter.style.color = "orange";
    } else {
        strengthMeter.textContent = "Strong";
        strengthMeter.style.color = "green";
    }
}



var password = [ "test","testpassword2334","testPassword@1234","Password@1131313"]
//output array
var newpasswords = [false,false,true,true]
function  () {
    
}
