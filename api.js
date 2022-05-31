const getAllAnimals = () => {
    return fetch('http://localhost:3000/animals')
        .then(response => response.json())
}
const createAnimal = (objAnimal) => {
    return fetch('http://localhost:3000/animals',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objAnimal)
        })
        .then(response => response.json())
}

