import { useSubscribeUserAuthChanges, useFireUserAuthChanges } from "./authChangesSubscriber";

const { subscribeUserLoggedIn, subscribeUserLoggedOut } = useSubscribeUserAuthChanges();

const { fireLoggedIn, fireLoggedOut } = useFireUserAuthChanges()

const myButtonEvent = () => {
  console.log("do something");
  fireLoggedIn();
};

const eventButtonRef = document.querySelector(".mybutton");
eventButtonRef.addEventListener("click", myButtonEvent);


const func1 = () => {
  console.log('i am finc2');
}


const func2 = () => {
  console.log("i am func2");
};

const val1 = 5;


subscribeUserLoggedIn(func1);
subscribeUserLoggedIn(func2);
subscribeUserLoggedIn(val1);


