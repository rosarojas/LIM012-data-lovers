// función cartaHTML para mostrar
const cartaHTML = (arr) => {
  const mainDiv = document.createElement('div');
  arr.forEach((element, index) => {
    // Se obtiene llaves de objeto
    const infokeys = Object.keys(element);
    const article = document.createElement('article');
    article.setAttribute('id', element.id);
    const img = document.createElement('img');
    img.setAttribute('src', 'imagenes/foto.png');
    img.setAttribute('alt', 'foto');
    const vistaPrevia = document.createElement('div');
    const nombre = document.createElement('p');
    const textoNombre = document.createTextNode(element.name);
    nombre.appendChild(textoNombre);
    const disciplina = document.createElement('p');
    const textoDisciplina = document.createTextNode(
        // se ingresa a array interno disciplinas
        element.disciplinas[0].disciplina);
    disciplina.appendChild(textoDisciplina);
    vistaPrevia.appendChild(nombre);
    vistaPrevia.appendChild(disciplina);
    const verMas = document.createElement('button');
    verMas.setAttribute('class', 'verMas');
    const textoVermas = document.createTextNode('+');
    verMas.appendChild(textoVermas);
    const divInfo = document.createElement('div');
    // se le da clase e id a divInfo
    divInfo.id = `divInfo${index}`;
    divInfo.className = 'ocultar';
    const verMenos = document.createElement('button');
    verMenos.setAttribute('class', 'ocultar');
    verMenos.setAttribute('id', 'verMenos');
    const textoVerMenos = document.createTextNode('-');
    verMenos.appendChild(textoVerMenos);
    // se recorre el array de llaves
    for (let i = 0; i < infokeys.length; i++) {
      // se obtiene valores de las llaves
      const infoValues = element[infokeys[i]];
      // verificar si hay un array en infoValues
      if (Array.isArray(infoValues)) {
        infoValues.forEach((element) => {
          // se obtiene llaves de array disciplinas
          const elementKeys = Object.keys(element);
          for (let i = 0; i < elementKeys.length; i++) {
            const datos = document.createElement('p');
            // se concatena llaves y valores
            const textoDatos = document.createTextNode(
                `${elementKeys[i]}: ${element[elementKeys[i]]}`);
            datos.appendChild(textoDatos);
            divInfo.appendChild(datos);
          }
        });
      } else {
        const datos = document.createElement('p');
        const textoDatos = document.createTextNode(
            `${infokeys[i]}: ${infoValues}`);
        datos.appendChild(textoDatos);
        divInfo.appendChild(datos);
      }
    }
    article.appendChild(img);
    article.appendChild(vistaPrevia);
    article.appendChild(verMas);
    article.appendChild(divInfo);
    article.appendChild(verMenos);
    mainDiv.appendChild(article);
    verMas.addEventListener('click', () => {
      divInfo.classList.remove('ocultar');
      vistaPrevia.classList.add('ocultar');
      verMas.classList.add('ocultar');
      verMenos.classList.remove('ocultar');
    },
    );
    verMenos.addEventListener('click', () => {
      divInfo.classList.add('ocultar');
      vistaPrevia.classList.remove('ocultar');
      verMas.classList.remove('ocultar');
      verMenos.classList.add('ocultar');
    },
    );
  });
  return mainDiv;
};
// funcion para ordenar
const ordenar = (data, orden) => {
  const resultado = data.sort((previo, siguiente) => {
    // ordenar por key nombre
    if (previo.name > siguiente.name) {
      return 1;
    } else if (previo.name < siguiente.name) {
      return -1;
    } else {
      return 0;
    }
  });
  if (orden === 'A-Z') {
    return resultado;
  } else if (orden === 'Z-A') {
    return resultado.reverse();
  };
};
// funcion para filtrar
const filtroData = (data, filtro, value) => {
  // filtrar por disciplinas
  if (filtro === 'disciplinas') {
    const resultado = data.filter((atleta) =>
      // verifica si elemento cumple con condicion
      (atleta[filtro].some((objeto) =>
        (objeto.disciplina === value))));
    return resultado;
    // filtrar por país
  } else if (filtro === 'team') {
    const resultado = data.filter((atleta) =>
      (atleta[filtro] === value));
    return resultado;
    // filtrar por medallas
  } else if (filtro === 'medalla') {
    const result = data.filter((atleta) =>
      (atleta.disciplinas.some((disciplina) =>
        (disciplina[filtro] === value))));
    return result;
  };
};
// función de estadística solo para medallas
const estadistica = (data, medal, paisesTotal) => {
  const grupoAtletas = filtroData(data, 'medalla', medal);
  const result= [];
  const arr = [];
  let totalSum = 0;
  // recorriendo cada país
  paisesTotal.forEach((pais) => {
    let counter = 0;
    grupoAtletas.forEach((atleta) => {
      // país del atleta y país del array
      if (atleta.team == pais) {
        atleta.disciplinas.forEach((disciplina) => {
          if (disciplina.medalla === medal) {
            counter++;
            totalSum++;
          }
        });
      }
    });
    arr.push([pais, counter]);
  });
  const atletas = arr.filter((pais) => (pais[1] > 0));
  atletas.sort((a, b) => b[1] - a[1]);
  const top5 = atletas.splice(0, 5);
  const porcentajes = top5.map((dato) => dato[1]/totalSum*100);
  const paises = top5.map((dato) => dato[0]);
  result.push(paises);
  result.push(porcentajes);
  return result;
};
export {cartaHTML, ordenar, filtroData, estadistica};
