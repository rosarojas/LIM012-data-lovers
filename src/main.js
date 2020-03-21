
import {card, ordenar, filterData} from './data.js';
import data from './data/atletas/atletas.js';
// Filtrar por disciplinas
const arrDataAtletas = data.atletas;
const arrDisciplinas = arrDataAtletas.filter((atleta) =>
  (atleta.hasOwnProperty('disciplinas')));
const atletas2016 = arrDisciplinas.filter((listaAtletas) =>
  (listaAtletas.disciplinas[0].año === 2016));
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
const usuarios = topAtletas.map((indice) => atletas2016[indice]);
const main = document.getElementsByTagName('main')[0];
main.appendChild(card(usuarios));
// funcionalidad boton ordenar
const selector = document.querySelector('#ordenador');
selector.addEventListener('change', (event) => {
  main.innerHTML= '';
  ordenar(usuarios, event.target.value);
  main.appendChild(card(usuarios));
});
// Lista de países en select
const listaPaisesRepetidos = atletas2016.map((paises) => paises.team);
const listaPaises = listaPaisesRepetidos.filter((elemento, indice, array) =>
  array.indexOf(elemento) === indice);
const selectPais = document.querySelector('#paises');
const paisesSelect = () => {
  const paisesOrdenados = listaPaises.sort();
  paisesOrdenados.forEach((pais) => {
    const opcion = document.createElement('option');
    opcion.textContent = pais;
    opcion.setAttribute('value', pais);
    selectPais.appendChild(opcion);
  });
};
paisesSelect();
// funcionalidad select pais
selectPais.addEventListener('change', (event) => {
  const resultado = filterData(atletas2016, 'team', event.target.value);
  main.innerHTML= '';
  main.appendChild(card(resultado));
});
// Lista de diciplinas en select
const listaDisciplinasArr = atletas2016.map((atleta) =>
  (atleta.disciplinas));
const listaDisciplinasFuncion = () => {
  const result = [];
  listaDisciplinasArr.forEach((arr) => {
    arr.forEach((obj) => {
      result.push(obj.disciplina);
    });
  });
  return result;
};
const listaDisciplinasRepetidas = listaDisciplinasFuncion();
const listaDisciplinas = listaDisciplinasRepetidas.filter(
    (elemento, indice, array) =>
      (array.indexOf(elemento) === indice));
// funcionalidad select disciplinas
const selectDisciplina = document.querySelector('#disciplinas');
const disciplinas = () => {
  const disciplinasOrdenadas = listaDisciplinas.sort();
  disciplinasOrdenadas.forEach((disciplina) => {
    const opcion = document.createElement('option');
    opcion.textContent = disciplina;
    opcion.setAttribute('value', disciplina);
    selectDisciplina.appendChild(opcion);
  });
};
disciplinas();
selectDisciplina.addEventListener('change', (event) => {
  const resultado = filterData(atletas2016, 'disciplinas', event.target.value);
  main.innerHTML= '';
  main.appendChild(card(resultado));
});
// funcionalidad botoes medallas
const botonesMedalla = document.getElementsByName('medalla');
botonesMedalla.forEach((boton) => {
  boton.addEventListener('click', () => {
    const resultado = filterData(atletas2016, 'medalla', boton.value);
    main.innerHTML= '';
    main.appendChild(card(resultado));
  });
});
// console.log(card([
//   {
//     'name': 'Paola Bisiani',
//     'disciplinas': [
//       {
//         'disciplina': 'Archery Team',
//       }]}]));
