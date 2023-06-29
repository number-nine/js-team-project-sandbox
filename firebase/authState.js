class AuthState {
  constructor() {}

  username = null;
  isLoggedIn = false;

//   logIn = (username) => {
//     this.username = { username, isLoggedIn: true };
//   };
//   logOut = () => {
//     this.user = { username: "", isLoggedIn: false };
//   };
}

export const authState = new AuthState();
