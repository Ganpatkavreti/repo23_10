// script.js
document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Clear previous search results
  
    // Define your website data with page names and their content
    const websiteData = {
      'about': '<p>This is the content of page 1. <a href="/about">this is about</a></p>',
      'tips': '<p>This is the content of page 2. <a href="/tips">Page 2 Anchor</a></p>',
      'images': '<p>This is the content of page 3. <a href="/images">Page 3 Anchor</a></p>',
    };
  
    const results = [];
  
    // Iterate through the websiteData object and search for the query in the content
    for (const page in websiteData) {
      if (websiteData.hasOwnProperty(page)) {
        const content = websiteData[page];
        const anchorTags = content.match(/<a [^>]*>.*?<\/a>/g);
  
        if (anchorTags) {
          anchorTags.forEach(function(tag) {
            if (tag.toLowerCase().includes(query)) {
              results.push({ page, tag });
            }
          });
        }
      }
    }
  
    displaySearchResults(results);
  });
  
  function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');
  
    if (results.length === 0) {
      searchResults.innerHTML = 'No results found.';
    } else {
      results.forEach(function(result) {
        const link = document.createElement('a');
        link.href = result.page;
        link.innerHTML = result.tag;
        searchResults.appendChild(link);
      });
    }
  }
  