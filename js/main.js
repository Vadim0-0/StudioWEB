let isPlaying = false;
    function playVideo(e) {
        if (isPlaying)
            return
        if ( e && e.type ) {
            console.log( `${e.type}: start loading video` );
        } else {
            console.log( 'Page is loaded: start loading video' );
        }
        isPlaying = true;
        console.log('start play video');
        document.querySelector('№video')?.play();
        window.removeEventListener('load', fallBack);
        window.removeEventListener('touchstart', playVideo);
        document.removeEventListener('scroll', playVideo);
        document.removeEventListener('mouseenter', playVideo);
        document.removeEventListener('click', playVideo);
};

function fallBack() {
    setTimeout(playVideo, 2000);
};
window.addEventListener('load', fallBack);
window.addEventListener('touchstart', playVideo);
document.addEventListener('scroll', playVideo);
document.addEventListener('mouseenter', playVideo);
document.addEventListener('click', playVideo);

const socialBtn = document.querySelector('.header-btn-social');
const socialList = document.querySelector('.social-list');

socialBtn.addEventListener('mouseenter', ()=> {
    socialList.classList.toggle('social-open');
});

socialList.addEventListener('mouseleave', ()=> {
    socialList.classList.remove('social-open');
});

/* Examples */

function example() {
    var examples = document.querySelectorAll("#examples");
    for (var i = 0; i < examples.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = examples[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        examples[i].classList.add("active");
      } else {
        examples[i].classList.remove("active");
      }
    }
};
window.addEventListener("scroll", example);

/* Examples - list */

const examplesList = document.querySelector(".examples-list");
const examplesBtns = document.querySelectorAll(".examples-btn");

let currentItemExamples = 0;

// Устанавливаем начальное положение элемента
examplesList.scrollLeft = currentItemExamples * examplesList.children[0].offsetWidth;

// Обрабатываем нажатия на кнопки
examplesBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Проверяем, является ли кнопка кнопкой "Назад"
    if (btn.id === "prev-btn") {
      // Если это кнопка "Назад", проверяем, не является ли текущий элемент первым
      if (currentItemExamples > 0) {
        // Если текущий элемент не первый, переходим к предыдущему элементу
        currentItemExamples--;
      }
    } else {
      // Если это не кнопка "Назад", проверяем, не является ли текущий элемент последним
      if (currentItemExamples < examplesList.children.length - 1) {
        // Если текущий элемент не последний, переходим к следующему элементу
        currentItemExamples++;
      }
    }

    // Прокручиваем список к нужному элементу
    examplesList.scrollLeft = currentItemExamples * examplesList.children[0].offsetWidth;
  });
});

/* Prices */

function prices() {
    var price = document.querySelectorAll("#prices");
    for (var i = 0; i < price.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = price[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        price[i].classList.add("active");
      } else {
        price[i].classList.remove("active");
      }
    }
};
window.addEventListener("scroll", prices);

/* Development */

function developments() {
    var developmen = document.querySelectorAll("#development");
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
window.addEventListener("scroll", developments);

function developmentItem() {
  var developmen = document.querySelectorAll(".development__item");
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
window.addEventListener("scroll", developmentItem);

/* Application */

function applications() {
    var application = document.querySelectorAll("#application");
    for (var i = 0; i < application.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = application[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        application[i].classList.add("active");
      } else {
        application[i].classList.remove("active");
      }
    }
};
window.addEventListener("scroll", applications);

/* Application - form */

const slidePage = document.querySelector(".application-form");
const applicationNextBtn = document.querySelectorAll(".next-stage");
const applicationWidget1 = document.querySelector("#application-widget2");
const applicationWidget2 = document.querySelector("#application-widget3");
const applicationWidget3 = document.querySelector("#application-widget4");
const formBtn1 = document.querySelectorAll("#form-btn1");
const formBtn2 = document.querySelectorAll("#form-btn2");
const formBtn3 = document.querySelectorAll("#form-btn3");

formBtn1.forEach(button => {
    button.addEventListener("click", () => {
        slidePage.scrollBy({left: 150, behavior: "smooth"});
        applicationWidget1.classList.add('application-widgets__item-on');
    });
});

formBtn2.forEach(button => {
    button.addEventListener("click", () => {
        slidePage.scrollBy({left: 150, behavior: "smooth"});
        applicationWidget2.classList.add('application-widgets__item-on');
    });
});

formBtn3.forEach(button => {
    button.addEventListener("click", () => {
        slidePage.scrollBy({left: 150, behavior: "smooth"});
        applicationWidget3.classList.add('application-widgets__item-on');
    });
});

/* Application - Burger */

const formBtnSocial = document.querySelector('.application-form__btn-social');
const applicationBurger = document.querySelector('.application-burger');

formBtnSocial.addEventListener('mouseenter', ()=> {
    applicationBurger.classList.toggle('application-burger-open');
});

applicationBurger.addEventListener('mouseleave', ()=> {
    applicationBurger.classList.remove('application-burger-open');
});

/* application input */

var circleName = document.getElementById('circle-name');
var circleTel = document.getElementById('circle-tel');
var circleEmail = document.getElementById('circle-email');
var applicationInputName = document.getElementById('application-input-name');
var applicationInputTel = document.getElementById('application-input-tel');
var applicationInputEmail = document.getElementById('application-input-emial');

applicationInputName.oninput = function(){
  if(this.value == ''){
    circleName.style.background = '#FF5959';
  } else {
    circleName.style.background = '#666bfc';
  }
};

applicationInputTel.oninput = function(){
  if(this.value == ''){
    circleTel.style.background = '#FF5959';
  } else {
    circleTel.style.background = '#666bfc';
  }
};

applicationInputEmail.oninput = function(){
  if(this.value == ''){
    circleEmail.style.background = '#FF5959';
  } else {
    circleEmail.style.background = '#666bfc';
  }
};

/* application-pop-app */

const popApp = document.querySelector('#pop-app');
const applicationFormBtn = document.querySelector('#application-form-btn');
const popBtnClose = document.querySelector('#pop-btn-close');
const popClose = document.querySelector('#pop-close');
  
applicationFormBtn.addEventListener('click', ()=> {
  popApp.classList.toggle('modal-open');
  body.classList.toggle('body-stop');
});

popBtnClose.addEventListener('click', ()=> {
  popApp.classList.remove('modal-open');
  body.classList.remove('body-stop');
});

popClose.addEventListener('click', ()=> {
  popApp.classList.remove('modal-open');
  body.classList.remove('body-stop');
});

/* Promotion */

function promotions() {
    var promotion = document.querySelectorAll("#promotion");
    for (var i = 0; i < promotion.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = promotion[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        promotion[i].classList.add("active");
      } else {
        promotion[i].classList.remove("active");
      }
    }
};
window.addEventListener("scroll", promotions);

/* Promotion List */

const promotionList = document.getElementById("promotion-list");
const promotionPrevBtn = document.getElementById("promotion-prev-btn");
const promotionNextBtn = document.getElementById("promotion-next-btn");

let currentItem1 = 0;
let scrollAmount = 730; // Значение по умолчанию для десктопов

// Проверка размера экрана
if (window.innerWidth < 768) {
  scrollAmount = 328; // Значение для мобильных устройств
}

promotionPrevBtn.addEventListener("click", () => {
  if (currentItem1 > 0) {
    currentItem1--;
    promotionList.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  }
});

promotionNextBtn.addEventListener("click", () => {
  if (currentItem1 < promotionList.children.length - 1) {
    currentItem1++;
    promotionList.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
});

/* Questions */


function questions() {
    var question = document.querySelectorAll("#questions");
    for (var i = 0; i < question.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = question[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        question[i].classList.add("active");
      } else {
        question[i].classList.remove("active");
      }
    }
};
window.addEventListener("scroll", questions);

/* Questions List */

const questionsBtn1 = document.querySelectorAll("#questions-btn1");
const questionsBtn2 = document.querySelectorAll("#questions-btn2");
const questionsBtn3 = document.querySelectorAll("#questions-btn3");
const questionsBtn4 = document.querySelectorAll("#questions-btn4");
const questionsBtn5 = document.querySelectorAll("#questions-btn5");
const questionsBtn6 = document.querySelectorAll("#questions-btn6");
const questionsDescr1 = document.querySelector("#questions-descr1");
const questionsDescr2 = document.querySelector("#questions-descr2");
const questionsDescr3 = document.querySelector("#questions-descr3");
const questionsDescr4 = document.querySelector("#questions-descr4");
const questionsDescr5 = document.querySelector("#questions-descr5");
const questionsDescr6 = document.querySelector("#questions-descr6");
const questionsItem1 = document.querySelector("#questions-item1");
const questionsItem2 = document.querySelector("#questions-item2");
const questionsItem3 = document.querySelector("#questions-item3");
const questionsItem4 = document.querySelector("#questions-item4");
const questionsItem5 = document.querySelector("#questions-item5");
const questionsItem6 = document.querySelector("#questions-item6");
const btnSvg1 = document.querySelector("#btn-svg1");
const btnSvg2 = document.querySelector("#btn-svg2");
const btnSvg3 = document.querySelector("#btn-svg3");
const btnSvg4 = document.querySelector("#btn-svg4");
const btnSvg5 = document.querySelector("#btn-svg5");
const btnSvg6 = document.querySelector("#btn-svg6");

questionsBtn1.forEach(button => {
    button.addEventListener("click", () => {
        questionsDescr1.classList.toggle('questions__descr-on');
        questionsItem1.classList.toggle('active');
        btnSvg1.classList.toggle('active');
    });
});

questionsBtn2.forEach(button => {
    button.addEventListener("click", () => {
        questionsDescr2.classList.toggle('questions__descr-on');
        questionsItem2.classList.toggle('active');
        btnSvg2.classList.toggle('active');
    });
});

questionsBtn3.forEach(button => {
    button.addEventListener("click", () => {
        questionsDescr3.classList.toggle('questions__descr-on');
        questionsItem3.classList.toggle('active');
        btnSvg3.classList.toggle('active');
    });
});

questionsBtn4.forEach(button => {
    button.addEventListener("click", () => {
        questionsDescr4.classList.toggle('questions__descr-on');
        questionsItem4.classList.toggle('active');
        btnSvg4.classList.toggle('active');
    });
});

questionsBtn5.forEach(button => {
    button.addEventListener("click", () => {
        questionsDescr5.classList.toggle('questions__descr-on');
        questionsItem5.classList.toggle('active');
        btnSvg5.classList.toggle('active');
    });
});

questionsBtn6.forEach(button => {
    button.addEventListener("click", () => {
        questionsDescr6.classList.toggle('questions__descr-on');
        questionsItem6.classList.toggle('active');
        btnSvg6.classList.toggle('active');
    });
});

/* Reviews */

function reviews() {
    var review = document.querySelectorAll("#reviews");
    for (var i = 0; i < review.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = review[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        review[i].classList.add("active");
      } else {
        review[i].classList.remove("active");
      }
    }
};
window.addEventListener("scroll", reviews);

/* Reviews List */

/*const reviewsList = document.getElementById("reviews-list");
const reviewsBtns = document.querySelectorAll(".reviews-btn");
const reviewsPositionLinks = document.querySelectorAll(".reviews__position-link");

let currentItem = 0;

// Устанавливаем начальное положение активной ссылки
reviewsPositionLinks[currentItem].classList.add("reviews__position-link--active");

// Обрабатываем нажатия на кнопки
reviewsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Проверяем, является ли кнопка кнопкой "Назад"
    if (btn.id === "reviews-btn-prev") {
      // Если это кнопка "Назад", проверяем, не является ли текущий элемент первым
      if (currentItem > 0) {
        // Если текущий элемент не первый, переходим к предыдущему элементу
        currentItem--;
      }
    } else {
      // Если это не кнопка "Назад", проверяем, не является ли текущий элемент последним
      if (currentItem < reviewsList.children.length - 1) {
        // Если текущий элемент не последний, переходим к следующему элементу
        currentItem++;
      }
    }

    // Прокручиваем список к нужному элементу
    reviewsList.scrollLeft = currentItem * reviewsList.children[0].offsetWidth;

    // Обновляем активную ссылку
    updateActiveLink();
  });
});

// Обрабатываем нажатия на ссылки
reviewsPositionLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Получаем индекс элемента, соответствующего ссылке
    const index = Array.prototype.indexOf.call(reviewsPositionLinks, link);

    // Переходим к нужному элементу
    currentItem = index;
    reviewsList.scrollLeft = currentItem * reviewsList.children[0].offsetWidth;

    // Обновляем активную ссылку
    updateActiveLink();
  });
});

// Обновляем активную ссылку
const updateActiveLink = () => {
  // Удаляем класс активности со всех ссылок
  reviewsPositionLinks.forEach((link) => {
    link.classList.remove("reviews__position-link--active");
  });

  // Добавляем класс активности к активной ссылке
  reviewsPositionLinks[currentItem].classList.add("reviews__position-link--active");
};*/

const reviewsList = document.getElementById("reviews-list");
const reviewsBtns = document.querySelectorAll(".reviews-btn");
const reviewsPositionLinks = document.querySelectorAll(".reviews__position-link");

let currentItemReviews = 0;

// Устанавливаем начальное положение активной ссылки
reviewsPositionLinks[currentItemReviews].classList.add("reviews__position-link--active");

// Обрабатываем нажатия на кнопки
reviewsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Проверяем, является ли кнопка кнопкой "Назад"
    if (btn.id === "reviews-btn-prev") {
      // Если это кнопка "Назад", проверяем, не является ли текущий элемент первым
      if (currentItemReviews > 0) {
        // Если текущий элемент не первый, переходим к предыдущему элементу
        currentItemReviews--;
      }
    } else {
      // Если это не кнопка "Назад", проверяем, не является ли текущий элемент последним
      if (currentItemReviews < reviewsList.children.length - 1) {
        // Если текущий элемент не последний, переходим к следующему элементу
        currentItemReviews++;
      }
    }

    // Прокручиваем список к нужному элементу
    reviewsList.scrollLeft = currentItemReviews * reviewsList.children[0].offsetWidth;

    // Обновляем активную ссылку
    updateActiveLink();
  });
});

// Обрабатываем нажатия на ссылки
reviewsPositionLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Получаем индекс элемента, соответствующего ссылке
    const index = Array.prototype.indexOf.call(reviewsPositionLinks, link);

    // Переходим к нужному элементу
    currentItemReviews = index;
    reviewsList.scrollLeft = currentItemReviews * reviewsList.children[0].offsetWidth;

    // Обновляем активную ссылку
    updateActiveLink();
  });
});

// Обновляем активную ссылку
const updateActiveLink = () => {
  // Удаляем класс активности со всех ссылок
  reviewsPositionLinks.forEach((link) => {
    link.classList.remove("reviews__position-link--active");
  });

  // Добавляем класс активности к активной ссылке
  reviewsPositionLinks[currentItemReviews].classList.add("reviews__position-link--active");
};

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

/* Modal Application */

const promotionBtn1 = document.querySelector('#promotion-btn1');
const promotionBtn2 = document.querySelector('#promotion-btn2');
const modalApplication = document.querySelector('#modal-application');
const modalApplicationClose = document.querySelector('#modal-application-close');
  
promotionBtn1.addEventListener('click', ()=> {
  modalApplication.classList.toggle('modal-open');
  body.classList.toggle('body-stop');
});

promotionBtn2.addEventListener('click', ()=> {
  modalApplication.classList.toggle('modal-open');
  body.classList.toggle('body-stop');
});

modalApplicationClose.addEventListener('click', ()=> {
  modalApplication.classList.remove('modal-open');
  body.classList.remove('body-stop');
});

/* Application Form*/

const TOKEN = "5841273300:AAE0132vKZVDuAGliV_J3UhliPh70z8uWB4";
const CHAT_TD = "733926217";
const URI_API=`https://api.telegram.org/bot${ TOKEN }/sendMessage`;

document.getElementById('application-form').addEventListener('submit', function(e) {
  e.preventDefault();

  let massage = `<b>Заявка с сайта!</b>\n`;
  massage += `<b>Тип сайта: </b> ${this.tupe.value}\n`;
  massage += `<b>Бюджет: </b> ${this.price.value}\n`;
  massage += `<b>Сообщение: </b> ${this.text.value}\n`;
  massage += `<b>Имя отправителя: </b> ${this.name.value}\n`;
  massage += `<b>Телефон отправителя: </b> ${this.tel.value}\n`;
  massage += `<b>Почта отправителя: </b> ${this.email.value}`;

  axios.post(URI_API, {
    chat_id: CHAT_TD,
    parse_mode: 'html',
    text: massage
  })
});

/* Call Form*/

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

/* Call Form*/

document.getElementById('modal-application-form').addEventListener('submit', function(e) {
  e.preventDefault();

  let massage = `<b>Заявка на продвижение Яндекс Директ</b>\n`;
  massage += `<b>ССылка на сайт: </b> ${this.url.value}\n`;
  massage += `<b>Почта отправителя: </b> ${this.email.value}\n`;
  massage += `<b>Телефон отправителя: </b> ${this.tel.value}\n`;
  massage += `<b>Ссылка на соц. сеть: </b> ${this.urlSocial.value}`;

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

/**/

$('.scrollFix').css("pointer-events","none");
$('body').on('touchstart', function(e) {
    $('.scrollFix').css("pointer-events","auto");
});
$('body').on('touchmove', function(e) {
    $('.scrollFix').css("pointer-events","none");
});
$('body').on('touchend', function(e) {
    setTimeout(function() {
        $('.scrollFix').css("pointer-events", "none");
    },0);
});
