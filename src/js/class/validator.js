export default class Validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUserName() {
    return this.userName.match(/^[^\W\d_]+([A-z]|[_-]|(\d{0,3}(?!\d)))+[^_-\d]$/) !== null;
  }
}
