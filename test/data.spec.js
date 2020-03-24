import {card, ordenar, filterData} from '../src/data.js';
describe('ordenar', () => {
  it('is a function', () => {
    expect(typeof ordenar).toBe('function');
  });
  it('returns `ordenar`', () => {
    expect(ordenar([
      {
        'name': 'Paola',
      },
      {
        'name': 'Ana',
      },
      {
        'name': 'Ana',
      },
      {
        'name': 'Nataliya',
      }], 'A-Z')).toStrictEqual([
      {
        'name': 'Ana',
      },
      {
        'name': 'Ana',
      },
      {
        'name': 'Nataliya',
      },
      {
        'name': 'Paola',
      }]);
  });
  it('returns `ordenar`', () => {
    expect(ordenar([
      {
        'name': 'Paola',
      },
      {
        'name': 'Ana',
      },
      {
        'name': 'Ana',
      },
      {
        'name': 'Nataliya',
      }], 'Z-A')).toStrictEqual([
      {
        'name': 'Paola',
      },
      {
        'name': 'Nataliya',
      },
      {
        'name': 'Ana',
      },
      {
        'name': 'Ana',
      }]);
  });
});
describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  it('returns `filterData`', () => {
    expect(filterData([
      {
        'name': 'Paola',
        'disciplinas': [
          {'medalla': 'Gold'}],
      },
      {
        'name': 'Nataliya',
        'disciplinas': [
          {'medalla': 'Silver'}],
      },
      {
        'name': 'Ana',
        'disciplinas': [
          {'medalla': 'Gold'}],
      },
      {
        'name': 'Ana',
        'disciplinas': [
          {'medalla': 'Bronze'}],
      }], 'medalla', 'Gold')).toStrictEqual([
      {
        'name': 'Paola',
        'disciplinas': [
          {'medalla': 'Gold'}],
      },
      {
        'name': 'Ana',
        'disciplinas': [
          {'medalla': 'Gold'}],
      }]);
  });
  it('returns `filterData`', () => {
    expect(filterData([
      {
        'name': 'Paola',
        'disciplinas': [
          {'disciplina': 'voley'}],
      },
      {
        'name': 'Nataliya',
        'disciplinas': [
          {'disciplina': 'futbol'}],
      },
      {
        'name': 'Ana',
        'disciplinas': [
          {'disciplina': 'voley'}],
      },
      {
        'name': 'Ana',
        'disciplinas': [
          {'disciplina': 'Golf'}],
      }], 'disciplinas', 'futbol')).toStrictEqual([
      {
        'name': 'Nataliya',
        'disciplinas': [
          {'disciplina': 'futbol'}],
      }]);
  });
  it('returns `filterData`', () => {
    expect(filterData([
      {
        'name': 'Paola',
        'team': 'Colombia',
      },
      {
        'name': 'Nataliya',
        'team': 'Peru',
      },
      {
        'name': 'Ana',
        'team': 'Colombia',
      },
      {
        'name': 'Ana',
        'team': 'Brazil',
      }], 'team', 'Brazil')).toStrictEqual([
      {
        'name': 'Ana',
        'team': 'Brazil',
      }]);
  });
});
describe('card', () => {
  it('is a function', () => {
    expect(typeof card).toBe('function');
  });
  it('returns `card`', () => {
    expect(card([
      {
        'name': 'Paola Bisiani',
        'disciplinas': [
          {
            'disciplina': 'Archery Team',
          }]}])).toBe(
        // <div>
        //   <article>
        //     <img src="foto.png" alt="foto">
        //       <div>
        //         <p>Paola Bisiani</p>
        //         <p>Archery Team</p>
        //       </div>
        //       <button class="verMas">+</button>
        //       <div id="divInfo0" class="ocultar">
        //         <p>name: Paola Bisiani</p>
        //         <p class="datos">disciplina: Archery Team</p>
        //       </div>
        //       <button class="ocultar" id="verMenos">-</button>
        //   </article>
        // </div>
    );
  });
  it('returns `card`', () => {
    expect(card([
      {
        'name': 'Paola Bisiani',
      },
      {
        'name': 'Nataliya',
        'pasatiempos': [
          {
            'correr': 'Archery Team',
          },
        ],
      }])).toBe('<article><img src=\"foto.png\" alt=\"foto\"> ' +
                '<div><p>name: Paola Bisiani </p></div> </article>' +
                '<article><img src=\"foto.png\" alt=\"foto\"> ' +
                '<div><p>name: Nataliya </p><p>correr: ' +
                'Archery Team </p></div> </article>');
  });
});
