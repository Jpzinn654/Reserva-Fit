document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Validação dos campos com expressões regulares
        const name = form.querySelector("#name");
        const email = form.querySelector("#email");
        const senha = form.querySelector("#senha");
        const checkbox = form.querySelector("#checkbox");

        const nameRegex = /^[a-zA-Z\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (!nameRegex.test(name.value)) {
            alert("Por favor, insira um nome válido.");
            name.focus();
            return;
        }

        if (!emailRegex.test(email.value)) {
            alert("Por favor, insira um endereço de e-mail válido.");
            email.focus();
            return;
        }

        if (!checkbox.checked) {
            alert("Por favor, marque a caixa de seleção.");
            checkbox.focus();
            return;
        }

        // Envie o formulário aqui (substitua esta parte com o código real de envio)
        alert("Cadastro feito com sucesso!");
        form.reset();
    });  
});
