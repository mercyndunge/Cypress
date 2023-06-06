//Before
//After
//BeforeEach
//AfterEach


describe('MyTestSuite', () => {

    before(() => {
        cy.log ("**** Lauch App ****")

    })

    after(() => {
        cy.log ("**** Close App ****")

    })

    beforeEach(() => {
        cy.log ("**** Login ****")

    })

    afterEach(() => {
        cy.log ("**** Logout ****")

    })

    it('Search', () => {


    })


    it('Advanced Search', () => {


    })


    it('Listing Products', () => {


    })

  })