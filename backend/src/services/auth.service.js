import userService from './user.service.js';

async function createAccount({ email, username, password }) {
  // Use create function from User service.
  const user = await userService.createNewUser({ email, username, password });
  return user;
}

export default { createAccount };
