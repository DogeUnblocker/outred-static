fetch('/js/json/games.json')
const gamename = document.getElementById("g-name");
gamename.innerHTML = `<h1 style="font-weight: normal">${item.title}</h1>`;