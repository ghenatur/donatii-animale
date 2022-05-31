const animalForm = document.querySelector('#animal-form')
animalForm.addEventListener('submit', (e) => {  //submit-trimite
    e.preventDefault()  //Făcând clic pe un link, împiedicați linkul să urmărească adresa URL
    const animal = {
        name: e.target.name.value,   // target-tintire
        imgUrl: e.target.img_url.value,
        description: e.target.description.value,
        donation: 0
    }

    createAnimal(animal)
        .then(newAnimal => {
            console.log('succes', newAnimal)
        })
})

const adoptButton = document.querySelector('.btn')
const inp1 = document.querySelector('.inp1')
const inp2 = document.querySelector('.inp2')
const inp3 = document.querySelector('.inp3')

adoptButton.addEventListener('click', () => {
    setTimeout(() => {
        inp1.value = ''
        inp2.value = ''
        inp3.value = ''
    }, 2000)
})

fetch('http://localhost:3000/animals')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)

        const body = document.body
        const list = document.querySelector('.listAnimal')
        body.appendChild(list)

        data.forEach((item) => {
            const donateBut = document.createElement('button')
            const card = document.createElement('div')
            const name = document.createElement('h2')
            const img = document.createElement('img')
            const descri = document.createElement('h3')
            const donate = document.createElement('h4')
            const id = document.createElement('h4')

            list.appendChild(card)
            card.appendChild(id)
            card.appendChild(name)
            card.appendChild(img)
            card.appendChild(descri)
            card.appendChild(donateBut)
            card.appendChild(donate)

            id.textContent = item.id
            name.textContent = item.name
            descri.textContent = item.description
            donateBut.textContent = '1 euro'
            img.src = item.imgUrl

            donateBut.classList.add('donatButton')
            card.classList.add('card')
            img.classList.add('imgAnim')

        })
    })
