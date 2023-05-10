// Validação do formulário de login
function formValidation() {

    // Formulário de login dentro do offcanvas
    const formLogin = document.querySelector('.offcanvas-body form');

    // Botão de login dentro do offcanvas
    const btnLogin = document.querySelector('.offcanvas-body form button');

    // Validação do formulário de login ao clicar no botão de login
    btnLogin.addEventListener('click', function (event) {

        // Validando o formulário de login
        if (!formLogin.checkValidity()) {
            // Previne o envio do formulário
            event.preventDefault();

            // Previne a propagação do evento
            event.stopPropagation();

        }
        // Adiciona a classe 'was-validated' ao formulário para exibir as mensagens de validação
        formLogin.classList.add('was-validated');


        // Se o formulário for válido, redireciona para a página dashboard.html
        // ------- lógica de login aqui -------
        // window.location.href = "dashboard.html";
        // -------------------------------------

    });

}



// Chamada da função de validação do formulário de login
formValidation();