//              MENU MOSTRAR E ESCONDER
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//              MENU MOSTRAR
// validar se a constante existe
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// MENU ESCONDER
// validar se a constante existe
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// ACCORDION HABILIDADES

const skillsContent = document.getElementsByClassName("habilidades__content");
skillsHeader = document.querySelectorAll(".habilidades__header");

function toggleSkills() {
  let itemClass = this.parentNode.ClassName;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "habilidades__content habilidades__close";
  }
  if (itemClass === "habilidades__content habilidades__close") {
    this.parentNode.className = "habilidades__content habilidades__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

// QUALIFICAÇÕES
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualificacao__active");
    });
    target.classList.add("qualificacao__active");

    tab.forEach((tab) => {
      tab.classList.remove("qualificacao__active");
    });
    tab.classList.add("qualificacao__active");
  });
});

// SERVICOS
const modalViews = document.querySelectorAll(".servicos__modal"),
  modalBtns = document.querySelectorAll(".servicos__button"),
  modalCloses = document.querySelectorAll(".servicos__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});