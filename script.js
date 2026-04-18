const form = document.querySelector('form');
const name = document.getElementById('nome');
const email = document.getElementById('email');

nome.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
});

form.addEventListener('submit', (event) => {

    const nomeValor = nome.value.trim();

    if(nomeValor.length < 3){
        alert("Digite um nome com mais de 3 caracteres!");
        event.preventDefault();
        return;
    }

    const interesses = document.querySelectorAll('input[name="Interesses"]:checked');
    if(interesses.length === 0){
        alert("Selecione pelo menos um interesse, por gentileza.");
        event.preventDefault();
        return;
    }

    console.log("Formulário validado com Sucesso!");
});