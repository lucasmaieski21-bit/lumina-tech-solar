console.log("JavaScript conectado!");

const themeToggle = document.querySelector("#theme-toggle");
const icon = document.querySelector(".icon");

// dark mode

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    icon.textContent = "🌙";
}

themeToggle.addEventListener("click", function (event) {

    event.preventDefault();

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        icon.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    } else {
        icon.textContent = "☀️";
        localStorage.setItem("theme", "light");
    }

});

// calculadora 

const btnCalcular = document.querySelector("#btn-calcular");
const valorConta = document.querySelector("#valorConta");

valorConta.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        btnCalcular.click();
    }
});

btnCalcular.addEventListener("click", function(){

    const valor = Number(document.querySelector("#valorConta").value);

    if(valor <= 0){
        alert("Digite um valor válido.");
        return;
    }

    const novaConta = valor * 0.15;
    const economiaMensal = valor - novaConta;
    const economiaAnual = economiaMensal * 12;

 document.querySelector("#contaAtual").textContent =
    valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

document.querySelector("#novaConta").textContent =
    novaConta.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

document.querySelector("#economiaMensal").textContent =
    economiaMensal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
    
document.querySelector("#economiaAnual").textContent =
    economiaAnual.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
});

// validação do formulario 

const form = document.querySelector("#formContato");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const telefone = document.querySelector("#telefone").value.trim();
    const mensagem = document.querySelector("#mensagem").value.trim();

    if(nome === "" || email === "" || telefone === "" || mensagem === ""){
        alert("Preencha todos os campos.");
        return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailValido.test(email)){
        alert("Digite um e-mail válido.");
        return;
    }
    alert("Solicitação enviada com sucesso!");
    form.reset();

});

// mascara telefone 

const telefoneInput = document.querySelector("#telefone");

telefoneInput.addEventListener("input", function(){
    let valor = telefoneInput.value.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
    telefoneInput.value = valor;

});

// acordeao

const btnAcordeao = document.querySelector("#btn-acordeao");
const conteudoAcordeao = document.querySelector("#conteudo-acordeao");

btnAcordeao.addEventListener("click", function(){

    if(conteudoAcordeao.style.maxHeight){

        conteudoAcordeao.style.maxHeight = null;
        btnAcordeao.textContent = "Monitoramento inteligente ▼";

    }else{
        conteudoAcordeao.style.maxHeight =
            conteudoAcordeao.scrollHeight + "px";
        btnAcordeao.textContent = "Monitoramento inteligente ▲";
    }
});