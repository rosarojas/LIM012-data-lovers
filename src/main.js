import {cartaHTML, ordenar, filtroData, estadistica} from './data.js';
import data from './data/atletas/atletas.js';
const arrDataAtletas = data.atletas;
// verfica si tiene key disciplinas
const arrDisciplinas = arrDataAtletas.filter((atleta) =>
  (atleta.hasOwnProperty('disciplinas')));
// filtrar atletas del año 2016
const atletas2016 = arrDisciplinas.filter((listaAtletas) =>
  (listaAtletas.disciplinas[0].año === 2016));
const topAtletas = (() => {
  const topA = [];
  atletas2016.forEach((perfil, index) => {
    // contador medallas de oro
    let gold = 0;
    // recorre array de disciplinas
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
})();
// array de atletas top de oro
const usuarios = topAtletas.map((indice) => atletas2016[indice]);
const main = document.getElementsByTagName('main')[0];
// mostrando la data en html
main.appendChild(cartaHTML(usuarios));
// obtener id de los elementos mostrados
const obtenerUsuarios = () => {
  // array de id
  const elementosId = [];
  // array de numero (valor) de id
  const resultado = [];
  const articles = document.getElementsByTagName('article');
  // crea array de articles
  Array.from(articles).forEach((element) => {
    // obtener valor del atributo
    elementosId.push(element.getAttribute('id'));
  });
  // recorre array de numeros de id
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
  // Id de los atletas
  const usuariosMostrados = obtenerUsuarios();
  main.innerHTML = '';
  // ordena según opcion que elija usuario
  ordenar(usuariosMostrados, event.target.value);
  main.appendChild(cartaHTML(usuariosMostrados));
});
// Lista de países en select
const listaPaisesRepetidos = atletas2016.map((paises) => paises.team);
// lista de países sin repetir
const listaPaises = listaPaisesRepetidos.filter((elemento, indice, array) =>
  // indice de elemento
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
  const resultado = filtroData(atletas2016, 'team', event.target.value);
  main.innerHTML = '';
  main.appendChild(cartaHTML(resultado));
});
// Lista de diciplinas
const listaDisciplinasArr = atletas2016.map((atleta) =>
  (atleta.disciplinas));
const listaDisciplinasFuncion = () => {
  const result = [];
  listaDisciplinasArr.forEach((arr) => {
    arr.forEach((obj) => {
      // en array interno, key disciplina
      result.push(obj.disciplina);
    });
  });
  return result;
};
// lista disciplinas en select
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
// funcionalidad select disciplinas
selectDisciplina.addEventListener('change', (event) => {
  const resultado = filtroData(atletas2016, 'disciplinas', event.target.value);
  main.innerHTML = '';
  main.appendChild(cartaHTML(resultado));
});
//  funcionalidad botones medallas
const botonesMedalla = document.getElementsByName('medallas');
botonesMedalla.forEach((boton) => {
  boton.addEventListener('click', () => {
    const resultado = filtroData(atletas2016, 'medalla', boton.value);
    main.innerHTML = '';
    main.appendChild(cartaHTML(resultado));
  });
});
// funcionalidad del buscador
const nombreAtletas = atletas2016.map((atleta) => (atleta.name));
const inputBuscar = document.getElementById('search');
const buscador = document.getElementById('searcher');
buscador.addEventListener('click', () => {
  const resultado = atletas2016.filter((atleta) =>
    // array en minuscula
    (atleta.name.toLowerCase() == inputBuscar.value.toLowerCase()));
  main.innerHTML = '';
  main.appendChild(cartaHTML(resultado));
});
// coincidencias en buscador
const divCoincidencias = document.getElementById('coincidencias');
inputBuscar.addEventListener('keyup', () => {
  let matches = nombreAtletas.filter((nombre) => {
    divCoincidencias.innerHTML = '';
    // encontrar coincidencias(string, global, insensitive)
    const regex = new RegExp(`^${inputBuscar.value}`, 'gi');
    // busca coincidencia en string y devuelve array con info
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
      opcion.addEventListener('click', () => {
        divCoincidencias.classList.add('ocultar');
        inputBuscar.value = match;
      });
    });
  }
});
// funcion de estadistica
const estadisticas = estadistica(atletas2016, 'Gold', listaPaises);
const ctx = document.getElementById('myChart').getContext('2d');
// grafico de barras
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

const boton = document.querySelector('#botonMenu');
const mostrarMenu = () => {
  const menu = document.querySelector('#contenidoMenu');
  if (menu.classList.contains('ocultar-menu')) {
    menu.classList.remove('ocultar-menu');
    menu.classList.add('mostrar-menu');
  } else {
    menu.classList.remove('mostrar-menu');
    menu.classList.add('ocultar-menu');
  }
};
// mostrar y ocultar gráfico de barras
boton.addEventListener('click', mostrarMenu);
const botongrafico = document.getElementById('botongrafico');
const contenedorGrafico = document.getElementById('contenedorgrafico');
botongrafico.addEventListener('click', () => {
  contenedorGrafico.classList.remove('graficoclass');
  contenedorGrafico.classList.add('graficostyle');
});
const cerrargrafico = document.getElementById('cerrargrafico');
cerrargrafico.addEventListener('click', () => {
  contenedorGrafico.classList.add('graficoclass');
  contenedorGrafico.classList.remove('graficostyle');
});
// mostrar y ocultar boton
const contenidoMenu = document.getElementById('contenidoMenu');
const botonMenu = document.getElementById('botonMenu');
botonMenu.addEventListener('click', () => {
  contenidoMenu.classList.toggle('ocultarMenu');
});
const cerrarMenu = document.getElementById('cerrarMenu');
cerrarMenu.addEventListener('click', () => {
  contenidoMenu.classList.add('ocultarMenu');
});
