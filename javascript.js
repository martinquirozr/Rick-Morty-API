let variableprueba = localStorage.getItem("storagearray1");
let variableStorage;
let personajes = [];
let docrender = document.querySelector(".tarjetas_personajes");

// Parte de prueba
fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    personajes = data.results;
    console.log(personajes);
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


        <!-- Termina Modal -->
        <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal${personajesArr[i].id}"
      >
        Ver +
      </button>


        <div
      class="modal fade"
      id="exampleModal${personajesArr[i].id}"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${personajesArr[i].name}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
          <p > Creación : 
        ${personajesArr[i].created}
        </p>
        <p > Origen : 
        ${personajesArr[i].origin.name}
        </p>
        <p > Ubicación : 
        ${personajesArr[i].location.name}
        </p>
        <p > Género : 
        ${personajesArr[i].gender}
        </p>
        <p > Tipo : 
        ${personajesArr[i].species}
        </p>
          
        
          
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>

    <!-- Termina Modal -->


      </div>
    </div>
  </div>
</div>
</div>`;

    docrender.innerHTML += card;
  }
};

// Parte RENDER INICIO

if (
  localStorage.getItem("storagearray") !== null ||
  localStorage.getItem("storagearray") !== "null"
) {
  console.log("Si hay unjson");
  let variableStorage2 = JSON.parse(variableprueba);

  // let variableStorage2 = JSON.parse(localStorage.getItem("storagearray1"));

  // console.log(variableStorage);

  personajesArr = variableStorage2;
  docrender.innerHTML = "";

  render(personajesArr);
}
// Termina RENDER INICIO
