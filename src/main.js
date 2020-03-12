 import { example } from './data.js';
//  import { card } from './data.js';
// import data from './data/injuries/injuries.js';
// import data from './data/lol/lol.js';
// import data from './data/patient/patient.js';
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

const card = (arr) => {
  arr.forEach((element) => {
    const info = arrDataAtletas[element];
    console.log(info);
    const infokeys = Object.keys(info);
    console.log(infokeys);
    const article = document.createElement('article');
    const divInfo = document.createElement('div');
    const img = document.createElement('img');
    img.setAttribute('src', 'foto.png');
    img.setAttribute('alt', 'foto');
    for (let i = 0; i < infokeys.length; i++) {
      const infoValues = info[infokeys[i]];
      console.log(infoValues);
      // Array.isArray(infoValues)
      if (Array.isArray(infoValues)) {
        infoValues.forEach(element => {
          const elementKeys = Object.keys(element);
          for (let i = 0; i < elementKeys.length; i++) {
            const datos = document.createElement('p');
            datos.className = 'datos';
            const textoDatos = document.createTextNode(`${elementKeys[i]}: ${element[elementKeys[i]]}`);
            datos.appendChild(textoDatos);
            divInfo.appendChild(datos);
          }
        })
      } else {
        const datos = document.createElement('p');
        const textoDatos = document.createTextNode(`${infokeys[i]}: ${infoValues}`);
        datos.appendChild(textoDatos);
        divInfo.appendChild(datos);
      }
    }
    const main = document.getElementsByTagName('main')[0];
    article.appendChild(img);
    article.appendChild(divInfo);
    main.appendChild(article);
  }
  )
}

card(topAtletas);
//  console.log(example, data);
