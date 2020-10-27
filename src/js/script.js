// hier komt je code
console.log("Hallo wereld!");

var menu = document.querySelector('.menu');
menu.addEventListener('click', function(){
    if(this.classList.contains('open')){
        this.classList.remove('open');
        this.classList.add('closed');
    } else {
        this.classList.remove('closed');
        this.classList.add('open');
    }
})