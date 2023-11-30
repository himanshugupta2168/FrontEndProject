
// const time= require('./timer')
const buttons = document.querySelectorAll('.Cart-button');
const sale = document.querySelector('.sale-alert');
const mini = document.querySelector('.minimise');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.seconds');

buttons.forEach(e=>{
    e.addEventListener('click',()=>{
        alert('Addes to cart successfully ');
    });
})

// count down function 
function timer(){
    const expDate = new Date ().getDate();
    const expMonth= new Date().getMonth();
    var countDownDate = new Date(`${expMonth} ${expDate+1}, 2024 00:00:00`).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    hour.innerHTML= hours;
    minute.innerHTML=minutes;
    second.innerHTML= seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Sorry 😔😔";
    }
    }, 1000);


}



function minimize(){
    sale.classList.add('none');
}
mini.addEventListener('click', minimize)
// console.log(time.timer)
document.onload= timer();