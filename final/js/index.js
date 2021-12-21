/* Nav button */
var btn = document.querySelector('.nav__button'),
    head = document.querySelector('.head');

btn.addEventListener("click", function(){
this.classList.toggle('open');
head.classList.toggle('active');
});

