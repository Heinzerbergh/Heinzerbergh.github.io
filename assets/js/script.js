document.getElementById('share-button').addEventListener('click', function() {
    // Get the current URL of the page
    var urlToCopy = window.location.href;

    // Create a new input element dynamically
    var inputElement = document.createElement('input');
    inputElement.value = urlToCopy;
    document.body.appendChild(inputElement);

    // Select the content inside the input element
    inputElement.select();

    try {
        // Use the Clipboard API to copy the URL to the clipboard
        document.execCommand('copy');
        alert('URL copied to clipboard: ' + urlToCopy);
    } catch (err) {
        console.error('Unable to copy URL to clipboard', err);
    } finally {
        // Remove the temporary input element from the body
        document.body.removeChild(inputElement);
    }
});
