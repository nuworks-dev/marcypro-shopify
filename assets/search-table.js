document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search_text");
    const searchButton = document.getElementById("search_submit");

    // Event listener for button click
    searchButton.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent form submission
        findString();
    });

    // Event listener for "Enter" key press
    searchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevent form submission
            findString();
        }
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
        if (window.find(str)) {
            const selection = window.getSelection();
            if (selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                const node = range.startContainer.parentElement; // Get the parent element of the found text
                
                // Scroll into view smoothly with an offset for the floating header
                setTimeout(() => {
                    const headerOffset = 300; // Adjust this based on your floating header height
                    const elementPosition = node.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }, 100);
            }
        } else {
            alert(`String '${str}' not found!`);
        }
    } else {
        alert("Your browser does not support search functionality.");
    }
}
