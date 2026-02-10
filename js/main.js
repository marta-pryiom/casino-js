document.addEventListener('DOMContentLoaded', function () {
  console.log('Проект завантажено. Все працює');
});

// fade-out effect for links
const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    const href = link.getAttribute('href');
    if (href.startsWith('http') || href.startsWith('#')) return;
    e.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = href;
    }, 300);
  });
});

// language selector logic
const langSelectorBtn = document.querySelector('.language-selector__button');
const langDropdown = document.querySelector('.language-selector__dropdown');
const langCode = document.querySelector('.language-selector__code');
const langFlag = document.querySelector(
  '.language-selector__button .language-selector__flag',
);

langSelectorBtn.addEventListener('click', () => {
  const isOpen = langDropdown.classList.contains('open');

  langDropdown.classList.toggle('open', !isOpen); // open/close dropdown
  langSelectorBtn.classList.toggle('open', !isOpen); // switch arrow direction
});

langDropdown.querySelectorAll('.language-selector__item').forEach(item => {
  item.addEventListener('click', () => {
    langCode.textContent = item.dataset.lang;
    langFlag.src = item.querySelector('.language-selector__flag').src;

    langDropdown.classList.remove('open');
    langSelectorBtn.classList.remove('open');
    console.log('Selected language:', item.dataset.lang);
  });
});

// close dropdown when clicking outside
document.addEventListener('click', e => {
  if (!e.target.closest('.language-selector')) {
    langDropdown.classList.remove('open');
    langSelectorBtn.classList.remove('open');
  }
});

//burger menu logic
(() => {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  const actions = document.querySelector('.header__actions');
  const placeholder = nav.querySelector('.nav__actions-placeholder');
  const headerContainer = document.querySelector('.header__container');
  const body = document.body;

  const DESKTOP_WIDTH = 980;

  if (!burger || !nav || !actions || !placeholder || !headerContainer) return;

  function moveActions() {
    if (window.innerWidth <= DESKTOP_WIDTH) {
      if (!placeholder.contains(actions)) {
        placeholder.appendChild(actions);
      }
    } else {
      if (!headerContainer.contains(actions)) {
        headerContainer.appendChild(actions);
      }
    }
  }

  function openMenu() {
    nav.classList.add('active');
    burger.classList.add('active');
    body.classList.add('menu-open');
  }

  function closeMenu() {
    nav.classList.remove('active');
    burger.classList.remove('active');
    body.classList.remove('menu-open');
  }

  function toggleMenu() {
    if (nav.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  burger.addEventListener('click', event => {
    event.stopPropagation();
    toggleMenu();
  });

  nav.addEventListener('click', event => {
    if (event.target.closest('a')) {
      closeMenu();
    }
  });

  document.addEventListener('click', event => {
    if (!nav.contains(event.target) && !burger.contains(event.target)) {
      closeMenu();
    }
  });
  window.addEventListener('resize', moveActions);
  moveActions();
})();
//faq accordion logic
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq__question');

  question.addEventListener('click', () => {
    const isActive = item.classList.contains('faq__item--active');

    faqItems.forEach(i => i.classList.remove('faq__item--active'));

    if (!isActive) {
      item.classList.add('faq__item--active');
    }
  });
});
