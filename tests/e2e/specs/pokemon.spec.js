const objTeste = {
    nome: 'Charizard',
    id: 'gym2-2',
    qtdCartas: 71
}

describe('Testando a aplicação do Pokemon', () => {
    it('Visitar a página inicial e buscar por um nome de pokemon', () => {
        cy.visit('/');
        cy.get('#campo-busca').type(objTeste.nome);
        cy.server();
        cy.route(
            'GET',
            `https://api.pokemontcg.io/v2/cards?q=name:${objTeste.nome}&orderBy=name&pageSize=250`
        ).as('retornarCartas');
        cy.get('#btn-buscar').click();
        cy.wait('@retornarCartas');
        cy.get('.card--grid').should('have.length', objTeste.qtdCartas);
    })
})
