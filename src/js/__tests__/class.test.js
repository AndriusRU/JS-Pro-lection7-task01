import Validator from '../class/validator';

const correctUserName = 'Legolas_123-56_Home';
const correctUser = {
  userName: 'Legolas_123-56_Home',
};


const wrongUserNames = [
  'Legolas_123-56_',
  '123-Legolas',
  'Legolas_123',
  'Legolas_123-',
  'Legolas_12345_home',
];

test('check correct userName', () => {
  const result = new Validator(correctUserName);
  expect(result.validateUserName()).toBeTruthy();
});
test.each(wrongUserNames)(('wrong name %s'), (userName) => {
  const result = new Validator(userName);
  expect(result.validateUserName()).toBeFalsy();
});
