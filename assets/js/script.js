
// Add an event listener to an element with the id 'share-button'
document.getElementById('share-button').addEventListener('click', function() {
    // Get the current URL of the page
    var urlToCopy = window.location.href;

    // Create a new input element dynamically
    var inputElement = document.createElement('input');

    // Set the value of the input element to the current URL
    inputElement.value = urlToCopy;

    // Append the input element to the body of the document
    document.body.appendChild(inputElement);

    // Select the content inside the input element
    inputElement.select();

    // Execute the 'copy' command to copy the selected content to the clipboard
    document.execCommand('copy');

    // Remove the temporary input element from the body
    document.body.removeChild(inputElement);

    // Display an alert to notify the user that the URL has been copied
    alert('URL copied to clipboard: ' + urlToCopy);
});
