import React from "react"
import SearchBar from "./SearchBar";

describe("<SearchBar />", () => {
  beforeEach(() => {
    cy.mount(<SearchBar />)
  })
  it("Check if search bar is rendered with Search placeholder", () => {
    let searchBar = cy.get("#search-bar-input-field");
    searchBar.should("have.attr", "placeholder", "Search");
  })
})