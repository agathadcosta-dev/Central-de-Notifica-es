// Criando a estrutura do Toast
const elementoToast = document.getElementById("meuToast");

const meuToast = new bootstrap.Toast(elementoToast, {
    autohide: true,
    delay: 5000
});

// Contador de atividades
let quantidade = 0;

// Função para mostrar notificações
function mostrarNotificacao(tipo) {

    const titulo = document.getElementById("tituloToast");
    const mensagem = document.getElementById("mensagemToast");

    let atividade = "";

    if (tipo === "cadastro") {
        titulo.textContent = "Cadastro realizado";
        mensagem.textContent = "O usuário foi cadastrado com sucesso.";
        atividade = "Cadastro realizado com sucesso.";
    }

    else if (tipo === "acesso") {
        titulo.textContent = "Atenção à segurança";
        mensagem.textContent = "Verifique suas credenciais de acesso.";
        atividade = "Verificação de segurança executada.";
    }

    else if (tipo === "sistema") {
        titulo.textContent = "Sistema atualizado";
        mensagem.textContent = "Nenhuma atualização pendente foi encontrada.";
        atividade = "Consulta de atualizações realizada.";
    }

    // Exibindo o Toast
    meuToast.show();

    // Adicionando ao histórico
    adicionarHistorico(atividade);
}

// Função para adicionar atividades
function adicionarHistorico(atividade) {

    const historico = document.getElementById("historico");

    const novaLinha = document.createElement("li");

    novaLinha.className = "list-group-item";
    novaLinha.textContent = atividade;

    historico.appendChild(novaLinha);

    quantidade++;

    document.getElementById("contador").textContent = quantidade;
}

// Abrir modal de confirmação
function abrirLimpeza() {

    const modal = new bootstrap.Modal(
        document.getElementById("modalLimpar")
    );

    modal.show();
}

// Limpar histórico
function limparHistorico() {

    document.getElementById("historico").innerHTML = "";

    quantidade = 0;

    document.getElementById("contador").textContent = quantidade;

    const modal = bootstrap.Modal.getInstance(
        document.getElementById("modalLimpar")
    );

    modal.hide();
}