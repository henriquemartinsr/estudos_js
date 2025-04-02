const conversionFactor = 0.01;

function getClassificationDetail(classification) {
    switch (classification) {
        case 'Underweight':
            return 'Abaixo do peso'
        case 'Regular':
            return 'Peso normal'
        case 'Overweight':
            return 'Acima do peso'  
        case 'Obesity':
            return 'Obesidade'
        default:
            return 'Falha ao encontrar descrição status';                                  
    }
}  

function classificateIMC(imc) {
    if (imc < 18.5) {
        return 'Underweight';
    }
    else if (imc >= 18.5 && imc < 25){
        return 'Regular';
    }
    else if (imc >= 25 && imc < 30){
        return 'Overweight';
    }
    else {
        return 'Obesity';
    }
}

function calculateIMC(person) {
    let height = person.height;
    let weight = person.weight;
        
    height *= conversionFactor;
    
    let imc = weight / (height * height);
    const classification = classificateIMC(imc);
    const classificationDetail = getClassificationDetail(classification);
    console.log(classificationDetail);
    const result = "O resultado do IMC é de " + imc;
    
    const isHealthy = true;

    return {
        name: person.name,
        imc,
        classification,
        classificationDetail,
        result,
        isHealthy,
    }
}

const person = {
    name: 'Henrique',
    weight: 84.5,
    height: 168,
}

console.log(calculateIMC(person));