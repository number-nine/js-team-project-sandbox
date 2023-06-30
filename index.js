import { useBooksApi } from "./booksApi";
import { modalAuth } from "./firebase/modal-auth";
import { state } from "./state";
import { composeSignupModal } from "./modal-auth/authModal";

import { openLoader, closeLoader } from "./loader/loader";

import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

import { useUserAuth } from "./firebase/authApi";

import { initAuth } from "./modal-auth/eventsProcessor";

console.log("hello");
const { login, logout, register } = useUserAuth();

const booksApi = useBooksApi();

const handleLogin = (e) => {
  e.preventDefault();
  login({ username: "vasya@mail.com", password: "123456" });
};

const handleLogout = (e) => {
  e.preventDefault();
  logout();
};

const handleRegister = (e) => {
  e.preventDefault();
  register({ username: "vasya@mail.com", password: "123456" });
};

const handleOpenModal = (e) => {
  e.preventDefault();
};

initAuth();

// const handleSignModal = (e) => {
//   e.preventDefault();
//   onModalOpen();
  // console.log(e.target.value);

  // const modalRootRef = document.querySelector(".auth-modal-root");
  // modalRootRef.innerHTML = composeSignupModal("light");

  // const closeModalRef = document.querySelector(".close-auth");
  // const submitModalRef = document.querySelector(".submit-auth");
  // const switchAuthRef = document.querySelector(".sigh-auth");

  // closeModalRef.addEventListener("click", handleCloseAuthModal);
  // switchAuthRef.addEventListener("click", switchAuth);

// };

// const switchAuth = (e) => {};

// const handleCloseAuthModal = () => {
//   const modalRootRef = document.querySelector(".auth-modal-root");
//   modalRootRef.innerHTML = "";
// };

// const modalAuthButtonRef = document.querySelector(".modal-auth-button");
// modalAuthButtonRef.addEventListener("click", handleSignModal);

// loginButtonRef.addEventListener("click", handleLogin);
// logoutButtonRef.addEventListener("click", handleLogout);
// registerButtonRef.addEventListener("click", handleRegister);
// modalLoginButtonRef.addEventListener("click", handleOpenModal);

// const loginButtonRef = document.querySelector(".login-button");
// const logoutButtonRef = document.querySelector(".logout-button");
// const registerButtonRef = document.querySelector(".register-button");
// const modalLoginButtonRef = document.querySelector(".modal-login-button");
