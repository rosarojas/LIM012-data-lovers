import {card, ordenar, ordenInverso} from './data.js';
import data from './data/atletas/atletas.js';
const arrDataAtletas = data.atletas;
const arrDisciplinas = arrDataAtletas.filter((atleta) => {
  atleta.hasOwnProperty('disciplinas');
});
const atletas2016 = arrDisciplinas.filter((listaAtletas) => {
  listaAtletas.disciplinas[0].año === 2016;
});
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
// Boton select
const selector = document.querySelector('#ordenador');
document.querySelector('#main');
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
  const listaPaisesRepetidos = arrDisciplinas.map((listaAtletas) => listaAtletas.team);
  const listaPaises = listaPaisesRepetidos.filter((elemento, indiceActual, array) => array.indexOf(elemento) === indiceActual);
  const menuPaises = listaPaises.sort();
