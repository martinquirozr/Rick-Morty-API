// Función para filtar por busqueda
// let variableStorage;
let buscar = (e) => {
  //evt.preventDefault();
  let name = document.querySelector("#inputBusqueda").value.toLowerCase();
  let filtrados = personajes.filter((per) => {
    //let restaurant_minus= restaurant.businessname.toLowerCase()
    return per.name.toLowerCase().includes(name);
  });
  // render(filtrados);
};

// Se llamana a todos los botones y se les agrega una acción

document.querySelector("#vivo").addEventListener("click", function () {
  buscarEstado("Alive");
});

document.querySelector("#muerto").addEventListener("click", function () {
  {
    buscarEstado("Dead");
  }
});

document.querySelector("#todos").addEventListener("click", function () {
  {
    render(personajes);
    console.log(personajes);
  }
});

document.getElementById("inputBusqueda").addEventListener("keyup", buscar);

// Función para buscar categoría

let buscarEstado = (estado) => {
  console.log(estado);
  let filtro = personajes.filter((per) => {
    return per.status == estado;
  });

  console.log(filtro);
  // render(filtro);
  storage(filtro);
};

// Función Storage

function storage(storagearray) {
  localStorage.removeItem("storagearray");
  if (localStorage.getItem("storagearray") == null) {
    variableStorage = storagearray;
  } else {
    variableStorage = localStorage.getItem(JSON.parse(variableStorage));
  }

  localStorage.setItem("storagearray", JSON.stringify(variableStorage));
  render(variableStorage);
}
