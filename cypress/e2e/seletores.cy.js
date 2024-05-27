///<reference types="cypress"/>

describe('Seletores avançados com cypress', () => {

  beforeEach(() => {
    cy.visit('../../seletores.html')
  });

  it('Seleciona elementos que contêm um Texto específico', () => {
    cy.contains('Item 3').should('have.attr', 'class', 'filho-3')
  });

  it('Seleciona o elemento com a classe pai', () => {
    cy.get('.pai').should('exist')
  });

  it('Seleciona o elemento com o id Filho', () => {
    cy.get('#id-filho').should('exist')
  });

  it('Seleciona um elemento filho dentro do elemento com a classe pai', () => {
    cy.get('.pai .filho-3').should('exist')
  });

  it('Seleciona o segundo elemento <span> com a classe irmao', () => {
    cy.get('.irmao').eq(1).should('have.id', 'irmao-2')
  });

  it('Seleciona o próximo elemento irmão', () => {
    cy.get('#irmao-1').next().should('have.id', 'irmao-2')
  });

  it('Seleciona o elemento irmão anterior', () => {
    cy.get('#irmao-2').prev().should('have.id', 'irmao-1')
  });

  it('Seleciona o irmão da div anterior', () => {
    cy.get('.pai-tio-2').prev().should('have.class', 'pai-tio-1')
  });

  it('Seleciona o terceiro elemento <li> encontrado', () => {
    cy.get('.pai li').eq(2).should('have.class', 'filho-3')
  });

  it('Seleciona o elemento com o atributo data-test', () => {
    cy.get('[data-test="div-pai"]').should('exist')
  });

  it('Seleciona o elemento com a classe pai do elemento com a classe filho', () => {
    cy.get('.filho-3').parents('.pai').should('exist')
  });

  it('Seleciona o elemento com um valor em um select', () => {
    cy.get('select[name="opcao"]').select('muito')
    cy.get('#id-enviar').click()
    cy.get('#mensagemFeedback').should('have.text', 'Obrigado por compartilhar conosco!')
  });

});
