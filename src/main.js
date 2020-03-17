import {card, ordenar, ordenInverso} from './data.js';
import data from './data/atletas/atletas.js';
const arrDataAtletas = data.atletas;
const arrDisciplinas = arrDataAtletas.filter((atleta) => atleta.hasOwnProperty('disciplinas'));
const atletas2016 = arrDisciplinas.filter((listaAtletas) => listaAtletas.disciplinas[0].año === 2016);
const topAtletas = function top() {
  const topA = [];
  atletas2016.forEach((perfil, index) => {
    let gold = 0;
    perfil.disciplinas.forEach((disciplina) => {
      if (disciplina.medalla === 'Gold') {
        gold++;
      }
    });
    if (gold === 2) {
      topA.push(index);
    }
  });
  return topA;
}();
const usuarios = topAtletas.map((indice) => arrDataAtletas[indice]);
card(usuarios);
const selector = document.querySelector('.ordenAlfabetico');
const resultado = document.querySelector('#main');
selector.addEventListener('change', (event) => {
  if ((event.target.value === 'ordenAZ')) {
    ordenar(usuarios);
    card(usuarios);
  } else if ((event.target.value === 'ordenZA')) {
    ordenInverso(usuarios);
    card(usuarios);
  }
});
// Lista de países
// function paises() {
// const listaPaisesRepetidos = arrDisciplinas.map((listaAtletas) => listaAtletas.team);
// const listaPaises = listaPaisesRepetidos.filter((elemento, indiceActual, array) => array.indexOf(elemento) === indiceActual);
// const datos = listaPaises.sort();
// addOptions("paises", datos);
// }
// function addOptions(domElement, datos) {
//     var selector = document.getElementsByName(domElement)[0];
//     //Recorremos el array.
//     for (paises in datos) {
//         var opcion = document.createElement("option");
//         opcion.text = datos[paises];
//         selector.add(opcion);
//     }
// }
// window.addEventListener("load", function() {
//     paises(event);
// }, false);
