const card = (arr) => {
  let article = '';
  arr.forEach((element) => {
    const infokeys = Object.keys(element);
    const vistaPrevia = `<div><p>${element.name}</p><p>${element.disciplinas[0].disciplina}</p></div>`;
    let info = '';
    const img = '<img src="foto.png" alt="foto">';
    for (let i = 0; i < infokeys.length; i++) {
      const infoValues = element[infokeys[i]];
      if (Array.isArray(infoValues)) {
        infoValues.forEach((element) => {
          const elementKeys = Object.keys(element);
          for (let i = 0; i < elementKeys.length; i++) {
            info += `<p>${elementKeys[i]}: ${element[elementKeys[i]]} </p>`;
          }
        });
      } else {
        info += `<p>${infokeys[i]}: ${infoValues} </p>`;
      }
    }
    article +=`<article>${img} ${vistaPrevia} <button class="verTodo">+</button> <div>${info}</div> <button class="verMenos">-</button></article>`;
  },
  );
  return article;
};
// Ordena de  A - Z
const ordenar = (data) => {
  const orden = data.sort((previo, siguiente) => {
    if (previo.name > siguiente.name) {
      return 1;
    } else if (previo.name < siguiente.name) {
      return -1;
    } else {
      return 0;
    }
  });
  return orden;
};
// Ordena de Z - A
const ordenInverso = (dataInversa) => {
  dataInversa.sort((previo, siguiente) => {
    if (previo.name > siguiente.name) {
      return -1;
    } else if (previo.name < siguiente.name) {
      return 1;
    } else {
      return 0;
    }
  });
};
export {card, ordenar, ordenInverso};
