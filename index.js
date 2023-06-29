import { useBooksApi } from "./booksApi";
import { state } from "./state";

import { openLoader, closeLoader } from "./loader/loader";

import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

import { useUserAuth } from "./authApi";

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

const loginButtonRef = document.querySelector(".login-button");
const logoutButtonRef = document.querySelector(".logout-button");
const registerButtonRef = document.querySelector(".register-button");

loginButtonRef.addEventListener("click", handleLogin);
logoutButtonRef.addEventListener("click", handleLogout);
registerButtonRef.addEventListener("click", handleRegister);
