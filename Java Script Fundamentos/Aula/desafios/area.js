const { PI } = Math;
const raio = 10;
const circumference = PI * raio ** 2;

console.log(`A circunferencia é ${circumference}m2`);

const array = ['lucas', 'pedro'];

const empty = [];

function fn() {
  this.name = 'Lucas';
  this.exec = () => console.log('lucas');
  this.idade = 24;
}

const express = new fn();
express.exec();
console.log(express.name);
console.log(express.idade);

  const numberTabuada = ([primeiro, , segundo]) => {
  console.log(primeiro,segundo)
};



numberTabuada(['lucas', 'jose', 'margarete']);
