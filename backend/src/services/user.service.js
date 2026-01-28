import userRepository from "../repositories/user.repository.js";

async function findAllCategories() {
  const users = await userRepository.getAll();
  return users;
}

async function findUserById(id) {
  const user = await userRepository.getById(id);
  return user;
}

async function createNewUser({ username, email, password }) {
  // TODO : check email and username
  // TODO : generate hashed password
  const user = await userRepository.create({ username, email, password });
  return user;
}

async function updateUserById(id, { username, email, password }) {
  // Before update the user, check its existence.
  const user = await findUserById(id);
  if (!user) return null;

  // Update the user.
  const updatedUser = await userRepository.updateById(id, { username, email, password });
  return updatedUser;
}

async function deleteUserById(id) {
  // Before delete the user, check its existence.
  const user = await findUserById(id);
  if (!user) return null;

  const deletedUser = await userRepository.deleteById(id);
  return deletedUser;
}

export default {
  findAllCategories,
  findUserById,
  createNewUser,
  updateUserById,
  deleteUserById,
};
