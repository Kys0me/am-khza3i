document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById('loadingScreen');
    const canvas = document.getElementById('ComposeTarget');

    // Function to show loading screen
    function showLoadingScreen() {
        loadingScreen.style.display = 'flex';
    }

    // Function to hide loading screen
    function hideLoadingScreen() {
        loadingScreen.style.display = 'none';
    }

    // Show the loading screen initially
    showLoadingScreen();

    // Assuming skiko.js and composeApp.js trigger some kind of loading process,
    // you would need to modify these scripts to include callbacks or events
    // that indicate when loading is finished. Here is an example using events:

    // Add an event listener for a custom event that signifies loading is complete
    document.addEventListener('loadingComplete', hideLoadingScreen);

    // Simulating the loading completion for demonstration
    // Replace this with actual logic from skiko.js and composeApp.js
    setTimeout(() => {
        const event = new Event('loadingComplete');
        document.dispatchEvent(event);
    }, 3000); // Simulate 3 seconds loading time
});