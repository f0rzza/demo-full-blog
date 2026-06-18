import { Role } from '@prisma/client';
import userService from '../services/user.service.js';

async function getAuthors(req, res) {
  const { id, role } = req.user;
  let authors = [];

  // For admins, return all authors. (admin & editors)
  if (role === Role.ADMIN) {
    const users = await userService.findAllUsers();
    authors = users.filter((user) => [Role.ADMIN, Role.EDITOR].includes(user.role));
    // TODO: add 'role' criteria in the query
  } else {
    // For editors, return only current user.
    const user = await userService.findUserById(id);
    authors.push(user);
  }

  res.json({ data: authors });
}

export default {
  getAuthors,
};
