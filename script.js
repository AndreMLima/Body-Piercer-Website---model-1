// Interaction with the pages buttons
const sectionPhoto = document.querySelector('.section-photo')
const sectionPiercings = document.querySelector('.section-piercings')
const sectionJobs = document.querySelector('.section-jobs')
const sectionAvaliations = document.querySelector('.section-avaliations')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const btn5 = document.querySelector('.btn5')
const btn6 = document.querySelector('.btn6')
const btn7 = document.querySelector('.btn7')
const btn8 = document.querySelector('.btn8')
const btn9 = document.querySelector('.btn9')
const btn10 = document.querySelector('.btn10')
const btn11 = document.querySelector('.btn11')
const btn12 = document.querySelector('.btn12')
const btn13 = document.querySelector('.btn13')
const btn14 = document.querySelector('.btn14')
const btn15 = document.querySelector('.btn15')
const btn16 = document.querySelector('.btn16')


btn1.onclick = function(){button1()};
btn2.onclick = function(){button2()};
btn4.onclick = function(){button4()};
btn5.onclick = function(){button1()};
btn6.onclick = function(){button2()};
btn7.onclick = function(){button4()};
btn8.onclick = function(){button1()};
btn9.onclick = function(){button2()};
btn10.onclick = function(){button4()};
btn11.onclick = function(){button1()};
btn12.onclick = function(){button2()};
btn13.onclick = function(){button4()};
btn14.onclick = function(){button1()};
btn15.onclick = function(){button2()};
btn16.onclick = function(){button4()};

function button1 (){
    sectionPhoto.style.display = "none";
    sectionPiercings.style.display = "flex";
    sectionJobs.style.display = "none";
    sectionAvaliations.style.display = "none";
}
function button2 (){
    sectionPhoto.style.display = "none";
    sectionPiercings.style.display = "none";
    sectionJobs.style.display = "flex";
    sectionAvaliations.style.display = "none";
}
function button4 (){
    sectionPhoto.style.display = "none";
    sectionPiercings.style.display = "none";
    sectionJobs.style.display = "none";
    sectionAvaliations.style.display = "flex";
}


// Interaction with the back and forwards piercings buttons

const slides = document.querySelectorAll('.nav-piercings');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener('click', function(){
    counter++;
    carousel();
});

prevBtn.addEventListener('click', function(){
    counter--;
    carousel();
});

function carousel(){

    if(counter === slides.length){
        counter = 0;
    };
    if(counter < 0){
        counter = slides.length -1;
    };

    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
};


// Interaction with the back and forwards jobs buttons

const slidesJobs = document.querySelectorAll('.jobs');
const nextBtn2 = document.querySelector('#nextBtn2');
const prevBtn2 = document.querySelector('#prevBtn2');

slidesJobs.forEach(function(slide2, index){
    slide2.style.left = `${index * 100}%`;
});

let counter2 = 0;

nextBtn2.addEventListener('click', function(){
    counter2++;
    carousel2();
});

prevBtn2.addEventListener('click', function(){
    counter2--;
    carousel2();
});

function carousel2(){

    if(counter2 === slidesJobs.length){
        counter2 = 0;
    };
    if(counter2 < 0){
        counter2 = slidesJobs.length -1;
    };

    slidesJobs.forEach(function(slide2){
        slide2.style.transform = `translateX(-${counter2 * 100}%)`;
    })
};

// Interaction with the back and forwards avaliations buttons

const slidesAvaliations = document.querySelectorAll('.nav-avaliations');
const nextBtn3 = document.querySelector('#nextBtn3');
const prevBtn3 = document.querySelector('#prevBtn3');

slidesAvaliations.forEach(function(slide3, index){
    slide3.style.left = `${index * 100}%`;
});

let counter3 = 0;

nextBtn3.addEventListener('click', function(){
    counter3++;
    carousel3();
});

prevBtn3.addEventListener('click', function(){
    counter3--;
    carousel3();
});

function carousel3(){

    if(counter3 === slidesAvaliations.length){
        counter3 = 0;
    };
    if(counter3 < 0){
        counter3 = slidesAvaliations.length -1;
    };

    slidesAvaliations.forEach(function(slide3){
        slide3.style.transform = `translateX(-${counter3 * 100}%)`;
    })
};