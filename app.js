const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent the default form submission

    let username = event.target.username.value;
    let age = event.target.age.value;
    let drink = event.target.drink.value;
    let drinktype = event.target.drinktype.value;


    let dom = document.getElementById("dom")
    let div = document.createElement("div")

    let p = document.createElement("p")
    p.textContent = "name: " + username


    let ul = document.createElement("ul")



    let li2 = document.createElement("li")
    li2.textContent = "age : " + age
    let li3 = document.createElement("li")
    li3.textContent = "drink" + drink + " " + drinktype



    dom.appendChild(div)
    div.appendChild(p)
    div.appendChild(ul)
    ul.appendChild(li2)
    ul.appendChild(li3)






    form.reset();





});
