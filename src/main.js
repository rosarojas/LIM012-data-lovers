
import {card, ordenar} from './data.js';
import data from './data/atletas/atletas.js';
// Filtrar por disciplinas
const arrDataAtletas = data.atletas;
const arrDisciplinas = arrDataAtletas.filter((atleta) =>
  (atleta.hasOwnProperty('disciplinas')));
const atletas2016 = arrDisciplinas.filter((listaAtletas) =>
  (listaAtletas.disciplinas[0].año === 2016));
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
const usuarios = topAtletas.map((indice) => atletas2016[indice]);
console.log(usuarios);
const main = document.getElementsByTagName('main')[0];
main.appendChild(card(usuarios));
// console.log(card([
//   {
//     'name': 'Paola Bisiani',
//     'disciplinas': [
//       {
//         'disciplina': 'Archery Team',
//       }]}]));

// Boton select
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
const paises = () => {
  const paisesOrdenados = listaPaises.sort();
  paisesOrdenados.forEach((pais) => {
    const opcion = document.createElement('option');
    opcion.textContent = pais;
    opcion.setAttribute('value', pais);
    selectPais.appendChild(opcion);
  });
};
paises();
const team = (pais) => {
  const resultado = atletas2016.filter((atleta) =>
    (atleta.team === pais));
  return resultado;
};
selectPais.addEventListener('change', (event) => {
  main.innerHTML= '';
  main.appendChild(card(team(event.target.value)));
});
// Lista de diciplinas en select
const listaDisciplinasArr = atletas2016.map((atleta) =>
  (atleta.disciplinas));
console.log(listaDisciplinasArr);

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

const disciplina = (deporte) => {
  const resultado = atletas2016.filter((atleta) =>
    (atleta.disciplinas.some((objeto) =>
      (objeto.disciplina === deporte))));
  return resultado;
};
selectDisciplina.addEventListener('change', (event) => {
  main.innerHTML= '';
  main.appendChild(card(disciplina(event.target.value)));
});
//  funcionalidad a botones medalla

const medallas = (medalla) => {
  const result = atletas2016.filter((atleta) =>
    (atleta.disciplinas.some((disciplina) =>
      (disciplina.medalla === medalla))));
  return result;
};

const botonesMedalla = document.getElementsByName('medallas');
console.log(botonesMedalla);
botonesMedalla.forEach((boton) => {
  boton.addEventListener('click', () => {
    main.innerHTML= '';
    main.appendChild(card(medallas(boton.value)));
  });
});
