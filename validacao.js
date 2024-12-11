import Joi from "joi";
 
export const modeloCarro = Joi.object({
    nome: Joi.string().min(3).required().messages({
        'string.min':'O nome carro deve ter pelo menos 3 caracters',
        'any required':'O nome do carro é Obrigatorio'}),
    sigla: Joi.string().length(3).required().messages({
        'string.lengh':'A sigla deve ter exatamente 3 caracteres',
        'any.required':'A sigla é obrigatorio'
    }),
    potencia: Joi.number().min(1).required().messages({
        'string.min':'A potencia deve ser maior ou igual a 1.',
        'any.required':'A potencia é obrigatoria'
    }),
    velocidadeMaxima: Joi.number().min(1).required().messages({
        'number.min':'A velocidade maxima deve ser maior ou igual 1.',
        'any.required':'A velocidade maxima é obrigatoria'
    }),
    consumo: Joi.number().min(0.1).required().messages({
        'number.min':'O consumo deve ser maior ou igual a 1.',
        'any.required':'O consumo é obrigatoria'
    }),
    aceleracao: Joi.number().min(0).required().messages({
        'number.min':'A Aceleração deve ser maior ou igual a 1.',
        'any.required':'A acelerção é obrigatoria'
    }),
    preco: Joi.number().min(0).required().messages({
        'number.min':'O preço deve ser maior ou igual a 1.',
        'any.required':'O preço é obrigatoria'
    }),
});
 
 
export const modeloAtualizacaoCarro = Joi.object({
    nome: Joi.string().min(3),
    sigla: Joi.string().length(3),
    potencia:Joi.number().min(1),
    velocidadeMaxima: Joi.number().min(1),
    consumo: Joi.number().min(0.1),
    aceleracao: Joi.number().min(0),
    preco: Joi.number().min(0),
    ano: Joi.number().integer().min(1886).max(new Date().getFullYear()),
}).min(1);