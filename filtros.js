// Función para filtar por busqueda
// let variableStorage;
let buscar = (e) => {
  //evt.preventDefault();
  let name = document.querySelector("#inputBusqueda").value.toLowerCase();
  let filtrados = personajes.filter((per) => {
    //let restaurant_minus= restaurant.businessname.toLowerCase()
    return per.name.toLowerCase().includes(name);
  });
  storage(filtrados);
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
document.querySelector("#desconocido").addEventListener("click", function () {
  {
    buscarEstado("unknown");
  }
});

document.querySelector("#todos").addEventListener("click", function () {
  {
    storage(personajes);
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

// // Función que sirve

// function storage(storagevariable) {
//   if (localStorage.getItem("storagearray") == null) {
//     variableStorage = storagevariable;
//     console.log("No hay storage");
//   } else {
//     // variableStorage = localStorage.getItem(JSON.parse(storagearray));
//   }

//   localStorage.setItem("storagearray1", JSON.stringify(variableStorage));
//   render(variableStorage);
// }

// Función que no sirve
function storage(storagevariable) {
  variableStorage = storagevariable;
  localStorage.setItem("storagearray1", JSON.stringify(variableStorage));

  // if (
  //   localStorage.getItem("storagearray1") == "null" ||
  //   localStorage.getItem("storagearray1") == null
  // ) {
  //   console.log("No hay storage guardado");
  //   variableStorage = storagevariable;
  //   localStorage.setItem("storagearray1", JSON.stringify(variableStorage));

  // } else {
  //   console.log("Si hay storage guardado");
  //   variableStorage = JSON.parse(localStorage.getItem("storagearray1"));

  //   // variableStorage = localStorage.getItem(JSON.parse(variableStorage));

  //   localStorage.setItem("storagearray1", JSON.stringify(variableStorage));
  // }

  render(variableStorage);
}
