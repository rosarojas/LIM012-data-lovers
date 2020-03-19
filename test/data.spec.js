import {ordenar} from '../src/data.js';
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
      }])).toStrictEqual([
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
