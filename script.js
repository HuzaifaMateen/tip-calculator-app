let input = document.getElementById("dollar");
let input2 = document.getElementById("person");
let btn1 = document.getElementById("five");
let btn2 = document.getElementById("ten");
let btn3 = document.getElementById("fifteen");
let btn4 = document.getElementById("twenty");
let btn5 = document.getElementById("fifty");
let custom = document.getElementById("custom");
let amount = document.getElementById("total-amount");
let person = document.getElementById("total-person");
let btn = document.getElementById("btn"); 
let error = document.getElementById("error");
btn1.addEventListener("click", function(){
    if(input2.value === ""){
        amount.innerText = "$0.00";
        person.innerText = "$0.00";
        input2.style.border = "2px solid Red";
        error.innerText = "Can't be zero";
    } else {
        let totalTip = input.value * 5 / 100 / input2.value;
        amount.innerText = "$" + totalTip.toFixed(2);
        let totalAmount = input.value  / input2.value + totalTip;
        person.innerText = "$" + totalAmount.toFixed(2);
        input2.style.border = "none";
        error.innerText = "";
    }
});
btn2.addEventListener("click", function(){
    if(input2.value === ""){
        amount.innerText = "$0.00";
        person.innerText = "$0.00";
        input2.style.border = "2px solid Red";
        error.innerText = "Can't be zero";
    } else {
        let totalTip = input.value * 10 / 100 / input2.value;
        amount.innerText = "$" + totalTip.toFixed(2);
        let totalAmount = input.value / input2.value + totalTip;
        person.innerText = "$" + totalAmount.toFixed(2);
        input2.style.border = "none";
        error.innerText = "";
    }
});
btn3.addEventListener("click", function(){
    if(input2.value === ""){
        amount.innerText = "$0.00";
        person.innerText = "$0.00";
        input2.style.border = "2px solid Red";
        error.innerText = "Can't be zero";
    } else {
        let totalTip = input.value * 15 / 100 / input2.value;
        amount.innerText = "$" + totalTip.toFixed(2);
        let totalAmount = input.value / input2.value + totalTip;
        person.innerText = "$" + totalAmount.toFixed(2);
        input2.style.border = "none";
        error.innerText = "";
    }

});

btn4.addEventListener("click", function(){
    if(input2.value === ""){
        amount.innerText = "$0.00";
        person.innerText = "$0.00";
        input2.style.border = "2px solid Red";
        error.innerText = "Can't be zero";
    } else {
        let totalTip = input.value * 25 / 100 / input2.value;
        amount.innerText = "$" + totalTip.toFixed(2);
        let totalAmount = input.value / input2.value + totalTip;
        person.innerText = "$" + totalAmount.toFixed(2);
        input2.style.border = "none";
        error.innerText = "";
    }
});

btn5.addEventListener("click", function(){
    if(input2.value === ""){
        amount.innerText = "$0.00";
        person.innerText = "$0.00";
        input2.style.border = "2px solid Red";
        error.innerText = "Can't be zero";
    } else {
        let totalTip = input.value * 50 / 100 / input2.value;
        amount.innerText = "$" + totalTip.toFixed(2);
        let totalAmount = input.value / input2.value + totalTip;
        person.innerText = "$" + totalAmount.toFixed(2);
        input2.style.border = "none";
        error.innerText = "";
    }
});

custom.addEventListener("input", function(){
    if(input2.value === ""){
        amount.innerText = "$0.00";
        person.innerText = "$0.00";
        input2.style.border = "2px solid Red";
        error.innerText = "Can't be zero";
    } else {
        let totalTip = input.value * custom.value / 100 / input2.value;
        amount.innerText = "$" + totalTip.toFixed(2);
        let totalAmount = input.value / input2.value + totalTip;
        person.innerText = "$" + totalAmount.toFixed(2);
        input2.style.border = "none";
        error.innerText = "";
    }
})
btn.addEventListener("click", function(){
    amount.innerText = "$0.00";
    person.innerText = "$0.00";
    input.value = "";
    input2.value = "";
});