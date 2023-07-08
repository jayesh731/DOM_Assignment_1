const incrementBtn = document.querySelector(".Increment");
const decrementBtn = document.querySelector(".Decrement");
const resetbtn = document.querySelector(".resetbtn");
const displayValue = document.querySelector(".displayValue");

// Increment Button Click
incrementBtn.addEventListener("click", function() {
    const value = Number(displayValue.innerHTML);
    if(value >= 10){
        alert("More Then 10 Number Is Not Allowed");
    }
    else{
        displayValue.innerText = value + 1;
    }
 });

 // Decrement Button Click
 decrementBtn.addEventListener("click",function(){
     const value = Number(displayValue.innerText);
     if(value > 0){
        displayValue.innerText = value - 1;
     }
     else{
         alert("Negative Value Is Not Allowed")
     }
 });

 // Reset Button Click
 resetbtn.addEventListener("click",function(){
    displayValue.innerText = 0;
 });





// incrementBtn.forEach((content) => {
//     content.addEventListener("click", function() {
//         console.log(2222222)
//     });
// });