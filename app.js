//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amigo Secreto</title>
    <style>
        body {
            text-align: center;
            font-family: Arial, sans-serif;
            background-color: #f8f1e5;
        }
        .container {
            margin-top: 50px;
            padding: 20px;
        }
        input, button {
            padding: 10px;
            margin: 5px;
        }
        #lista-nomes {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Amigo Secreto</h1>
        <input type="text" id="nome" placeholder="Digite um nome">
        <button onclick="adicionarNome()">Adicionar</button>
        <ul id="lista-nomes"></ul>
        <button onclick="sortear()">Sortear amigo</button>
        <div id="resultado"></div>
    </div>

    <script>
        let nomes = [];

        function adicionarNome() {
            let nomeInput = document.getElementById("nome").value;
            if (nomeInput && !nomes.includes(nomeInput)) {
                nomes.push(nomeInput);
                document.getElementById("lista-nomes").innerHTML += `<li>${nomeInput}</li>`;
                document.getElementById("nome").value = "";
            }
        }

        function sortear() {
            if (nomes.length < 2) {
                alert("Adicione pelo menos 2 nomes para sortear!");
                return;
            }
            let sorteio = [...nomes];
            let resultado = {};
            for (let i = 0; i < nomes.length; i++) {
                let possiveis = sorteio.filter(nome => nome !== nomes[i]);
                if (possiveis.length === 0) {
                    return alert("Erro ao sortear, tente novamente!");
                }
                let escolhido = possiveis[Math.floor(Math.random() * possiveis.length)];
                resultado[nomes[i]] = escolhido;
                sorteio = sorteio.filter(nome => nome !== escolhido);
            }
            let resultadoDiv = document.getElementById("resultado");
            resultadoDiv.innerHTML = "<h2>Resultado:</h2>" + Object.entries(resultado).map(([a, b]) => `<p>${a} → ${b}</p>`).join('');
        }
    </script>
</body>
</html>
