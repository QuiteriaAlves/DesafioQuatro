let clientes = [];

function adicionarCliente(nome, idade, email) {
    let pessoa = {
        nome,
        idade,
        email,
    };

    clientes.push(pessoa);
    return pessoa;
}

// Adicionando clientes
adicionarCliente("João", 5, "pmidori@gmail.com");
adicionarCliente("Vanessa", 6, "ju@gmail.com");
adicionarCliente("Rodolfo", 7, "bari@gmail.com");
adicionarCliente("Marcia", 8, "marcia@gmail.com");
adicionarCliente("Mari", 9, "mari@gmail.com");
adicionarCliente("Pedro", 10, "pe@gmail.com");

// Exibindo clientes (opcional, apenas para visualização)
function exibirClientes() {
    console.table(clientes);

    console.log("\nAté o momento foram cadastradas " + clientes.length + " pessoas à lista.\n");

    clientes.forEach((cliente) => {
        let categoria = "";

        if (cliente.idade < 12) {
            categoria = "criança";
        } else if (cliente.idade >= 12 && cliente.idade <= 17) {
            categoria = "adolescente";
        } else {
            categoria = "adulto(a)";
        }
        console.log(`${cliente.nome} é ${categoria}. Tem ${cliente.idade} anos e seu e-mail é ${cliente.email}.\n`);
    });
}

exibirClientes(); // Exibe os clientes no console

// Exportando a lista de clientes
module.exports = clientes;