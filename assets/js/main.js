(function(){
  const y = new Date().getFullYear();
  const el = document.getElementById("year");
  if(el) el.textContent = y;

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener("click", (e)=>{
      const id = a.getAttribute("href");
      if(!id || id.length < 2) return;
      const target = document.querySelector(id);
      if(!target) return;
      e.preventDefault();
      target.scrollIntoView({behavior:"smooth", block:"start"});
    });
  });

  // Pre-fill subject for mailto form fallback
  const form = document.getElementById("quoteForm");
  if(form){
    form.addEventListener("submit", (e)=>{
      e.preventDefault();
      const name = (document.getElementById("name").value || "").trim();
      const company = (document.getElementById("company").value || "").trim();
      const email = (document.getElementById("email").value || "").trim();
      const phone = (document.getElementById("phone").value || "").trim();
      const msg = (document.getElementById("message").value || "").trim();

      const subject = encodeURIComponent("Solicitação de cotação — Site");
      const body = encodeURIComponent(
        `Nome: ${name}\nEmpresa: ${company}\nE-mail: ${email}\nTelefone/WhatsApp: ${phone}\n\nDetalhes:\n${msg}\n`
      );
      // Ajuste o e-mail de destino no index.html (data-mailto)
      const to = form.getAttribute("data-mailto") || "eficaz.usinagem@uol.com.br";
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }
})();
