let numbers = [1, 2, 3, 4, 5];
let listHTML = "";

for (let i = 0; i < numbers.length; i++) {
    listHTML += "<li>Number at index " + i + " is " + numbers[i] + "</li>";
}

document.getElementById("numberList").innerHTML = listHTML;
//for is for looping numbers that always starts from 0, therefore it shows 0 is 1, 1 is 2 and so forth//
