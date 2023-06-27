
const animals = document.getElementById('animallist')
const animaldetail = document.getElementById('animaltypes')

fetch ("http://localhost:3000/characters")
.then (response => response.json())
.then (data => {
       data.forEach (animal => {
          console.log(animal)

        const animalItem = document.createElement("li")
        animalItem.innerText = animal.name
        animals.appendChild(animalItem)

       itemWhenClicked(animalItem, animal)
        displayAnimalDetail(animal)
 })
 })

function itemWhenClicked (animalItem, animal){
      animalItem.addEventListener ('click', ()=> {
     displayAnimalDetail (animal)
    })
}

function displayAnimalDetail (animal){
    animaldetail.innerHTML = ''

    const myimg = document.createElement('img')
    myimg.src = animal.image
    animaldetail.appendChild(myimg)

    const name = document.createElement ('p')
    name.innerText = animal.name
    animaldetail.appendChild(name)

    const votes = document.createElement ('p')
    votes.id = 'displayvotes'
    votes.innerText = animal.votes
    animaldetail.appendChild(votes)

    const votebutton = document.createElement('button')
    votebutton.id = 'votes'
    votebutton.innerText = 'VOTES'
    animaldetail.appendChild(votebutton)

    const resetbutton = document.createElement('button')
    resetbutton.id = 'resetbuttton'
    resetbutton.innerText = 'RESETVOTES'
    animaldetail.appendChild(resetbutton)

    const voting = document.getElementById('votes')
    voting.addEventListener('click', () => {
       const displayvotes = document.getElementById('displayvotes')
        displayvotes.innerText = (animal.votes)++
    })
}