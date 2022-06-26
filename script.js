const sectionPhoto = document.querySelector('.section-photo')
const sectionPiercings = document.querySelector('.section-piercings')
const sectionJobs = document.querySelector('.section-jobs')
const sectionWpp = document.querySelector('.section-wpp')
const sectionAvaliations = document.querySelector('.section-avaliations')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')

btn1.onclick = function(){button1()};
btn2.onclick = function(){button2()};
btn3.onclick = function(){button3()};
btn4.onclick = function(){button4()};

function button1 (){
    sectionPhoto.style.display = "none";
    sectionPiercings.style.display = "flex";
    sectionJobs.style.display = "none";
    sectionWpp.style.display = "none";
    sectionAvaliations.style.display = "none";
}
function button2 (){
    sectionPhoto.style.display = "none";
    sectionPiercings.style.display = "none";
    sectionJobs.style.display = "flex";
    sectionWpp.style.display = "none";
    sectionAvaliations.style.display = "none";
}
function button3 (){
    sectionPhoto.style.display = "none";
    sectionPiercings.style.display = "none";
    sectionJobs.style.display = "none";
    sectionWpp.style.display = "flex";
    sectionAvaliations.style.display = "none";
}
function button4 (){
    sectionPhoto.style.display = "none";
    sectionPiercings.style.display = "none";
    sectionJobs.style.display = "none";
    sectionWpp.style.display = "none";
    sectionAvaliations.style.display = "flex";
}