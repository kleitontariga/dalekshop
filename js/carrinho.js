var carrinho = document.getElementById('description');
var qtdeProduto = document.getElementById('qtdeProduto')
var total = document.getElementById('valorTotal');
var valorPdt;
var valorTotalCompra;


carrinho.innerHTML = '<p><strong> Descrição da Compra </p></strong> ' + sessionStorage.description;
'<strong>' + sessionStorage.valor + '</strong>';
qtdeProduto.addEventListener('change',calculaValorTotalCompra);
valorPdt = sessionStorage.valor;
valorPdt = valorPdt.replaceAll('R$', ' ');

function calculaValorTotalCompra(){
    valorPdt = Number(valorPdt)
    valorTotalCompra = valorPdt*qtdeProduto.value;
    total.innerHTML = '<p>Valor total da compra: </p>' + 'R$' + valorTotalCompra

}

