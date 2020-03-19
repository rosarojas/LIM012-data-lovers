import {card, ordenar} from './data.js';
import data from './data/atletas/atletas.js';
const arrDataAtletas = data.atletas;
const arrDisciplinas = arrDataAtletas.filter((atleta) =>
  (atleta.hasOwnProperty('disciplinas')));
const atletas2016 = arrDisciplinas.filter((listaAtletas) =>
  (listaAtletas.disciplinas[0].año === 2016));
console.log(atletas2016);
const topAtletas = function top() {
  // debugger;
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
// console.log(topAtletas);

const usuarios = topAtletas.map((indice) => arrDataAtletas[indice]);
console.log(usuarios);

const main = document.getElementsByTagName('main')[0];
main.appendChild(card(usuarios));
// Funcion para ordenar de A - Z
  ordenar(usuarios);
  main.innerHTML= '';
  main.appendChild(card(usuarios));


console.log(card([
  {
    'name': 'Paola Bisiani',
    'disciplinas': [
      {
        'disciplina': 'Archery Team',
      }]}]));


