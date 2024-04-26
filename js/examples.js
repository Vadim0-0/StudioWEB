/* Header */

const socialBtn = document.querySelector('.header-btn-social');
const socialList = document.querySelector('.social-list');

socialBtn.addEventListener('mouseenter', ()=> {
    socialList.classList.toggle('social-open');
});

socialList.addEventListener('mouseleave', ()=> {
    socialList.classList.remove('social-open');
});

/* Hero */

const ExamplesheroRihgtList = document.querySelector(".hero__rihgt-list");
const ExamplesheroBtnNext = document.querySelectorAll("#hero-btn-next");
const ExamplesheroBtnPrev = document.querySelectorAll("#hero-btn-prev");

ExamplesheroBtnNext.forEach(button => {
    button.addEventListener("click", () => {
        ExamplesheroRihgtList.scrollBy({left: 250, behavior: "smooth"});
    });
});

ExamplesheroBtnPrev.forEach(button => {
    button.addEventListener("click", () => {
        ExamplesheroRihgtList.scrollBy({left: -250, behavior: "smooth"});
    });
});

/* Examples */

function examples() {
    var developmen = document.querySelectorAll(".examples-item");
    for (var i = 0; i < developmen.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = developmen[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        developmen[i].classList.add("active");
      } else {
        developmen[i].classList.remove("active");
      }
    }
};
window.addEventListener("scroll", examples);

/* Application */

function application() {
    var developmen = document.querySelectorAll(".application");
    for (var i = 0; i < developmen.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = developmen[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        developmen[i].classList.add("active");
      } else {
        developmen[i].classList.remove("active");
      }
    }
};
window.addEventListener("scroll", application);

/* Modal Call */

const body = document.querySelector('#body');
const callBtn = document.querySelector('#call');
const modalCall = document.querySelector('#modal-call');
const modalCallClose = document.querySelector('#modal-call-close');
  
callBtn.addEventListener('click', ()=> {
  modalCall.classList.toggle('modal-open');
  body.classList.toggle('body-stop');
});

modalCallClose.addEventListener('click', ()=> {
  modalCall.classList.remove('modal-open');
  body.classList.remove('body-stop');
});

/* Call Form*/

const TOKEN = "5841273300:AAE0132vKZVDuAGliV_J3UhliPh70z8uWB4";
const CHAT_TD = "733926217";
const URI_API=`https://api.telegram.org/bot${ TOKEN }/sendMessage`;

document.getElementById('modal-call-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    let massage = `<b>Заказ звонка</b>\n`;
    massage += `<b>Имя отправителя: </b> ${this.name.value}\n`;
    massage += `<b>Телефон отправителя: </b> ${this.tel.value}\n`;
    massage += `<b>Сообщение: </b> ${this.text.value}`;
  
    axios.post(URI_API, {
      chat_id: CHAT_TD,
      parse_mode: 'html',
      text: massage
    })
});

/* header burger */

const headerBurgerMenu = document.querySelector('.header-container-burger');
const btnBurgerOpen = document.querySelector('.btn-burger-open');
const btnBurgerClose = document.querySelector('.btn-burger-close');

btnBurgerOpen.addEventListener('click', ()=> {
  headerBurgerMenu.classList.toggle('active');
});

btnBurgerClose.addEventListener('click', ()=> {
  headerBurgerMenu.classList.remove('active');
});