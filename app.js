
let name = prompt("please enter your name");
let age = prompt("please enter your age");
let gender = "";
let array = [];

function mygender(x, y) {
    while (gender !== x && gender !== y) {
        gender = prompt("enter your gender");
    }
}
mygender("male", "female")


let drink = prompt("enter your drink  ");
if ( drink=="cold" && drink == "hot") { alert("ok") }
let nameofdrink = prompt(" write the drink`s name ");
{ alert('your drink is getting prepared '); }

array.push(name, gender, age, nameofdrink)
for (let i = 0; i < array.length; i++) { console.log(array[i]) }







let dom = document.getElementById("dom")
console.log(dom)
let div = document.createElement("div")

let p = document.createElement("p")
p.textContent = "name: "+name


let ul = document.createElement("ul")

let li1 = document.createElement("li")
li1.textContent = "gender:"+ gender 

let li2 = document.createElement("li")
li2.textContent = "age : "+ age
let li3 = document.createElement("li")
li3.textContent = "drink"+ drink+" "+nameofdrink



dom.appendChild(div)
div.appendChild(p)
div.appendChild(ul)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)

