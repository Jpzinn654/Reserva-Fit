document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Validação dos campos com expressões regulares
        const email = form.querySelector("#email");

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email.value)) {
            alert("Por favor, insira um endereço de e-mail válido.");
            email.focus();
            return;
        }

        // Envie o formulário aqui (substitua esta parte com o código real de envio)
        alert("E-mail enviado com sucesso!");
        form.reset();
    });
});
