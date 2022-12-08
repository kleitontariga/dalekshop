var carrinho = document.getElementById('description');
var qtdeProduto = document.getElementById('qtdeProduto')
var total = document.getElementById('valorTotal');
var valorCaneca;
var valorTotalCompra;

carrinho.innerHTML = '<p><strong> Descrição da Compra </p></strong> ' + sessionStorage.description;
'<strong>' + sessionStorage.valor + '</strong>';
qtdeProduto.addEventListener('change',calculaValorTotalCompra);
valorCaneca = sessionStorage.valor;
valorCaneca = valorCaneca.replaceAll('R$', ' ');
function calculaValorTotalCompra(){
    valorCaneca = Number(valorCaneca)
    valorTotalCompra = valorCaneca*qtdeProduto.value;
    total.innerHTML = '<p>Valor total da compra:</p>' + 'R$'
}

