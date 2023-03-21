// import './style.css';

// import {
//   fillUsersSelect,
//   fillPosts,
//   fillFeaturedPostComments,
//   clearPageData,
//   fillErrorMessage,
// } from './utils/updateUI';

// const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => {
    const { users } = data;

    // Chama a função auxiliar para preencher os nomes e ids no select users-select
    fillUsersSelect(users);
  });

// usersSelect.addEventListener('change', () => {
//   clearPageData();
// });