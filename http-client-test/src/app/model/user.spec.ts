import { User } from './user';

describe('User', () => {
  it('should create an User instance', () => {
    expect(new User()).toBeTruthy();
  });

  it('should User have id', () => {
    let user = new User();
    expect(typeof user.id).toEqual('number');
  });

  it('should User have name', () => {
    let user = new User();
    expect(typeof user.name).toEqual('object');
  });

  it('should User have isActive', () => {
    let user = new User();
    expect(typeof user.isActive).toEqual('boolean');
  });

  it('should User have age', () => {
    let user = new User();
    expect(typeof user.age).toEqual('number');
  });

  it('should User have email', () => {
    let user = new User();
    expect(typeof user.email).toEqual('string');
  });

  it('should User have phone', () => {
    let user = new User();
    expect(typeof user.phone).toEqual('string');
  });
});
