import {card, ordenar, ordenInverso} from './data.js';
import data from './data/atletas/atletas.js';
// Filtrar por disciplinas
const arrDataAtletas = data.atletas;
const arrDisciplinas = arrDataAtletas.filter((atleta) => atleta.hasOwnProperty('disciplinas'));
const atletas2016 = arrDisciplinas.filter((listaAtletas) => listaAtletas.disciplinas[0].año === 2016);
// Funcion para top atletas de oro
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
// Top 12 de atletas de oro
const usuarios = topAtletas.map((indice) => arrDataAtletas[indice]);
// Funcion para mostrar datos
card(usuarios);
// Boton select
const selector = document.querySelector('#ordenador');
selector.addEventListener('change', (event) => {
  if ((event.target.value === 'ordenAZ')) {
    ordenar(usuarios);
    card(usuarios);
  } else if ((event.target.value === 'ordenZA')) {
    ordenInverso(usuarios);
    card(usuarios);
  }
});
// Lista de países en select
const listaPaisesRepetidos = atletas2016.map((paises) => paises.team);
const listaPaises = listaPaisesRepetidos.filter((elemento, indice, array) =>
  array.indexOf(elemento) === indice);
const paises = () => {
  const selectPais = document.querySelector('#paises');
  const paisesOrdenados = listaPaises.sort();
  paisesOrdenados.forEach((pais) => {
    const opcion = document.createElement('option');
    opcion.textContent = pais;
    selectPais.appendChild(opcion);
  })};
paises();