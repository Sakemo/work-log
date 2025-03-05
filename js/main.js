document.addEventListener('DOMContentLoaded', function() {
    const priceDisplay = document.getElementById('priceDisplay');
    const subscribeBtn = document.getElementById('subscribeBtn');
  
    // Detecta a língua do navegador para definir o preço
    const userLang = navigator.language || navigator.userLanguage;
    let priceText;
  
    if (userLang.toLowerCase() === 'pt-br' || userLang.toLowerCase().includes('pt')) {
      priceText = 'R$10/mês';
    } else {
      priceText = '$10/month';
    }
    priceDisplay.textContent = priceText;
  
    // Evento para simular o processo de assinatura
    subscribeBtn.addEventListener('click', function() {
      // Simulação simples de escolha de método de pagamento
      let paymentMethod = prompt("Escolha o método de pagamento:\n1 - Cartão de Crédito\n2 - Pix", "1");
      if (paymentMethod === null) return;
      if (paymentMethod.trim() === "1") {
        alert("Você escolheu Cartão de Crédito. Redirecionando para a página de pagamento...");
        // Aqui você integraria com a API do gateway de pagamento escolhido
        // window.location.href = "payment_credit_card.html";
      } else if (paymentMethod.trim() === "2") {
        alert("Você escolheu Pix. Redirecionando para a página de pagamento...");
        // Aqui você integraria com a API de pagamento Pix
        // window.location.href = "payment_pix.html";
      } else {
        alert("Opção inválida. Por favor, tente novamente.");
      }
    });
  });
  