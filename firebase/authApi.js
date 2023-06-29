import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { app } from "./firebaseCredentials";
import { openLoader, closeLoader } from "../loader/loader";

import { authState } from "./authState";

const auth = getAuth(app);

const login = ({ username, password }) => {
  openLoader();
  signInWithEmailAndPassword(auth, username, password)
    .then((res) => {
      Notify.info(isLoggedIn().toString());
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
    })
    .finally(closeLoader);
};

const register = ({ username, password }) => {
  openLoader();
  createUserWithEmailAndPassword(auth, username, password)
    .then((res) => {
      console.log("isLoggedIn().toString()");
      console.log(res);
    })
    .catch((err) => {
      Notify.failure(err.message);
    })
    .finally(closeLoader);
};

const isLoggedIn = () => {
  return Boolean(auth.currentUser);
};

export const useUserAuth = () => {
  return {
    login,
    logout,
    register,
    isLoggedIn,
  };
};
