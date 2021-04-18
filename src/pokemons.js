// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons

function getAllFirePokemons() {
    let firePokemons = pokemons.filter((elem, index) => {
        if (elem.type.includes("Fire")) {
           return true
        }
        else {
            return false
        }
    })

    return firePokemons;
}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon

function shortestPokemon(pokemons) {

    if(pokemons.length === 0) {
        return 0;
    }

    let littlePokemon = 0
    littlePokemon = pokemons.sort((elem1, elem2) => {
        if (elem1.height > elem2.height){
            return 1
        } else if (elem1.height < elem2.height){
            return -1
        } else {
            return 0
        }
    })
    
    return littlePokemon[0].name
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

function candyAverage(pokemons) {
    let candy_count = 0

    if(pokemons.length === 0){
        return 0
    }

    for (let i = 0; i < pokemons.length; i++) {
        if(pokemons[i].candy_count != undefined) {
            candy_count = candy_count + pokemons[i].candy_count
        }
    }

    let candyCountAverage = candy_count / pokemons.length
    return Number(candyCountAverage.toFixed(2))
}



// Iteration 4: images for the first 10 `Ground`  Pokemons

function getGroundPokeImg(pokemons) {
    if(pokemons.length === 0){
        return 0
    }

    let groundPoke = pokemons.filter((elem, index) => {
        return elem.type.includes('Ground') 
    })
    .map((elem, index) => {
        return elem.img    
    })
    .slice(0, 10);

    return groundPoke
}

// Iteration 5: Find all pokemon names heavier than Pikachu

function getHeavyPokemons(pokemons) {
    if(pokemons.length === 0){
        return 0
    }

    let pikachu = pokemons.filter((elem, index) => {
        return elem.name === 'Pikachu'
    })[0]

    let heavierPokes = pokemons.filter((elem, index) => {
        return Number(pikachu.weight.split(" ")[0]) < Number(elem.weight.split(" ")[0])   
    })
    .map ((elem, index) => {
        return elem.name
    })

    console.log(heavierPokes)
    return heavierPokes
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

function orderAlphabetically(pokemons) {
    let clonedArray = JSON.parse(JSON.stringify(pokemons)) 

    clonedArray = clonedArray.sort ((elem1, elem2) => {
        if(elem1.name > elem2.name) {
            return 1

        } else if (elem1.name < elem2.name) {       
            return -1

        } else {
            return 0
        }
    })
    .map((elem, index) => {
        return elem.name
    })

    return clonedArray.slice(0, 20);
}

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 

function strongPokemons(pokemons) {
    let strongPokes = pokemons.filter ((elem, index) => {
        if (elem.weaknesses.length == 1)
        return elem
    })
    .map((elem, index) => {
        return elem.name
    })

    return strongPokes.slice(0, 15);
}