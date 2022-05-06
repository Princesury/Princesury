///<reference types="cypress"/>
var products = []
describe('check the homepage for E-commerce site', () => {
    beforeEach(()=>{
        cy.on('uncaught:exception',(err,runnable)=>{
            return false;
        })
        cy.visit('https://www.decathlon.in/')
        cy.get('div[class="btn-close"]').click({ force: true})
    })
    it('TC_01 check All product', () => {
        // // cy.contains('button','APPLY').click({force: true})
        // // cy.get(':nth-child(2) > .btn-brand-blue').click()
        // cy.get('div[class="btn-close"]').click()
        // cy.get('div._2iS-f7yk3D ').click()
        cy.get('div._2iS-f7yk3D ').click({force:true})
        cy.get('div._2ziBfkX88U ul').children().each((el, index) => {
            cy.get(el).invoke('text').then((text) => {
                products.push(text)
            })
        })
        cy.log(products)

    })
    it('TC_02 Verify all catorgory products',()=>{
        cy.get('div._2iS-f7yk3D ').click()
        cy.get('div._3NsVFG_Ty9 ul').children().each((el,index)=>{
                if(index >= 0){
                    cy.wrap(el).should('have.length',1)
                }
                
        })
        
    })
    it('TC_03 verify top bar',()=>{
        cy.get('div.align-items-center').eq(1).children().filter('a').each(($el)=>{
           cy.wrap($el).should('be.visible')
        })
    })
    it('TC_04 verify the homepage pagination slide',()=>{
        //   function findItem(value){
        //       function findInpage(index){
        //           let found = false;
        //           cy.get()
        //       }
        //   }
        cy.get('div.swiper-pagination').first().children().each((el,index)=>{
            if(index <= 17){
                cy.wrap(el).should('have.class','swiper-pagination-bullet').and('be.visible')
            }
        })
    })
    var swiper =["2 Years Warranty*","Free Pick up from Store","90 Days Return Policy","Free Home Delivery above Rs. 1699*"]
    it('TC_05 verify the swiper wrapper',()=>{
        cy.get('div.swiper-wrapper div.swiper-slide a span.Ly7NR05LOA').each((el,index)=>{
            cy.wrap(el).should('have.text',swiper[index])
        })
    })
    it('TC_06 verify the homepage swiper',()=>{
        cy.get('div.swiper-container-horizontal div._1t83reGGJb').children().each(($el)=>{
            if($el.hasClass('.wiper-slide.perso_reco_homepage')){
                cy.wrap($el).should('be.visible')
            }
        })
    })
})
