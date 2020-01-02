const input = document.getElementById("input-email");
const invalidText = document.querySelector('.invalid-text');
const iconError = document.querySelector('.icon-error');

// Check if input email is valid
function validateEmail(e) {

    if (input.value == "") {
        alert("Email Address can't be empty!");
    } else {
        if (input.validity.typeMismatch) {
            input.style.border = "2px solid hsl(0, 93%, 68%)";
            invalidText.style.display = "block";
            iconError.style.display = "block";
        } else {
            input.style.border = "1px solid hsl(0, 36%, 70%)";
            invalidText.style.display = "none";
            iconError.style.display = "none";
            input.value = "";
        }
    }
}
// Handle enter key press
input.addEventListener('keydown', (e) => {
    console.log(e.keyCode);
    if (e.keyCode == 13) {
        validateEmail();
    }
});
