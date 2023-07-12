const eventosValidator = {
    Evento: {
        required: 'O Campo Evento não pode se nulo',
        maxLength: { value: 100, message: 'The Max letter is 100'}
    },
    Data: {
        required: 'O Campo Data não pode se nulo',
        minLength: { value: 6, message: 'o minimo de caracteres é 6'},
        maxLength: { value: 10, message: 'o maximo de caracteres é 10'}
    },
    Descricao: {
        required: 'O Campo Descriçao não pode se nulo',
        maxLength: { value: 500, message: 'The Max letter is 500'}
    },
    Localidade: {
        required: 'O Campo Descriçao não pode se nulo',
        minLength: { value: 2, message: 'o minimo de caracteres é 2'},
        maxLength: { value: 35, message: 'o maximo de caracteres é 35'},
        // pattern: { value: /^[A-Za-z]*$/, message: 'Apenas Letras'}
    }
}

export default eventosValidator