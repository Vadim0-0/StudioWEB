/* Header */

const socialBtn = document.querySelector('.header-btn-social');
const socialList = document.querySelector('.social-list');

socialBtn.addEventListener('mouseenter', ()=> {
    socialList.classList.toggle('social-open');
});

socialList.addEventListener('mouseleave', ()=> {
    socialList.classList.remove('social-open');
});

/* Section 2  */

function section2() {
  var developmen = document.querySelectorAll(".section2");
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
window.addEventListener("scroll", section2);

/* Section 3  */

function section3() {
  var developmen = document.querySelectorAll(".section3");
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
window.addEventListener("scroll", section3);

/* Section 4  */

function section4() {
  var developmen = document.querySelectorAll(".section4");
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
window.addEventListener("scroll", section4);

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