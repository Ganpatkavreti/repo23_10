// script.js
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const searchResults = document.getElementById("searchResults");
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

    searchButton.addEventListener("click", performSearch);
    searchInput.addEventListener("input", performSearch);

    function performSearch() {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = "";

        headings.forEach((heading) => {
            const headingText = heading.textContent.toLowerCase();
            if (headingText.includes(query)) {
                const listItem = document.createElement("li");
                listItem.textContent = heading.textContent;
                searchResults.appendChild(listItem);
            }
        });
    }
});
