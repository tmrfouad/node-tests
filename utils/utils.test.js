const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      const res = utils.add(33, 11);

      expect(res)
        .toBe(44)
        .toBeA('number');
    });

    it('should async add two numbers', done => {
      utils.asyncAdd(33, 11, res => {
        expect(res)
          .toBeA('number')
          .toBe(44);
        done();
      });
    });
  });

  describe('#square', () => {
    it('should square a number', () => {
      const res = utils.square(2);

      expect(res)
        .toBe(4)
        .toBeA('number');
    });

    it('should async square a number', done => {
      utils.asyncSquare(3, res => {
        expect(res)
          .toBe(9)
          .toBeA('number');
        done();
      });
    });
  });
});

it('should verify first and last names are set', () => {
  const user = {
    location: 'Cairo',
    age: 35
  };
  const res = utils.setName(user, 'Tamer Fouad');
  expect(res)
    .toBeA('object')
    .toInclude({
      firstName: 'Tamer',
      lastName: 'Fouad'
    });
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(12);
//   // expect({ name: 'tamer' }).toEqual({ name: 'Tamer' });
//   // expect([2, 3, 4]).toExclude(1);
//   expect({
//     name: 'Tamer',
//     age: 35,
//     location: 'Cairo'
//   }).toExclude({
//     age: 36
//   });
// });
