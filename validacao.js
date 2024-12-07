// Importando o Joi (validação)
import joi from "joi";

// Validação para inclusão de modelo carro
export const modeloCarro = joi.object({
 nome: joi.string().min(3).required(), // Nome do carro Min, 3 caracter
 sigla: joi.string().length(3).required(), // Sigla do carro, 3 caracter
 potencia: joi.number().min(1).required(), // Potencia mínima de 3 Cv
 velocidadeMaxima: joi.number().min(1).required(), // Velocidade min. de 1
 consumo: joi.number().min(0.1).required(), // Consumo mínimo de 0.1
 aceleracao: joi.number().min(0).required(), // Aceleração min. de 0
 preco: joi.number().min(0).required(), // Preço min. de 0
});

export const ModeloAtualizacaoCarro = joi.object({
    nome: joi.string().min(3), // Nome do carro, opcional
    sigla: joi.string().length(3), // sigla do carro, opcional
    potencia: joi.number().min(1),// Potencia, opcional
    VelocidadeMaxima: joi.number().min(1),// Velocidade Maxima, opcional
    consumo: joi.number().min(0.1),
    aceleracao: joi.number().min(0),
    preco: joi.number().min(0),
    //ano: joi.number().integer().min(1886)
}).min(1);  // Pelo menos um campo precisa ser atualizado