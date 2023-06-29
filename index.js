import { useBooksApi } from "./booksApi";
import { state } from "./state";

import { openLoader, closeLoader } from "./loader/loader";


console.log("hello");

const booksApi = useBooksApi();

const handleOnPress = (e) => {
  e.preventDefault();

  state.isLoading = true;
  state.isError = false;

  booksApi
    .getCategoryList()
    .then((res) => {
      state.data = res;
      parceCategoryList(res);
    })
    .catch((err) => {
      state.error = err;
        state.isError = true;
        console.log(err);
    })
    .finally(() => {
      state.isLoading = false;
    });
};

const parceCategoryList = (list) => {
  const innerList = list
    .map(({ list_name }) => `<li>${list_name}</li>`)
    .join("");
  console.log(innerList);
  ListRef.innerHTML = innerList;
};

// const innerModal = () => {
//   return '<div class="modal in-progress"></div > ';
// }

// const handleOpenModal = () => {
//     const modalPortal = document.querySelector(".modal-root");
//     modalPortal.innerHTML = innerModal();
// }

const ButtonRef = document.querySelector(".get-button");
const ListRef = document.querySelector(".category-list");
const openModalButtonRef = document.querySelector(".open-modal");
ButtonRef.addEventListener("click", handleOnPress);
openModalButtonRef.addEventListener('click', openLoader)


