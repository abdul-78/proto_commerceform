///<reference types ="cypress"/>
describe('shetty',function(){
it('test case1', function(){

    cy.visit('https://rahulshettyacademy.com/angularpractice/')
   cy.get(':nth-child(1) > .form-control').type('AB')
    cy.get(':nth-child(1) > .form-control').type('abcd@gmail.com')
    cy.get('#exampleInputPassword1').type('pakistan')
    cy.get('#exampleCheck1').check()
    cy.get('#exampleFormControlSelect1').select('Male')
    cy.get('#inlineRadio2').click()
    cy.get(':nth-child(8) > .form-control').click()
    
    cy.get('[class="btn btn-success"]').click()
})

})