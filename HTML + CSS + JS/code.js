const contenedorGeneral = document.querySelector(".container");

function ventaCama(nombre, numeroModelo, precio, imagen){
    nombre = `<h3> Nombre: <b> ${nombre} </b> <br>`;
    numeroModelo = `<h4> <b> ${numeroModelo} </b> </h4>`;
    precio = `<h4> Coste: <b> ${precio}$ </b> </h4> <br>`;
    imagen = `<img src="img/${imagen}"> </img>`;
    return[nombre, numeroModelo, precio, imagen];
}

let modeloElegido = (number)=>{
  entregarModelo = document.querySelector(".inputOculto");
  entregarModelo.value = number;
}

const fragment = document.createDocumentFragment();

for(let i = 1; i <= 12; i++){
  const costePrecio = Math.round(Math.random()*100+10);
  const modelo = Math.round(Math.random()*1000000);
  if(i == 1){
    imagenSeleccionada = "cama-1.jpg";
  }
  else if(i == 2){
    imagenSeleccionada = "cama-2.jpg";
  }
  else if(i == 3){
    imagenSeleccionada = "cama-3.jpg";
  }
  else if(i == 4){
    imagenSeleccionada = "cama-4.jpg";
  }
  else if(i == 5){
    imagenSeleccionada = "cama-5.jpg";
  }
  else if(i == 6){
    imagenSeleccionada = "cama-6.jpg";
  }
  else if(i == 7){
    imagenSeleccionada = "cama-7.jpg";
  }
  else if(i == 8){
    imagenSeleccionada = "cama-8.jpg";
  }
  else if(i == 9){
    imagenSeleccionada = "cama-9.jpg";
  }
  else if(i == 10){
    imagenSeleccionada = "cama-10.jpg";
  }
  else if(i == 11){
    imagenSeleccionada = "cama-11.jpg";
  }
  else{
    imagenSeleccionada = "cama-12.jpg";
  }
  let cama = ventaCama(`Cama ${i}`, `Modelo: ${modelo}`, costePrecio, imagenSeleccionada);
  let camasVenta = document.createElement("DIV");
  camasVenta.addEventListener("click",()=>{modeloElegido(modelo)});
  camasVenta.tabIndex = i;
  camasVenta.classList.add("container-cama", `cama-${i}`);
  camasVenta.innerHTML = cama[0] + cama[1] + cama[2] + cama[3];
  fragment.appendChild(camasVenta);
}

contenedorGeneral.appendChild(fragment);


