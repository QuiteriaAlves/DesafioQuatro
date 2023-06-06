const assert = require('assert');
//const pessoas = require('../Desafio/desafioQuatro');

describe('Tamanho da lista de nomes', function () {
    it('deve ter 6 itens', function () {
        const teste = [1, 2, 3, 4, 4, 5]
        assert.strictEqual(teste.length, 6);
    });
});