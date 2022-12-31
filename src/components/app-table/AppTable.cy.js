import React from 'react'
import AppTable from './AppTable';

describe('<SearchBar />', () => {
  it('renders', () => {
    cy.mount(<AppTable />)
    expect(cy.get('#app-table')).to.exist;
  })
})