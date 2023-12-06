describe('my first test suite', function(){

it('first test', function(){
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('#name').type('abdul')
    cy.get('#email').type('rauf123@gmail.com')
    cy.get('#phone').type(474365637553)
    cy.get('#textarea').type('johar town lahore')
    cy.get('#male').click()
    cy.get('#tuesday').click()
    cy.get('#wednesday').click()
    cy.get('#country').select('Germany')
    cy.get('#colors').select('Red')

})


})