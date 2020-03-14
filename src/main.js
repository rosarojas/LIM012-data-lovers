//  import { example } from './data.js';
import { card } from './data.js';
// import data from './data/injuries/injuries.js';
// import data from './data/lol/lol.js';
// import data from './data/patient/patient.js';
import { ordenar } from './data.js';
import data from './data/atletas/atletas.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/steam/steam.js';
// import data from './data/worldbank/worldbank.js';
const arrDataAtletas = data.atletas;
const arrDisciplinas = arrDataAtletas.filter(atleta => atleta.hasOwnProperty('disciplinas'));
const atletas2016 = arrDisciplinas.filter(listaAtletas => listaAtletas.disciplinas[0].año === 2016);
console.log(atletas2016);

const topAtletas = function () {
  let topA = [];
  atletas2016.forEach((perfil, index) => {
    let gold = 0;
    perfil.disciplinas.map((disciplina) => {
      if (disciplina.medalla === 'Gold') {
        gold++;
      }
    })
    if (gold === 2) {
      topA.push(index);
    }
  })
  return topA;
}();
console.log(topAtletas);

const usuarios = topAtletas.map(indice => arrDataAtletas[indice]);
//Funcion para ordenar de A - Z
ordenar(usuarios, name);
//Funcion para ordenar Z - A
// ordenInverso(usuarios, name);
// console.log(ordenInverso);
//Funcion mostrar data
card(usuarios);
