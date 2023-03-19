
let name = prompt("please enter your name");
let gender = "";
let array = [];
while (gender !== "male" && gender !== "female"){
    gender = prompt("enter your gender");
}

let drink = prompt("do you want cold or hot drink ");
if (drink == "cold" || drink == "hot") { alert("ok") }
let nameofdrink = prompt(" write the drink`s name ");
{ alert('your drink is getting prepared '); }

array.push (name, gender, drink, nameofdrink)
for (let i = 0; i < array.length; i++) { console.log(array[i]) }
