/*
Utilizando os conceitos apresentados, desenvolva um programa que faça o seguinte:
 Pergunte ao usuário os valores da primeira prova (N1) e da segunda prova (N2).
 Calcule a média do aluno.
 Utilize o operador ternário para informar se o aluno está aprovado ou reprovado, considerando que a nota mínima para aprovação é 6. 
*/
let n1 = 8;
let n2 = 7;
let media = (n1 + n2) / 2;
let res = media >= 6 ? 'Aluno Aprovado' : 'Aluno Reprovado'
console.log(`Média: ${media}, ${res}`);