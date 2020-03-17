import {card, ordenar} from './data.js';
import data from './data/atletas/atletas.js';
const arrDataAtletas = data.atletas;
const arrDisciplinas = arrDataAtletas.filter((atleta) =>
  (atleta.hasOwnProperty('disciplinas')));
const atletas2016 = arrDisciplinas.filter((listaAtletas) =>
  (listaAtletas.disciplinas[0].año === 2016));
console.log(atletas2016);
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
console.log(topAtletas);

const usuarios = topAtletas.map((indice) => arrDataAtletas[indice]);
console.log(usuarios);
// Funcion para ordenar de A - Z
const main = document.getElementsByTagName('main')[0];
const ordenador = document.getElementById('ordenador');
ordenador.addEventListener('click', () => {
  ordenar(usuarios);
  main.innerHTML = card(usuarios);
});
// Funcion para ordenar Z - A
// ordenInverso(usuarios, name);
// console.log(ordenInverso);
// Funcion mostrar data;
main.innerHTML = card(usuarios);
const deportesTotal = atletas2016.map((atleta) =>
  (atleta.disciplinas[0].disciplina));
console.log(deportesTotal);
const deportes = deportesTotal.filter((value, index, self) =>
  (self.indexOf(value) === index));
console.log(deportes);
