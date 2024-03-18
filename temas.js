'use strict'
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('emo-theme')

    var className = document.body.className;
    if(className == "barbie-theme"){
        this.textContent = "Emo"
    }
    else{
        this.textContent = "Barbie";
    }
});
