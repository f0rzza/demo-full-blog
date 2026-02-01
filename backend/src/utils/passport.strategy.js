import { Strategy } from 'passport-local';

function useLocalStrategy() {
  return new Strategy(async function verify(identifier, password, done) {
    return done(null, false); // TODO
  });
}

export { useLocalStrategy };
