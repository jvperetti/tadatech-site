document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const telefone = document.getElementById("telefone").value;
      const servico = document.getElementById("tipo-servico").value;
      const data = document.getElementById("data").value;

      
      if (servico === "Escolha uma opção") {
        alert("Por favor, selecione um tipo de serviço.");
        return;
      }

      const agendamento = {
        nome,
        email,
        telefone,
        servico,
        data
      };

      let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
      agendamentos.push(agendamento);
      localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

      
      const detalhes = document.getElementById("detalhesAgendamento");
      detalhes.innerHTML = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Serviço:</strong> ${servico}</p>
        <p><strong>Data:</strong> ${data}</p>
        <p>Entraremos em contato para confirmar o horário!</p>
      `;

      
      const modal = new bootstrap.Modal(document.getElementById('confirmacaoModal'));
      modal.show();

      form.reset();
    });
  }
});
