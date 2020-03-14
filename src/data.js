const filterYear = () => {

};
 const example = () => {
  return 'example';
};

const card = (arr) => {
  arr.forEach((element) => {
    const infokeys = Object.keys(element);
    const article = document.createElement('article');
    const divInfo = document.createElement('div');
    const img = document.createElement('img');
    img.setAttribute('src', 'foto.png');
    img.setAttribute('alt', 'foto');
    for (let i = 0; i < infokeys.length; i++) {
      const infoValues = element[infokeys[i]];
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
export {card};

//Ordena de  A - Z
const ordenar = (data, name) => {
  data.sort((previo, siguiente) => {
    if (previo.name > siguiente.name) {
      return 1;
    } else if (previo.name < siguiente.name) {
      return -1;
    } else {
      return 0;
    }
  })
};
export {ordenar};

 //Ordena de Z - A
// const ordenInverso = (dataInversa, name) => dataInversa.sort((previo, siguiente) => {
//   if (previo.name > siguiente.name) {
//     return -1;
//   } else if (previo.name < siguiente.name) {
//     return 1;
//   } else {
//     return 0;
//   }
// })
// export ordenInverso;
// export const anotherExample = () => {
//   return 'OMG';
// };


// export const anotherExample = () => {
//   return 'OMG';
// };
