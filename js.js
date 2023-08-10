function registerClicked() {
    // Verificar se os campos foram preenchidos
    var firstName = document.getElementById("firstNameInput").value;
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;
    var confirmPassword = document.getElementById("confirmPasswordInput").value;
    var termsCheckbox = document.getElementById("termsCheckbox").checked;

    if (firstName && email && password && confirmPassword && termsCheckbox) {
        // Limpar os campos do formulário
        document.getElementById("firstNameInput").value = "";
        document.getElementById("emailInput").value = "";
        document.getElementById("passwordInput").value = "";
        document.getElementById("confirmPasswordInput").value = "";
        document.getElementById("termsCheckbox").checked = false;

        // Exibir o alerta
        alert("Obrigado! Suas informações foram registradas. Segue o Pai no instagram; Natália Quero um 10.");
    }
}