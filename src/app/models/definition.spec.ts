import { Definition } from './definition';

describe('Definition', () => {
  it('should create an instance', () => {
    expect(new Definition('dad','english','noun',['father.'])).toBeTruthy();
  });
});
