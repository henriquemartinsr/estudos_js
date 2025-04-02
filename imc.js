const conversionFactor = 0.01;

const IMC_STATUS_DICT ={
    Underweight: 'Underweight',
    Regular: 'Regular',
    Overweight: 'Overweight',
    Obesity: 'Obesity',
}
function getClassificationDetail(classification) {
    return {
       [IMC_STATUS_DICT.Underweight]: 'Abaixo do peso',
       [IMC_STATUS_DICT.Regular]: 'Peso normal',
       [IMC_STATUS_DICT.Overweight]: 'Acima do peso',
       [IMC_STATUS_DICT.Obesity]: 'Obesidade',
    }[classification] || 'Falha ao encontrar a descrição do status'
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