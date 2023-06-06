// Escrever um método em JavaScript que:

function listaPessoas() {

  // 1) Receba, por parâmetro, o nome, a idade e o e-mail de algumas pessoas em uma lista;

  var pessoas = [{
      nome: "Pedro",
      idade: 0,
      email: "joao@provedor.com.br",
    },
    {
      nome: "João",
      idade: 11,
      email: "joao@provedor.com.br",
    },
    {
      nome: "Maria",
      idade: 12,
      email: "maria@provedor.com.br",
    },
    {
      nome: "José",
      idade: 17,
      email: "jose@provedor.com.br",
    },
    {
      nome: "Joaquim",
      idade: 18,
      email: "joaquim@provedor.com.br",
    },
    {
      nome: "Manoel",
      idade: 25,
      email: "manoel@provedor.com.br",
    },
  ];

  function forEach(listaPessoas, callback) {
    for (var n = 0; n < listaPessoas.length; n++) {
      callback(n, listaPessoas[n]);
    }
  }

  console.table(pessoas);

  // 2) Navegue nessa lista e apresente os dados das pessoas no console, classificando:
  // os menores de 12 anos como "crianças", 
  // os que tem entre 12 e 17 anos como "adolescentes" e,
  // os maiores de 18 anos como "adultos".

  forEach(pessoas, function(index, item) {

    if (item.idade >= 0 && item.idade <= 11) {
      console.log(item.nome + " é criança. Tem " + item.idade + " anos e seu e-mail é " + item.email + ".");
    }

    if (item.idade >= 12 && item.idade <= 17) {
      console.log(item.nome + " é adolescente. Tem " + item.idade + " anos e seu e-mail é " + item.email + ".");
    }

    if (item.idade >= 18) {
      console.log(item.nome + " é adulto. Tem " + item.idade + " anos e seu e-mail é " + item.email + ".");
    }
  });

  // 3) Retorne o núemro de pessoas contidas na lista

  console.log("O número de pessoas listadas é " + pessoas.length + " no total.");

  console.log("Fim");
}

listaPessoas();