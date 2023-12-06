///<reference types ="cypress"/>
describe('practice page suite', function(){

  it('practice page test',function(){
 cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
 cy.get('[value="radio3"]').click()
 cy.get('#checkBoxOption2').check().should('be.checked').and('have.value','option2')
 cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
cy.get('#dropdown-class-example').select('Option3')
cy.get('#autocomplete').type('ind')
cy.get('.ui-menu-item div').each(($el, index, $list)=>{
  if($el.text()==="inida")
{
  cy.wrap($el.click())
}
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click({force:true})
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')
//alert handling
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()
//if you wanna get text out of alert 
cy.on('window:alert',(Str)=>{
expect(Str).to.eq('Hello , share this practice page and share your knowledge')


cy.on('window:confirm',(Str)=>{
    expect(Str).to.eq('Hello , Are you sure you want to confirm?')
})
})
})


  })  

})