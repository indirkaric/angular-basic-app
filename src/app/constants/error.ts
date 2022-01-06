export class Error {
  static USER_EXISTS = 'User already exists';
  static USER_NOT_FOUND = 'User does not exists';
  static INCORRECT_PASSWORD = 'Incorrect password';
  static PASSWORD_SIZE_NOT_VALID = 'Password size must be at least 8 characters long';
  static EMPTY_PASSWORD = 'Password can not be empty';
  static EMPTY_EMAIL = 'Email can not be empty';
  static INVALID_EMAIL = 'Invalid email format';
  static NO_MATCHING_FOR_PASSWORDS = 'No matching for passwords';
}
