const assert = require('assert');
const pessoas = require('../DesafioQuatro/desafioQuatro');

//Pesquise uma forma de testar se o módulo está retornando a quantidade correta usando a bbiblioteca Mocha do Javascrit. 

describe('Tamanho da lista de nomes', function () {
    it('deve ter 6 itens', function () {
        assert.strictEqual(pessoas.length, 6);
    });
});