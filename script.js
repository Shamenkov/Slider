const rigthArrow = document.querySelector('.right_arrow');
const leftArrow = document.querySelector(".left_arrow")
const img = document.querySelector('.img');
const circle1 = document.querySelector('.btn_circle1');
const circle2 = document.querySelector('.btn_circle2');
const circle3 = document.querySelector('.btn_circle3');
const linkAdmiral = document.getElementById("aidmiral");
const linkSochi = document.getElementById("sochi");
const linkPatriotic = document.getElementById("patriotic");
let paragraphCity = document.querySelector(".inner_text_city");
let paragraphApartment = document.querySelector(".inner_text_apartment");
let paragraphTime = document.querySelector(".inner_text_time");
let paragraphCost = document.querySelector(".inner_text_cost");
var counterVal = 0;

function innerTextForAdmiral () {
    paragraphCity.innerHTML = 'Rostov-on-Don LCD admiral'
    paragraphApartment.innerHTML = '81 m2';
    paragraphTime.innerHTML = '3,5 months';
    paragraphCost.innerHTML = 'Upon request';
    img.setAttribute("src", "./image/admiral.png");
    linkAdmiral.className = "active-link";
    linkSochi.className = "nav-ul-link";
    linkPatriotic.className = "nav-ul-link";
    circle1.setAttribute("src", "./image/active_circle.svg")
    circle2.setAttribute("src", "./image/disable_circle 7.3.svg")
    circle3.setAttribute("src", "./image/disable_circle 7.3.svg")
};

function innerTextForSochi () {
    paragraphCity.innerHTML = 'Sochi Thieves'
    paragraphApartment.innerHTML = '105 m2';
    paragraphTime.innerHTML = '4 months';
    paragraphCost.innerHTML = 'Upon request';
    img.setAttribute("src", "./image/sochi.png");
    linkAdmiral.className = "nav-ul-link";
    linkSochi.className = "active-link";
    linkPatriotic.className = "nav-ul-link";
    circle1.setAttribute("src", "./image/disable_circle 7.3.svg")
    circle2.setAttribute("src", "./image/active_circle.svg")
    circle3.setAttribute("src", "./image/disable_circle 7.3.svg")
};

function innerTextForPatrioric () {
    paragraphCity.innerHTML = 'Rostov-on-Don Patriotic'
    paragraphApartment.innerHTML = '93 m2';
    paragraphTime.innerHTML = '3 months';
    paragraphCost.innerHTML = 'Upon request';
    img.setAttribute("src", "./image/patriotic.png");
    linkAdmiral.className = "nav-ul-link";
    linkSochi.className = "nav-ul-link";
    linkPatriotic.className = "active-link";
    circle1.setAttribute("src", "./image/disable_circle 7.3.svg")
    circle2.setAttribute("src", "./image/disable_circle 7.3.svg")
    circle3.setAttribute("src", "./image/active_circle.svg")
};


function updateDisplay(val) {
    if(val === 1){
        innerTextForSochi();
    }if(val === 2){
        innerTextForPatrioric();
    }if(val === 0){
        innerTextForAdmiral ();
    }
};

leftArrow.addEventListener('click', () => {
    counterVal -= 1;
    if (counterVal < 0){
        counterVal = 2
    };
    updateDisplay(counterVal);
});

rigthArrow.addEventListener('click', () => {
    counterVal += 1;
    if (counterVal >=3){
        counterVal = 0
    };
    updateDisplay(counterVal);
});

circle1.addEventListener('click', () => {
    innerTextForAdmiral ()
    counterVal = 0
});

circle2.addEventListener('click', () => {
    innerTextForSochi ();
    counterVal = 1
});

circle3.addEventListener('click', () => {
    innerTextForPatrioric ();
    counterVal = 2
});

linkAdmiral.addEventListener('click',() =>{
    innerTextForAdmiral ()
})
linkSochi.addEventListener('click',() =>{
    innerTextForSochi ();
})
linkPatriotic.addEventListener('click',() =>{
    innerTextForPatrioric ();
})