/*
• Qual o nome do usuário;
• Qual sua idade;
• Bairro onde mora;
• Passe o nome do usuário para todas as letras em maiúscula;
• Crie um programa que solicite ao usuário que digite dois números inteiros e exiba o resultado da soma desses números na tela.
*/

let nome = prompt(`Qual o seu nome?`)
let idade = prompt(`Qual sua idade?`)
let bairro = prompt(`Qual o seu bairro?`)
let num1 = parseInt(prompt(`Coloque um número entre 0 e 10:`));
let num2 = parseInt(prompt(`Coloque um número entre 0 e 10:`));
let soma = (num1 + num2)

alert(`Seu nome: ${nome.toUpperCase()}\nSua idade: ${idade}\nSeu bairro: ${bairro}\nResultado: ${result}`);