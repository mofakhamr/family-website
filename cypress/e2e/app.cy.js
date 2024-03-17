describe('Navigation', () => {
  it('should navigate to the Family Tree page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href*="/family-tree"]').click()
    cy.url().should('include', '/family-tree')
    cy.get('h1').contains('Family History "tree"')
  })

  // Many similar pages (sub nav) so iterate an array of their differences
  const notables = [
    // {url: '/notable', h1Contains: ' Notable Individuals'},
    { url: '/notable/jabbar', h1Contains: '"Nazem-ol-moham"' },
    { url: '/notable/eshagh', h1Contains: 'Eshagh Mofakham' },
    { url: '/notable/mahmoud', h1Contains: 'Mahmoud Mofakham' },
    { url: '/notable/masood', h1Contains: 'Masood Mofakham' },
    { url: '/notable/mohsen', h1Contains: 'Mohsen Mofakham' },
    { url: '/notable/farshi', h1Contains: 'Mirza Agha Farshi' },
    { url: '/notable/freydoon', h1Contains: 'Fereydoun Sahebjam' },
    { url: '/notable/embassy', h1Contains: 'Persian Embassy in Bruxelles' },
  ]
  notables.forEach(item => {
    it('should navigate to ' + item.url + ' page', () => {
      cy.visit('http://localhost:3000/')
      cy.get('body > header > div.text-white > nav > div > div:nth-child(3) > a').click()
      cy.get('a[href*="' + item.url + '"]').click()
      cy.url().should('include', item.url)
      cy.get('h1').contains(item.h1Contains)
      console.log('iteration test complete', item)
    })
  })
  
  it('should navigate to the Mausoleum page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href*="/mausoleum"]').click()
    cy.url().should('include', '/mausoleum')
    cy.get('h1').contains('Mausoleum')
  })

  it('should navigate to the Photographs page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href*="/photographs"]').click()
    cy.url().should('include', '/photographs')
    cy.get('h1').contains('Photographs')
  })

})