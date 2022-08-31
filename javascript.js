let variableStorage;
let personajes = [];
let docrender = document.querySelector(".tarjetas_personajes");

// if (localStorage.getItem("storagearray") == null) {
// } else {
//   variableStorage = localStorage.getItem(JSON.parse(variableStorage));
//   render(variableStorage);
//   console.log(variableStorage);
// }

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    personajes = data.results;
    console.log(personajes);
    render(personajes);
  });

let render = (personajesArr) => {
  docrender.innerHTML = "";
  for (let i in personajesArr) {
    let card = `<div class="col-6 px-3">
<div class="card mb-3 mx-auto" style="max-width: 540px">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${personajesArr[i].image}" class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${personajesArr[i].name}</h5>
        <p class="card-text">
        ${personajesArr[i].status}
        </p>
      </div>
    </div>
  </div>
</div>
</div>`;

    docrender.innerHTML += card;
  }
};
