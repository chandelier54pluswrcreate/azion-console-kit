import generateUniqueName from '../support/utils'
import selectors from '../support/selectors'

const edgeServiceName = generateUniqueName('EdgeService')

describe('Edge Services spec', { tags: ['run',] }, () => {
  beforeEach(() => {
    cy.login()
    cy.openProduct('Edge Services')
  })

  it('should create an edge service', () => {
    // Arrange
    cy.get(selectors.edgeServices.createServiceButton).click()

    // Act
    cy.get(selectors.edgeServices.serviceName).type(edgeServiceName)
    cy.get(selectors.edgeServices.submitButton).click()

    // Assert
    cy.verifyToast('success', 'Your Edge Service has been created')
    cy.get(selectors.edgeServices.pageTitle(edgeServiceName)).should('have.text', edgeServiceName)
    cy.get(selectors.edgeServices.cancelButton).click()
    cy.get(selectors.edgeServices.searchInput).type(edgeServiceName)
    cy.get(selectors.edgeServices.filteredRowNameColumn).should('have.text', edgeServiceName)

    cy.get(selectors.edgeServices.filteredRowStatusColumn).should('have.text', 'Inactive')
  })

  afterEach(() => {
    cy.deleteEntityFromLoadedList().then(() => {
      cy.verifyToast('Resource successfully deleted')
    })
  })
})
