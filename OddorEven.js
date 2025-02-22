
let number = prompt("Enter a number:");
number = Number(number);

if (isNaN(number)) {
    alert("Please enter a valid number.");
} else {
    if (number % 2 === 0) {
        alert(number + " is even.");
    } else {
        alert(number + " is odd.");
    }
}
for (let i = 1; i<= 10; i++) {
    console.log(i);
    
}