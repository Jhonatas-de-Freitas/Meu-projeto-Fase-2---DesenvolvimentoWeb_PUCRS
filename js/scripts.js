document.addEventListener('DOMContentLoaded', () => {
    // Exemplo simples: Alert ao carregar a página
    alert('Bem-vindo ao Mercado Piltover!');

    // Mudar a cor de fundo da seção de produtos ao clicar em um botão
    const produtosSection = document.getElementById('produtos');
    const changeColorButton = document.createElement('button');
    changeColorButton.textContent = 'Mudar cor de fundo';
    changeColorButton.className = 'btn btn-warning';
    changeColorButton.style.marginTop = '20px';

    changeColorButton.addEventListener('click', () => {
        produtosSection.style.backgroundColor = '#FFD700';
    });

    produtosSection.appendChild(changeColorButton);
});