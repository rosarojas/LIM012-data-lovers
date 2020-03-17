import {ordenar, card} from '../src/data.js';
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
      },
      {
        'name': 'Nataliya',
      }])).toBe('<article><img src=\"foto.png\" alt=\"foto\"> '+
      '<div><p>name: Paola Bisiani </p></div> </article>' +
      '<article><img src=\"foto.png\" alt=\"foto\"> '+
      '<div><p>name: Nataliya </p></div> </article>');
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
      }])).toBe('<article><img src=\"foto.png\" alt=\"foto\"> '+
      '<div><p>name: Paola Bisiani </p></div> </article>' +
      '<article><img src=\"foto.png\" alt=\"foto\"> '+
      '<div><p>name: Nataliya </p><p>correr: '+
      'Archery Team </p></div> </article>');
  });
});
