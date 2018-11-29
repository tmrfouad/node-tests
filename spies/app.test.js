const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('App', () => {
  const db = {
    saveUser: expect.createSpy()
  };

  app.__set__('db', db);

  it('should call the spy correctly', () => {
    const spy = expect.createSpy();
    spy('Tamer', 35);
    expect(spy).toHaveBeenCalledWith('Tamer', 35);
  });

  it('should call saveUser with user object', () => {
    const email = 'tmr@gmail.com';
    const password = '123@321';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});
