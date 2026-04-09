import { Strategy } from 'passport-local';
import userService from './../services/user.service.js';
import bcryptjs from 'bcryptjs';

function useLocalStrategy() {
  return new Strategy(
    {
      usernameField: 'identifier',
    },
    async function verify(identifier, password, done) {
      let user;

      // Check the identifier to see if you need to find the email or the username.
      if (identifier.includes('@')) {
        user = await userService.findUserByEmail(identifier, true);
      } else {
        user = await userService.findUserByUsername(identifier, true);
      }

      if (!user) {
        return done(null, false, { message: 'Unknown identifier' });
      }

      if (password && !(await bcryptjs.compare(password, user.password))) {
        return done(null, false, { message: 'Incorrect password' });
      }

      return done(null, user);
    },
  );
}

export { useLocalStrategy };
