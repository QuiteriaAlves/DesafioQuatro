const assert = require('assert');
const pessoas = require('../DesafioQuatro/desafioQuatro');

describe('Tamanho da lista de nomes', function () {
    it('deve ter 6 itens', function () {
        assert.strictEqual(pessoas.length, 6);
    });
});