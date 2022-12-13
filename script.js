// const txt1 = document.getElementById('cardholderName');
// const txt2 = document.getElementById('number');
// const txt3 = document.getElementById('cvc');
// const clickButton = document.getElementById('submit-btn');
// const outputName = document.getElementById('card-name');
// const outputNumber = document.getElementById('card-number');
// const outputCVC = document.getElementById('cvc-number')

// function function1(){
//     outputName.innerHTML = txt1.value;
//     outputNumber.innerHTML = txt2.value;
//     outputCVC.innerHTML = txt3.value;
// }

// click buttton to update input
// clickButton.addEventListener('click',function1);

// when the page is loaded
window.onload = function () {
  document.getElementById("card-number").innerHTML = "0000 0000 0000 0000";
  document.getElementById("cvc-number").innerHTML = "537";
  document.getElementById("card-name").innerHTML = "Obiajulu Ebuka";
  document.getElementById("card-expiry").innerHTML = "05/25";
};

// for the form inputs
const cardholdername = document.getElementById("cardholderName");
const cardnumber = document.getElementById("number");
const cvc = document.getElementById("cvc");

cardholdername.addEventListener("input", function () {
  if (cardholdername.value.length == 0) {
    document.getElementById("card-name").innerHTML = 'Obiajulu Ebuka';
  } else {
    document.getElementById("card-name").innerHTML = cardholdername.value;
  }
});

// To break up the digits in card number
cardnumber.addEventListener("input", function (event) {
  if ((event.target.value.length) <= 16) {
    this.value = event.target.value;
  } else {
    const str = this.value.split("");
    str.pop();
    this.value = str.join("");
  }
  if (cardnumber.value.length == 0) {
    document.getElementById("card-number").innerHTML = "0000 0000 0000 0000";
  } else {
    if (cardnumber.value.length >= 19) return;
    let arr = cardnumber.value.split("");
    let formattedArr = [];

    arr.forEach((item, index) => {
      if ((index + 1) % 4 === 0) {
        formattedArr.push(item);
        formattedArr.push("-");
      } else {
        formattedArr.push(item);
      }
    });

    document.getElementById("card-number").innerHTML = formattedArr
      .join("")
      .replaceAll("-", " ");
  }
});

// cardnumber.addEventListener("click", () => {
//   this.disabled = false;
// });

cvc.addEventListener("input", function () {
  if (cvc.value.length == 0) {
    document.getElementById("cvc-number").innerHTML = "020";
  } else {
    document.getElementById("cvc-number").innerHTML = cvc.value;
  }
});

// cardnumber_mask.on('accept', function (){
//     if(cardnumber_mask.value.length == 0){
//         document.getElementById('card-number').innerHTML = 0000 0000 0000 0000;
//     }
//     else{
//         document.getElementById('card-number').innerHTML = cardnumber_mask.value;
//     }
// });



