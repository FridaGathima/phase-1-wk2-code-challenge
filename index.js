let getAnimals = fetch("http://localhost:3000/characters") // I used fetch() to get the data from the JSON server to javascript
    .then ((response) => response.json()) 
    .then ((data) => {
        let ul = document.querySelector("ul")  // The names of the animals will be under ul 
        data.forEach((characters) => {              //I looped through the data and out of it picked each character 
            const li = document.createElement("li") // This is to create li for every character instead of doing it in HTML
            li.textContent = characters.name  // These are the names of the animals that will be displayed in the webpage
            ul.appendChild(li)
        })
    })


function description (){
    let more = document.createElement("div")
    more.className = "moreDescription"
    more.innerText = "characters.id"
    animals.appendChild(more)
}
//description()



// On clicking
//const ul = document.querySelector("ul")
//ul.addEventListener("click", (e) =>{
//console.log ("click")
//})

