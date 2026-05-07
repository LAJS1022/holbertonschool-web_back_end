// 3-all.js
import { uploadPhoto, createUser } from './utils';

/**
 * Collectively resolves uploadPhoto and createUser promises.
 * Logs "body firstName lastName" on success.
 * Logs "Signup system offline" on error.
 */
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
