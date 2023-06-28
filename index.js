import { useBooksApi } from "./booksApi";
import { state } from "./state";

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
    })
    .finally(() => {
      state.isLoading = false;
    });
};

const handleOpenModal = () => {
    const modalPortal = document.querySelector(".modal-root");
    const innerModal = '<div class="modal">11</div>'
    modalPortal.innerHTML = innerModal;
}

const ButtonRef = document.querySelector(".get-button");


const ListRef = document.querySelector(".category-list");
const openModalButtonRef = document.querySelector(".open-modal");
ButtonRef.addEventListener("click", handleOnPress);
openModalButtonRef.addEventListener('click', handleOpenModal)

const parceCategoryList = (list) => {
  const innerList = list
    .map(({ list_name }) => `<li>${list_name}</li>`)
    .join("");
    console.log(innerList);
    ListRef.innerHTML = innerList;
};
