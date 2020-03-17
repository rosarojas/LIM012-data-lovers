import {ordenar} from '../src/data.js';
describe('ordenar', () => {
  it('is a function', () => {
    expect(typeof ordenar).toBe('function');
  });
  it('returns ordenar', () => {
    expect(ordenar([
      {
        'name': 'Paola Bisiani'
      },
      {
        'name': 'Nataliya Andrivna Burdeina'
      }])).toEqual(
        [
          {
            'name': 'Nataliya Andrivna Burdeina'
          },
          {
            'name': 'Paola Bisiani'
          }]
    );
  });
});