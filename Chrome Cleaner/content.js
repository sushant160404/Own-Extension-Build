// content.js

document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('myButton');
  if (button) {
    button.addEventListener('click', function() {
      console.log('Button clicked');
      // Perform actions here
    });
  } else {
    console.error('Button with id "myButton" not found.');
  }
});
