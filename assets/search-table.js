document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("search_submit").addEventListener("click", function (e) {
        e.preventDefault(); // Prevent form submission
        findString();
    });
});

function findString() {
    const searchInput = document.getElementById("search_text");
    const str = searchInput.value.trim(); // Trim whitespace

    if (!str) {
        alert("Please enter a search term.");
        return;
    }

    if (window.find) {
        // Modern browsers support `window.find`
        if (!window.find(str)) {
            alert(`String '${str}' not found!`);
        }
    } else {
        alert("Your browser does not support search functionality.");
    }
}
