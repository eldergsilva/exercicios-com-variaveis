const capitalInial = 1000;
const taxa = 12.5/100;
const tempo =5;


const montante = capitalInial * Math.pow((1+taxa),tempo);

console.log(montante.toFixed(3));
