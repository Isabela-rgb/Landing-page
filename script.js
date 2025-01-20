document.getElementById("ctaButton").addEventListener("click", function() {
    alert("Você será redirecionado para a página de compras!");
});

document.querySelectorAll(".buyButton").forEach(button => {
    button.addEventListener("click", function() {
        alert("Produto adicionado ao carrinho!");
    });
});
