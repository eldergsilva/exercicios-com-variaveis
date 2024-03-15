let valorDoDesconto;
let meuDinheiro = 50;
let valorTotal=110;

desconto = ((valorTotal - meuDinheiro) * 100 /valorTotal ) ;
 
console.log(`Você precisa de ${desconto.toFixed(1)}% de desconto`);