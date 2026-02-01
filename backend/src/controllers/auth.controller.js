import authService from '../services/auth.service.js';

async function createAccount(req, res) {
  // Create new user with correct data.
  const user = await authService.createAccount(req.body);
  res.json(user);
}

export default { createAccount };
