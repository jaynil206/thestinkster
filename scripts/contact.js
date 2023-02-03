// let us write an event listener so that our submit button works
const submitButton = document.querySelector('button');
submitButton.addEventListener('click', function() {
    const textarea = document.querySelector('textarea');
    // Alert the user that there message has been sent
    if (textarea.value.length == 0) {
        alert("You didn't enter anything for us to read, so we will be blocking you. Please try again :)")
    } else {
        alert('Your message has been passed onto the team. Thank you.');
    }
    textarea.value = "";  // Clear the textarea after the comment is submitted
});
