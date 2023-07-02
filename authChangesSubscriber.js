const callbacksLoggedIn = [];
const callbacksLoggedOut = [];

const subscribeUserLoggedIn = (callback) => {
  if (typeof callback !== "function") {
    console.error(callback, " not a function");
    return;
  }
  callbacksLoggedIn.push(callback);
};

const subscribeUserLoggedOut = (callback) => {
  if (typeof callback !== "function") {
    return;
  }
  callbacksLoggedOut.push(callback);
};

const fireLoggedIn = () => {
  callbacksLoggedIn.forEach((callback) => callback());
};

const fireLoggedOut = () => {
  callbacksLoggedIn.forEach((callback) => callback());
};

export const useSubscribeUserAuthChanges = () => {
  return { subscribeUserLoggedIn, subscribeUserLoggedOut };
};

export const useFireUserAuthChanges = () => {
  return { fireLoggedIn, fireLoggedOut };
};
