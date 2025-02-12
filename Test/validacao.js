const chai = require('chai');
let clientes = require('../src/index.js')
const expect = chai.expect;

describe('Teste tamanho da lista de nomes', () => {

    it('deve ser uma lista', () => {
        expect(clientes).to.be.an('array'); // Verifica se é uma lista
    });

    it('deve ter 6 itens', () => {
        expect(clientes.length).to.equal(6); // Verifica o tamanho da lista
    });

});