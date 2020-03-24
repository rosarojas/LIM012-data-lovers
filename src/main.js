import {card, ordenar, filterData, estadistica} from './data.js';
import data from './data/atletas/atletas.js';
// Filtrar por disciplinas
// const fetchData = () => {
//   debugger;
//   let result;
//   fetch('./data/atletas/atletas.json')
//       .then(function(response) {
//         response.json();
//       }).then(function(myJson) {
//         result = myJson;
//       });
//   return result;
// };
// const hi = fetchData();
// console.log(hi);
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
// obtener id de los elementos mostrados
const obtenerUsuarios = () => {
  const elementosId = [];
  const resultado = [];
  const articles = document.getElementsByTagName('article');
  Array.from(articles).forEach((element) => {
    elementosId.push(element.getAttribute('id'));
  });
  elementosId.forEach((numero) => {
    atletas2016.forEach((atleta) => {
      if (atleta.id === parseInt(numero)) {
        resultado.push(atleta);
      }
    });
  });
  return resultado;
};
// funcionalidad boton ordenar
const selector = document.querySelector('#ordenador');
selector.addEventListener('change', (event) => {
  const usuariosMostrados = obtenerUsuarios();
  main.innerHTML = '';
  ordenar(usuariosMostrados, event.target.value);
  main.appendChild(card(usuariosMostrados));
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
  main.innerHTML = '';
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
  main.innerHTML = '';
  main.appendChild(card(resultado));
});
//  funcionalidad botoes medallas
const botonesMedalla = document.getElementsByName('medalla');
botonesMedalla.forEach((boton) => {
  boton.addEventListener('click', () => {
    const resultado = filterData(atletas2016, 'medalla', boton.value);
    main.innerHTML = '';
    main.appendChild(card(resultado));
  });
});
// const botonesMedalla = document.getElementsByName('medalla');
// botonesMedalla.forEach((boton) => {
//   boton.addEventListener('click', () => {
//     if (selectDisciplina.value ===
//       'Disciplinas' && selectPais.value === 'Paises') {
//       const resultado = filterData(atletas2016, 'medalla', boton.value);
//       main.innerHTML= '';
//       main.appendChild(card(resultado));
//     } else {
//       const usuariosMostrados = obtenerUsuarios();
//       const resultado = filterData(
//           usuariosMostrados, 'medalla', boton.value);
//       main.innerHTML= '';
//       main.appendChild(card(resultado));
//     }
//   });
// });

// console.log(card([
//   {
//     'name': 'Paola Bisiani',
//     'disciplinas': [
//       {
//         'disciplina': 'Archery Team',
//       }]}]));
const nombreAtletas = atletas2016.map((atleta) => (atleta.name));
const inputBuscar = document.getElementById('search');
const buscador = document.getElementById('searcher');
buscador.addEventListener('click', () => {
  const resultado = atletas2016.filter((atleta) =>
    (atleta.name.toLowerCase() == inputBuscar.value.toLowerCase()));
  main.innerHTML = '';
  main.appendChild(card(resultado));
});
// `[${resultado}]`
const divCoincidencias = document.getElementById('coincidencias');
inputBuscar.addEventListener('keyup', () => {
  let matches = nombreAtletas.filter((nombre) => {
    divCoincidencias.innerHTML = '';
    const regex = new RegExp(`^${inputBuscar.value}`, 'gi');
    return nombre.match(regex);
  });
  if (inputBuscar.value.length === 0) {
    matches = [];
    divCoincidencias.classList.add('ocultar');
  } else {
    divCoincidencias.classList.remove('ocultar');
    matches.forEach((match) => {
      const opcion = document.createElement('p');
      const textoOpcion = document.createTextNode(match);
      opcion.appendChild(textoOpcion);
      divCoincidencias.appendChild(opcion);
      divCoincidencias.classList.add('coincidenciasEstilo');
      opcion.addEventListener('click', () => {
        divCoincidencias.classList.add('ocultar');
        inputBuscar.value = match;
      });
    });
  }
});
// grafico de barras
const estadisticas = estadistica(atletas2016, 'Gold', listaPaises);
const ctx = document.getElementById('myChart').getContext('2d');
// eslint-disable-next-line no-unused-vars
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: estadisticas[0],
    datasets: [{
      label: '% of Gold medals',
      data: estadisticas[1],
      backgroundColor: [
        'red',
        'rgb(85, 85, 226)',
        'rgb(36, 228, 78)',
        'rgb(63, 63, 63)',
        'rgb(250, 233, 0)',
      ],
      borderColor: [
        'red',
        'rgb(85, 85, 226)',
        'rgb(36, 228, 78)',
        'rgb(63, 63, 63)',
        'rgb(250, 233, 0)',
      ],
      borderWidth: 1,
    }],
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
  },
});
