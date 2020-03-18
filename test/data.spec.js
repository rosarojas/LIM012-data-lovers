import {ordenar} from '../src/data.js';
describe('ordenar', () => {
  it('is a function', () => {
    expect(typeof ordenar).toBe('function');
  });
  it('returns `example`', () => {
    expect(ordenar([
      {
        'name': 'Paola Bisiani'
      },
      {
        'name': 'Nataliya Andrivna Burdeina'
      }])).toBe(
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