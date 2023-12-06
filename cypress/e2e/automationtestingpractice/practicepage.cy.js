///<reference types ="cypress"/>
describe('practice page suite', function(){



    it('Test practice page', function(){

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.xpath('//input[@value="radio2"]').click()
cy.get('#dropdown-class-example').select('Option3')
cy.get('#autocomplete').type('pak')
cy.get('#autocomplete').each(($el, index,$list)=>{

    if($el.text()==='pakistan'){
        cy.wrap($el).click()
    }
})
cy.get('#checkBoxOption2').click()
cy.get('#opentab').invoke('removeAttr','target').click()
    })
})