import {example} from './data.js';
  // import data from './data/injuries/injuries.js';
  // import data from './data/lol/lol.js';
  // import data from './data/patient/patient.js';
import data from './data/atletas/atletas.js';
  // import data from './data/rickandmorty/rickandmorty.js';
  // import data from './data/steam/steam.js';
  // import data from './data/worldbank/worldbank.js';


const array = data.atletas;
const filtrarDisciplina = array.filter(filtrar => filtrar.hasOwnProperty("disciplinas"));

//Filtra a atletas del año 2016
const olimpiada2016 = filtrarDisciplina.filter(olimpiada => olimpiada.disciplinas[0].año === 2016)
//Recorre a arrar de atletas del 2016
olimpiada2016.forEach((atletas, i) => {
 let medallasOro = 0;

atletas.disciplinas.filter((medallas) => {
  if (medallas.medalla === "Gold") {
    medallasOro++;
  }
 });

 if (medallasOro === 2) {

  const nombre = atletas.name;
  const deporte = atletas.sport;
  const indice = i;
  medallasOro;
  const parrafo = document.createElement("p");
  const contenido = document.createTextNode(nombre + " " + deporte + " " + medallasOro);
  parrafo.appendChild(contenido);
  document.body.appendChild(parrafo);
 }}
);




//Ordena de  A - Z
// const ordenar = (olimpiada2016, name) => olimpiada2016.sort((previo, siguiente) => {
//   if (previo.name > siguiente.name) {
//     return 1;
//   } else if (previo.name < siguiente.name) {
//     return -1;
//   } else {
//     return 0;
//   }
// })
// console.log(ordenar(olimpiada2016, name));

//Ordena de Z - A
const ordenInverso = (olimpiada2016, name) => olimpiada2016.sort((previo, siguiente) => {
  if (previo.name > siguiente.name) {
    return -1;
  } else if (previo.name < siguiente.name) {
    return 1;
  } else {
    return 0;
  }
})
console.log(ordenInverso(olimpiada2016, name));

//document.getElementById("datos").innerHTML += arrayOlimpiada + " ";
