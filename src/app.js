  const tarefas = [];
  const modal = document.getElementById("modal");
  const campo = document.getElementById("descricao");
  const erro = document.getElementById("erro");
  const estado = document.getElementById("estado");
  const lista = document.getElementById("lista");
  const abrir = document.getElementById("abrir");
  const botaoTema = document.getElementById("tema");

  function aplicarTema(escuro) {
    document.documentElement.dataset.theme = escuro ? "dark" : "light";
    botaoTema.setAttribute("aria-pressed", String(escuro));
  }
  aplicarTema(window.matchMedia("(prefers-color-scheme: dark)").matches);
  botaoTema.addEventListener("click", () => {
    aplicarTema(document.documentElement.dataset.theme !== "dark");
  });

  function desenhar() {
    lista.innerHTML = "";
    tarefas.forEach((t, i) => {
      const li = document.createElement("li");
      const caixa = document.createElement("input");
      caixa.type = "checkbox";
      caixa.id = "tarefa-" + i;
      caixa.checked = t.concluida;
      caixa.addEventListener("change", () => {
        t.concluida = caixa.checked;
        estado.textContent = t.concluida ? "Tarefa concluída." : "Tarefa reaberta.";
        desenhar();
      });
      const rotulo = document.createElement("label");
      rotulo.htmlFor = caixa.id;
      rotulo.textContent = " " + t.descricao;
      if (t.concluida) rotulo.className = "feita";
      li.append(caixa, rotulo);
      lista.append(li);
    });
  }

  function abrirModal() {
    erro.textContent = "";
    campo.value = "";
    modal.hidden = false;
    campo.focus();
  }

  function fecharModal() {
    modal.hidden = true;
    abrir.focus();
  }

  abrir.addEventListener("click", abrirModal);
  document.getElementById("cancelar").addEventListener("click", fecharModal);
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) fecharModal(); });

  document.getElementById("formulario").addEventListener("submit", e => {
    e.preventDefault();
    const texto = campo.value.trim();
    if (!texto) {
      erro.textContent = "A descrição não pode estar vazia.";
      campo.setAttribute("aria-invalid", "true");
      campo.focus();
      return;
    }
    campo.removeAttribute("aria-invalid");
    tarefas.push({ descricao: texto, concluida: false });
    desenhar();
    estado.textContent = "Tarefa adicionada.";
    fecharModal();
  });
