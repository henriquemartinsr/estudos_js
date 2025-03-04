<<<<<<< HEAD
const conversionFactor = 0.01;

function classificateIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    }
    else if (imc >= 18.5 && imc < 25){
        return "Peso normal";
    }
    else if (imc >= 25 && imc < 30){
        return "Sobrepeso";
    }
    else {
        return "Obesidade";
    }
}

function calculateIMC(person) {
    let height = person.height;
    let weight = person.weight;
        
    height *= conversionFactor;
    
    let imc = weight / (height * height);
    const classification = classificateIMC(imc);
    const result = "O resultado do IMC é de " + imc;
    
    const isHealthy = true;

    return {
        name: person.name,
        imc,
        classification,
        result,
        isHealthy,
    }
}

const person = {
    name: 'Henrique',
    weight: 84.5,
    height: 168,
}

=======
const conversionFactor = 0.01;

function classificateIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    }
    else if (imc >= 18.5 && imc < 25){
        return "Peso normal";
    }
    else if (imc >= 25 && imc < 30){
        return "Sobrepeso";
    }
    else {
        return "Obesidade";
    }
}

function calculateIMC(person) {
    let height = person.height;
    let weight = person.weight;
        
    height *= conversionFactor;
    
    let imc = weight / (height * height);
    const classification = classificateIMC(imc);
    const result = "O resultado do IMC é de " + imc;
    
    const isHealthy = true;

    return {
        name: person.name,
        imc,
        classification,
        result,
        isHealthy,
    }
}

const person = {
    name: 'Henrique',
    weight: 84.5,
    height: 168,
}

>>>>>>> 4e7aa3d375787a295553d3c4e695b5f18fd737a6
console.log(calculateIMC(person));