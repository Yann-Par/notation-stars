document.addEventListener('DOMContentLoaded', function(){



    






const submit = document.getElementById("button");


let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");

let numbersOfStars = 0;

let starsNote = document.getElementById('starsNote');






one.addEventListener("click", function(){

    one.style.backgroundColor = 'hsl(25, 97%, 53%)';
    one.style.color = 'hsl(0, 0%, 100%)';

    two.style.backgroundColor = 'hsl(213, 19%, 25%)';
    two.style.color = 'white';
    three.style.backgroundColor = 'hsl(213, 19%, 25%)';
    three.style.color = 'white';
    four.style.backgroundColor = 'hsl(213, 19%, 25%)';
    four.style.color = 'white';
    five.style.backgroundColor = 'hsl(213, 19%, 25%)';
    five.style.color = 'white';

    numbersOfStars = one.value;
    starsNote.innerHTML = numbersOfStars;
    console.log(numbersOfStars) ;

})

two.addEventListener("click", function(){

    two.style.backgroundColor = 'hsl(25, 97%, 53%)';
    two.style.color = 'hsl(0, 0%, 100%)';


    one.style.backgroundColor = 'hsl(213, 19%, 25%)';
    one.style.color = 'white';
    three.style.backgroundColor = 'hsl(213, 19%, 25%)';
    three.style.color = 'white';
    four.style.backgroundColor = 'hsl(213, 19%, 25%)';
    four.style.color = 'white';
    five.style.backgroundColor = 'hsl(213, 19%, 25%)';
    five.style.color = 'white';
    

    numbersOfStars = two.value;
    starsNote.innerHTML = numbersOfStars;
    console.log(numbersOfStars) ;

})

three.addEventListener("click", function(){

    three.style.backgroundColor = 'hsl(25, 97%, 53%)';
    three.style.color = 'hsl(0, 0%, 100%)';

    

    two.style.backgroundColor = 'hsl(213, 19%, 25%)';
    two.style.color = 'white';
    one.style.backgroundColor = 'hsl(213, 19%, 25%)';
    one.style.color = 'white';
    four.style.backgroundColor = 'hsl(213, 19%, 25%)';
    four.style.color = 'white';
    five.style.backgroundColor = 'hsl(213, 19%, 25%)';
    five.style.color = 'white';

    numbersOfStars = three.value;
    starsNote.innerHTML = numbersOfStars;
    console.log(numbersOfStars) ;

})

four.addEventListener("click", function(){

    four.style.backgroundColor = 'hsl(25, 97%, 53%)';
    four.style.color = 'hsl(0, 0%, 100%)';

    two.style.backgroundColor = 'hsl(213, 19%, 25%)';
    two.style.color = 'white';
    three.style.backgroundColor = 'hsl(213, 19%, 25%)';
    three.style.color = 'white';
    one.style.backgroundColor = 'hsl(213, 19%, 25%)';
    one.style.color = 'white';
    five.style.backgroundColor = 'hsl(213, 19%, 25%)';
    five.style.color = 'white';


    numbersOfStars = four.value;
    starsNote.innerHTML = numbersOfStars;
    console.log(numbersOfStars) ; 
})

five.addEventListener("click", function(){

    five.style.backgroundColor = 'hsl(25, 97%, 53%)';
    five.style.color = 'hsl(0, 0%, 100%)';

    two.style.backgroundColor = 'hsl(213, 19%, 25%)';
    two.style.color = 'white';
    three.style.backgroundColor = 'hsl(213, 19%, 25%)';
    three.style.color = 'white';
    four.style.backgroundColor = 'hsl(213, 19%, 25%)';
    four.style.color = 'white';
    one.style.backgroundColor = 'hsl(213, 19%, 25%)';
    one.style.color = 'white';



    numbersOfStars = five.value;
    starsNote.innerHTML = numbersOfStars;
    console.log(numbersOfStars) ;
})


starsNote.innerHTML = numbersOfStars;



});


