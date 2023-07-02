// import { subscribe, fire } from "./subscriber";

const eventButtonRef = document.querySelector(".mybutton");
console.log(eventButtonRef);
eventButtonRef.addEventListener("click", myEvent);

const myEvent = (e) => {
  e.prevetDefault();
  console.log('object');
  // fire();
};

// console.log("hello");

const func1 = () => {
  console.log('i am finc2');
}


const func2 = () => {
  console.log("i am func2");
};


// subscribe(func1);
// subscribe(func2);


