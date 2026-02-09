// fetch('./partials/header.html')
//   .then(res => res.text())
//   .then(html => {
//     document.getElementById('header').innerHTML = html;
//     setActiveNav();
//   });

// function setActiveNav() {
//   const currentPage = window.location.pathname.split('/').pop() || 'index.html';

//   document.querySelectorAll('.nav__link').forEach(link => {
//     if (link.getAttribute('href') === currentPage) {
//       link.classList.add('is-active');
//     }
//   });
// }
// fetch('./partials/header.html')
//   .then(res => {
//     if (!res.ok) throw new Error('Header not found');
//     return res.text();
//   })
//   .then(html => {
//     document.getElementById('header').innerHTML = html;
//     setActiveNav(); // тепер кнопки точно є в DOM
//   })
//   .catch(err => console.error(err, 'Помилка завантаження header'));
// fetch('./partials/header.html')
//   .then(res => {
//     if (!res.ok) throw new Error('Header not found');
//     return res.text();
//   })
//   .then(html => {
//     document.getElementById('header').innerHTML = html;
//     setActiveNav();
//   })
//   .catch(err => console.error(err, 'Помилка завантаження header'));
// header.js

// // Завантаження header через fetch
// fetch('./partials/header.html')
//   .then(res => {
//     if (!res.ok) throw new Error('Header not found');
//     return res.text();
//   })
//   .then(html => {
//     document.getElementById('header').innerHTML = html;
//     setActiveNav(); // викликаємо після вставки хедера
//   })
//   .catch(err => console.error(err, 'Помилка завантаження header'));

// // --- Функція для підсвітки активного пункту меню ---
// function setActiveNav() {
//   const currentPage = window.location.pathname.split('/').pop();

//   document.querySelectorAll('.nav__link').forEach(link => {
//     link.classList.remove('is-active');
//     if (link.getAttribute('href') === currentPage) {
//       link.classList.add('is-active');
//     }
//   });
// }
// Завантажуємо header через fetch
// fetch('./partials/header.html')
//   .then(res => {
//     if (!res.ok) throw new Error('Header not found');
//     return res.text();
//   })
//   .then(html => {
//     document.getElementById('header').innerHTML = html;
//     // setActiveNav(); // підсвічуємо активний пункт після вставки
//   })
//   .catch(err => console.error(err, 'Помилка завантаження header'));

// Функція підсвітки активного пункту меню
// function setActiveNav() {
//   const currentPage = window.location.pathname.split('/').pop(); // index.html, bonuses.html

//   document.querySelectorAll('.nav__link').forEach(link => {
//     link.classList.remove('is-active');
//     if (link.getAttribute('href') === currentPage) {
//       link.classList.add('is-active');
//     }
//   });
// }

// Функція завантаження HTML
function loadHeader() {
  fetch('./partials/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error('Помилка завантаження хедера:', error));
}

loadHeader();
