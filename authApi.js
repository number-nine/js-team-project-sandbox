import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { app } from "./firebaseCredentials";
import { openLoader, closeLoader } from "./loader/loader";

import { authState } from "./authState";

const auth = getAuth(app);

const login = ({ username, password }) => {
  openLoader();
  signInWithEmailAndPassword(auth, username, password)
      .then((res) => {
        Notify.info(isLoggedIn());
    //   console.log(isLoggedIn());
      console.log(res);
    })
    .catch((err) => {
      Notify.failure(err.message);
    })
    .finally(closeLoader);
};

const logout = () => {
      openLoader();

  signOut(auth)
    .then((res) => {
      console.log(isLoggedIn());
      console.log(res);
    })
    .catch((err) => {
      Notify.failure(err.message);
    }).finally(closeLoader);;
};

const register = ({ username, password }) => {
    openLoader();
  createUserWithEmailAndPassword(auth, username, password)
    .then((res) => {
      console.log(isLoggedIn());
      console.log(res);
    })
    .catch((err) => {
      Notify.failure(err.message);
    })
    .finally(closeLoader);;
};

const isLoggedIn = () => {
    return Boolean(auth.currentUser);
}

export const useUserAuth = () => {
  return {
    login,
    logout,
    register,
    isLoggedIn,
  };
};

// export const authProvider = () => {
//     const auth = getAuth(app);

//     console.log(auth.currentUser);

// signInWithCredential(auth)

// signInWithEmailAndPassword(auth, 'test@test.com', 'test12345')
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// createUserWithEmailAndPassword(auth, "new@user.com", "pass123")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// signOut(auth);

// auth(auth);

//   return "<div>user</div>";
// };
