document.addEventListener("DOMContentLoaded", function() {
  const languageSelect = document.getElementById("languageSelect");
  
  const translations = {
    pt: {
      navHome: "Início",
      navFeatures: "Recursos",
      navPricing: "Preços",
      navTestimonials: "Depoimentos",
      navContact: "Contato",
      heroTitle: "Mantenha seu GitHub sempre em atividade",
      heroSubtitle: "Transforme seus commits em um diário de progresso. Nunca mais fique com o perfil vazio!",
      ctaSubscribe: "Assine Agora",
      feature1Title: "Auto Commit Programado",
      feature1Desc: "Mantenha seu calendário de commits sempre ativo sem esforço.",
      feature2Title: "Diário de Progresso",
      feature2Desc: "Documente cada etapa do seu trabalho automaticamente.",
      feature3Title: "Integração com GitHub",
      feature3Desc: "Crie e atualize repositórios facilmente com apenas um clique.",
      pricingTitle: "Planos e Preços",
      pricingBrazilTitle: "Brasil",
      pricingForeignTitle: "Internacional",
      pricingFeature1: "Acesso total à extensão",
      pricingFeature2: "Suporte 24/7",
      pricingFeature3: "Atualizações automáticas",
      subscribeNow: "Assinar",
      paymentMethods: "Aceitamos Cartão de Crédito e Pix",
      testimonialsTitle: "Depoimentos",
      benefitsTitle: "Por que escolher a Code Tracking?",
      benefit1: "Automação inteligente de commits",
      benefit2: "Diário digital completo de suas atividades",
      benefit3: "Interface inspirada no VS Code e no estilo cyberpunk",
      benefit4: "Integração simples com o GitHub",
      benefit5: "Suporte dedicado e atualizações constantes",
      contactTitle: "Entre em Contato",
      emailPlaceholder: "Seu email",
      contactSubmit: "Enviar",
      contactInfo: "Tem alguma dúvida? Fale conosco: contato@codetracking.com",
      trustedBy: "Confiado por desenvolvedores e entusiastas ao redor do mundo",
      planMonthly: "Mensal",
      planAnnual: "Anual",
      monthlyPriceBR: "R$10/mês",
      annualPriceBR: "R$100/ano",
      monthlyPriceINT: "$10/mês",
      annualPriceINT: "$100/ano",
      planDiscountAnnual: "2 meses grátis" 
    },
    en: {
      navHome: "Home",
      navFeatures: "Features",
      navPricing: "Pricing",
      navTestimonials: "Testimonials",
      navContact: "Contact",
      heroTitle: "Keep Your GitHub Always Active",
      heroSubtitle: "Turn your commits into a progress diary. Never let your profile go dark!",
      ctaSubscribe: "Subscribe Now",
      feature1Title: "Scheduled Auto Commits",
      feature1Desc: "Keep your commit calendar full effortlessly.",
      feature2Title: "Progress Diary",
      feature2Desc: "Automatically document every step of your work.",
      feature3Title: "GitHub Integration",
      feature3Desc: "Create and update repositories with just one click.",
      pricingTitle: "Plans and Pricing",
      pricingBrazilTitle: "Brazil",
      pricingForeignTitle: "International",
      pricingFeature1: "Full access to extension",
      pricingFeature2: "24/7 Support",
      pricingFeature3: "Automatic updates",
      subscribeNow: "Subscribe",
      paymentMethods: "We accept Credit Card and Pix",
      testimonialsTitle: "Testimonials",
      benefitsTitle: "Why Choose Code Tracking?",
      benefit1: "Intelligent commit automation",
      benefit2: "Complete digital diary of your activities",
      benefit3: "VS Code inspired interface with cyberpunk style",
      benefit4: "Simple GitHub integration",
      benefit5: "Dedicated support and constant updates",
      contactTitle: "Get in Touch",
      emailPlaceholder: "Your email",
      contactSubmit: "Send",
      contactInfo: "Have questions? Contact us: contact@codetracking.com",
      trustedBy: "Trusted by developers and enthusiasts worldwide",
      planMonthly: "Monthly",
      planAnnual: "Annual",
      monthlyPriceBR: "$10/month",
      annualPriceBR: "$100/year",
      monthlyPriceINT: "$10/month",
      annualPriceINT: "$100/year",
      planDiscountAnnual: "2 months free"
    }
  };

  function updateTranslations(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = translations[lang][key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      el.placeholder = translations[lang][key];
    });
  }

  function updatePricingCards() {
    const lang = languageSelect.value;
    // Adicionei uma nova chave para desconto anual nas traduções (ver abaixo)
    const isBrazil = navigator.language.toLowerCase().includes("pt");
    let pricingHTML = "";
    
    if (isBrazil) {
      pricingHTML += `
        <div class="pricing-card">
          <h3>${translations[lang]["planMonthly"]} - ${translations[lang]["pricingBrazilTitle"]}</h3>
          <p class="price">${translations[lang]["monthlyPriceBR"]}</p>
          <ul>
            <li><i class="fas fa-check"></i> ${translations[lang]["pricingFeature1"]}</li>
            <li><i class="fas fa-check"></i> ${translations[lang]["pricingFeature2"]}</li>
            <li><i class="fas fa-check"></i> ${translations[lang]["pricingFeature3"]}</li>
          </ul>
          <button class="subscribe-btn" data-plan="br" data-plan-type="monthly">
            <i class="fas fa-cart-plus"></i> ${translations[lang]["subscribeNow"]}
          </button>
        </div>
        <div class="pricing-card">
          <div class="badge-popular"><i class="fas fa-star"></i> Popular</div>
          <div class="discount-badge">${translations[lang]["planDiscountAnnual"]}</div>
          <h3>${translations[lang]["planAnnual"]} - ${translations[lang]["pricingBrazilTitle"]}</h3>
          <p class="price">${translations[lang]["annualPriceBR"]}</p>
          <ul>
            <li><i class="fas fa-check"></i> ${translations[lang]["pricingFeature1"]}</li>
            <li><i class="fas fa-check"></i> ${translations[lang]["pricingFeature2"]}</li>
            <li><i class="fas fa-check"></i> ${translations[lang]["pricingFeature3"]}</li>
          </ul>
          <button class="subscribe-btn" data-plan="br" data-plan-type="annual">
            <i class="fas fa-cart-plus"></i> ${translations[lang]["subscribeNow"]}
          </button>
        </div>`;
    } else {
      pricingHTML += `
        <div class="pricing-card">
          <h3>${translations[lang]["planMonthly"]} - ${translations[lang]["pricingForeignTitle"]}</h3>
          <p class="price">${translations[lang]["monthlyPriceINT"]}</p>
          <ul>
            <li><i class="fas fa-check"></i> ${translations[lang]["pricingFeature1"]}</li>
            <li><i class="fas fa-check"></i> ${translations[lang]["pricingFeature2"]}</li>
            <li><i class="fas fa-check"></i> ${translations[lang]["pricingFeature3"]}</li>
          </ul>
          <button class="subscribe-btn" data-plan="int" data-plan-type="monthly">
            <i class="fas fa-cart-plus"></i> ${translations[lang]["subscribeNow"]}
          </button>
        </div>
        <div class="pricing-card">
          <div class="badge-popular"><i class="fas fa-star"></i> Popular</div>
          <div class="discount-badge">${translations[lang]["planDiscountAnnual"]}</div>
          <h3>${translations[lang]["planAnnual"]} - ${translations[lang]["pricingForeignTitle"]}</h3>
          <p class="price">${translations[lang]["annualPriceINT"]}</p>
          <ul>
            <li><i class="fas fa-check"></i> ${translations[lang]["pricingFeature1"]}</li>
            <li><i class="fas fa-check"></i> ${translations[lang]["pricingFeature2"]}</li>
            <li><i class="fas fa-check"></i> ${translations[lang]["pricingFeature3"]}</li>
          </ul>
          <button class="subscribe-btn" data-plan="int" data-plan-type="annual">
            <i class="fas fa-cart-plus"></i> ${translations[lang]["subscribeNow"]}
          </button>
        </div>`;
    }
    
    document.getElementById("pricingCards").innerHTML = pricingHTML;
    
    document.querySelectorAll(".subscribe-btn").forEach(button => {
      button.addEventListener("click", function() {
        const plan = this.getAttribute("data-plan");
        const planType = this.getAttribute("data-plan-type");
        if (plan === "br") {
          alert(`${translations[lang]["subscribeNow"]} - ${planType === "monthly" ? translations[lang]["monthlyPriceBR"] : translations[lang]["annualPriceBR"]}`);
        } else {
          alert(`${translations[lang]["subscribeNow"]} - ${planType === "monthly" ? translations[lang]["monthlyPriceINT"] : translations[lang]["annualPriceINT"]}`);
        }
      });
    });
  }  
  
  const initialLang = navigator.language.toLowerCase().includes("en") ? "en" : "pt";
  languageSelect.value = initialLang;
  updateTranslations(initialLang);
  updatePricingCards();

  languageSelect.addEventListener("change", function() {
    updateTranslations(this.value);
    updatePricingCards();
  });

  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const subscribeForm = document.getElementById("subscribeForm");
  subscribeForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Obrigado! Em breve você receberá mais informações.");
    this.reset();
  });
});
