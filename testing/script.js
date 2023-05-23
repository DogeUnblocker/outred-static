// Fetch the JSON file containing the hyperlinks
fetch('/testing/links.json')
  .then(response => response.json())
  .then(links => {
    const linkList = document.getElementById('linkList');

    // Iterate through each link and create list items
    links.forEach(link => {
      const listItem = document.createElement('li');
      const hyperlink = document.createElement('a');
      hyperlink.href = 'load.html';
      hyperlink.target = 'contentFrame';
      hyperlink.textContent = link.label;

      listItem.appendChild(hyperlink);
      linkList.appendChild(listItem);
    });
  });
