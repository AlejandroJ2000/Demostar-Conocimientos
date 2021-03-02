const contenedorGeneral = document.querySelector(".container");

function ventaCama(nombre, numeroModelo, precio){
    nombre = `<h3> Nombre: <b> ${nombre} </b> <br>`;
    numeroModelo = `<h4> <b> ${numeroModelo} </b> </h4>`;
    precio = `<h4> Coste: <b> ${precio}$ </b> </h4> <br>`;
    imagen = `<img src="cama.png"> </img>`;
    return[nombre, numeroModelo, precio, imagen];
}

const fragment = document.createDocumentFragment();

for(i = 1; i < 10; i++){
  obtenerPrecio = Math.random()*100;
  costePrecio = Math.round(obtenerPrecio);
  obtenerModelo = Math.random()*1000000;
  modelo = Math.round(obtenerModelo);
  let cama = ventaCama(`Cama ${i}`, `Modelo: ${modelo}`, costePrecio);
  let camasVenta = document.createElement("DIV");
  camasVenta.classList.add("container-cama");
  camasVenta.classList.add(`cama-${i}`);
  camasVenta.innerHTML = cama[0] + cama[1] + cama[2] + cama[3];
  fragment.appendChild(camasVenta);
}

contenedorGeneral.appendChild(fragment)
