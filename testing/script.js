// Fetch the JSON file containing the hyperlinks
fetch('/testing/links.json')
  .then(response => response.json())
  .then(links => {
    const linkList = document.getElementById('linkList');

    // Iterate through each link and create list items
    links.forEach((link, index) => {
      const listItem = document.createElement('li');
      const hyperlink = document.createElement('a');
      hyperlink.href = 'load.html';
      hyperlink.dataset.index = index;
      hyperlink.textContent = link.label;

      listItem.appendChild(hyperlink);
      linkList.appendChild(listItem);
    });

    // Handle link clicks
    linkList.addEventListener('click', event => {
      if (event.target.tagName === 'A') {
        const selectedIndex = event.target.dataset.index;

        // Store the selected link index in localStorage
        localStorage.setItem('selectedLinkIndex', selectedIndex);
      }
    });
  });
