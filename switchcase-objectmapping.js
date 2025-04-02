let dia = 4;

const DAYS_OF_WEEK_DICT = {
    1: 'Domingo',
    2: 'Segunda-feira',
    3: 'Terça-feira',
    4: 'Quarta-feira',
    5: 'Quinta-feira',
    6: 'Sexta-feira',
    7: 'Sábado',
}

console.log(DAYS_OF_WEEK_DICT[dia] || 'Esse dia não existe')