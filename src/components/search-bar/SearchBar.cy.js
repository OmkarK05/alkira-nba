import React from 'react'
import SearchBar from './SearchBar';

describe('<SearchBar />', () => {
  it('renders', () => {
    cy.mount(<SearchBar />)
    cy.get('#search-bar-input-field').should('have.attr', 'placeholder', 'Search');
  })
})