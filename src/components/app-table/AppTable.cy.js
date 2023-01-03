import React from 'react'
import AppTable from './AppTable';

const dummyTable = {
  "headers": [
      {
          "name": "team_name",
          "label": "Team Name"
      },
      {
          "name": "city",
          "label": "City"
      },
      {
          "name": "abbreviation",
          "label": "Abbreviation"
      },
      {
          "name": "conference",
          "label": "Conference"
      },
      {
          "name": "division",
          "label": "Division"
      }
  ],
  "body": [
      {
          "team_name": "Hawks",
          "city": "Atlanta",
          "abbreviation": "ATL",
          "conference": "East",
          "division": "Southeast",
          "id": 1
      },
      {
          "team_name": "Celtics",
          "city": "Boston",
          "abbreviation": "BOS",
          "conference": "East",
          "division": "Atlantic",
          "id": 2
      },
      {
          "team_name": "Nets",
          "city": "Brooklyn",
          "abbreviation": "BKN",
          "conference": "East",
          "division": "Atlantic",
          "id": 3
      },
      {
          "team_name": "Hornets",
          "city": "Charlotte",
          "abbreviation": "CHA",
          "conference": "East",
          "division": "Southeast",
          "id": 4
      },
      {
          "team_name": "Bulls",
          "city": "Chicago",
          "abbreviation": "CHI",
          "conference": "East",
          "division": "Central",
          "id": 5
      },
      {
          "team_name": "Cavaliers",
          "city": "Cleveland",
          "abbreviation": "CLE",
          "conference": "East",
          "division": "Central",
          "id": 6
      },
      {
          "team_name": "Mavericks",
          "city": "Dallas",
          "abbreviation": "DAL",
          "conference": "West",
          "division": "Southwest",
          "id": 7
      },
      {
          "team_name": "Nuggets",
          "city": "Denver",
          "abbreviation": "DEN",
          "conference": "West",
          "division": "Northwest",
          "id": 8
      },
      {
          "team_name": "Pistons",
          "city": "Detroit",
          "abbreviation": "DET",
          "conference": "East",
          "division": "Central",
          "id": 9
      },
      {
          "team_name": "Warriors",
          "city": "Golden State",
          "abbreviation": "GSW",
          "conference": "West",
          "division": "Pacific",
          "id": 10
      },
      {
          "team_name": "Rockets",
          "city": "Houston",
          "abbreviation": "HOU",
          "conference": "West",
          "division": "Southwest",
          "id": 11
      },
      {
          "team_name": "Pacers",
          "city": "Indiana",
          "abbreviation": "IND",
          "conference": "East",
          "division": "Central",
          "id": 12
      },
      {
          "team_name": "Clippers",
          "city": "LA",
          "abbreviation": "LAC",
          "conference": "West",
          "division": "Pacific",
          "id": 13
      },
      {
          "team_name": "Lakers",
          "city": "Los Angeles",
          "abbreviation": "LAL",
          "conference": "West",
          "division": "Pacific",
          "id": 14
      },
      {
          "team_name": "Grizzlies",
          "city": "Memphis",
          "abbreviation": "MEM",
          "conference": "West",
          "division": "Southwest",
          "id": 15
      },
      {
          "team_name": "Heat",
          "city": "Miami",
          "abbreviation": "MIA",
          "conference": "East",
          "division": "Southeast",
          "id": 16
      },
      {
          "team_name": "Bucks",
          "city": "Milwaukee",
          "abbreviation": "MIL",
          "conference": "East",
          "division": "Central",
          "id": 17
      },
      {
          "team_name": "Timberwolves",
          "city": "Minnesota",
          "abbreviation": "MIN",
          "conference": "West",
          "division": "Northwest",
          "id": 18
      },
      {
          "team_name": "Pelicans",
          "city": "New Orleans",
          "abbreviation": "NOP",
          "conference": "West",
          "division": "Southwest",
          "id": 19
      },
      {
          "team_name": "Knicks",
          "city": "New York",
          "abbreviation": "NYK",
          "conference": "East",
          "division": "Atlantic",
          "id": 20
      },
      {
          "team_name": "Thunder",
          "city": "Oklahoma City",
          "abbreviation": "OKC",
          "conference": "West",
          "division": "Northwest",
          "id": 21
      },
      {
          "team_name": "Magic",
          "city": "Orlando",
          "abbreviation": "ORL",
          "conference": "East",
          "division": "Southeast",
          "id": 22
      },
      {
          "team_name": "76ers",
          "city": "Philadelphia",
          "abbreviation": "PHI",
          "conference": "East",
          "division": "Atlantic",
          "id": 23
      },
      {
          "team_name": "Suns",
          "city": "Phoenix",
          "abbreviation": "PHX",
          "conference": "West",
          "division": "Pacific",
          "id": 24
      },
      {
          "team_name": "Trail Blazers",
          "city": "Portland",
          "abbreviation": "POR",
          "conference": "West",
          "division": "Northwest",
          "id": 25
      },
      {
          "team_name": "Kings",
          "city": "Sacramento",
          "abbreviation": "SAC",
          "conference": "West",
          "division": "Pacific",
          "id": 26
      },
      {
          "team_name": "Spurs",
          "city": "San Antonio",
          "abbreviation": "SAS",
          "conference": "West",
          "division": "Southwest",
          "id": 27
      },
      {
          "team_name": "Raptors",
          "city": "Toronto",
          "abbreviation": "TOR",
          "conference": "East",
          "division": "Atlantic",
          "id": 28
      },
      {
          "team_name": "Jazz",
          "city": "Utah",
          "abbreviation": "UTA",
          "conference": "West",
          "division": "Northwest",
          "id": 29
      },
      {
          "team_name": "Wizards",
          "city": "Washington",
          "abbreviation": "WAS",
          "conference": "East",
          "division": "Southeast",
          "id": 30
      }
  ],
  "pagination": {
      "current_page": 1,
      "total_pages": 5
  }
};

describe('<AppTable />', () => {
    beforeEach(() => {
      cy.mount(<AppTable table={dummyTable} pagination />)
    })

    it('Should have headers', () => {
      const headerElements = cy.get('.table-header-cell-title');
      headerElements.each((ele, index) => {
        expect(ele.text()).to.equals(dummyTable['headers'][index]['label']);
      });
    })

    it('Should have headers with sort ascending icon', () => {
      const headerElements = cy.get('th');
      headerElements.each((ele, index) => {
        cy.get(ele).find('#app-table-sort-ascending-icon').should('exist');
      });
    })

    it('Should have headers with sort descending icon', () => {
      const headerElements = cy.get('th');
      headerElements.each((ele, index) => {
        cy.get(ele).find('#app-table-sort-descending-icon').should('exist');
      });
    })

    it('Should have rows', () => {
      const tableBodyRowElements = cy.get('tbody').find('tr');
      tableBodyRowElements.should('have.length', 7);
    })

    it('Should have pagination button next', () => {
      const tableBodyRowElements = cy.get('#app-table-pagination-next-button');
      tableBodyRowElements.should('exist');
    })

    it('Should have pagination button previous', () => {
      const tableBodyRowElements = cy.get('#app-table-pagination-previous-button');
      tableBodyRowElements.should('exist');
    })

    it('Should display pagination 1 of 5', () => {
      cy.get('#app-table-pagination-text').should('have.text', '1in5');
    })

    describe('When user click pagiantion next button', () => {
      beforeEach(() => {
        cy.get('#app-table-pagination-next-button').click();
      });

      it('Should show next page data on clicking pagination next', () => {
        const tableBodyRowElements = cy.get('tbody').find('tr');
        tableBodyRowElements.should('have.length', 7);
      })

      it('Should show next page data on clicking pagination next', () => {
        const tableBodyRowElements = cy.get('tbody').find('tr');
        let tableRows = dummyTable['body'].slice(7, 14);
        tableBodyRowElements.each((tr, index) => {
          cy.get(tr).find('td').first().should('have.text', tableRows[index]['team_name']);
        });
      })

      it('Should display pagination 2 of 5', () => {
        cy.get('#app-table-pagination-text').should('have.text', '2in5');
      })

      describe('When user clicks pagiantion previous button', () => {
        beforeEach(() => {
          cy.get('#app-table-pagination-previous-button').click();
        });
  
        it('Should show next page data on clicking pagination next', () => {
          const tableBodyRowElements = cy.get('tbody').find('tr');
          tableBodyRowElements.should('have.length', 7);
        })
  
        it('Should show next page data on clicking pagination next', () => {
          const tableBodyRowElements = cy.get('tbody').find('tr');
          let tableRows = dummyTable['body'].slice(0, 7);
          tableBodyRowElements.each((tr, index) => {
            cy.get(tr).find('td').first().should('have.text', tableRows[index]['team_name']);
          });
        })
  
        it('Should display pagination 1 of 5', () => {
          cy.get('#app-table-pagination-text').should('have.text', '1in5');
        })
      })
    })

    describe('When user sorts table in ascending order', () => {
      beforeEach(() => {
        cy.get('th').first().find('#app-table-sort-ascending-icon').click();
      })

      it('Should sort table in ascending', () => {
        let sortedRows = [
          {
              "team_name": "76ers",
              "city": "Philadelphia",
              "abbreviation": "PHI",
              "conference": "East",
              "division": "Atlantic",
              "id": 23
          },
          {
              "team_name": "Bucks",
              "city": "Milwaukee",
              "abbreviation": "MIL",
              "conference": "East",
              "division": "Central",
              "id": 17
          },
          {
              "team_name": "Bulls",
              "city": "Chicago",
              "abbreviation": "CHI",
              "conference": "East",
              "division": "Central",
              "id": 5
          },
          {
              "team_name": "Cavaliers",
              "city": "Cleveland",
              "abbreviation": "CLE",
              "conference": "East",
              "division": "Central",
              "id": 6
          },
          {
              "team_name": "Celtics",
              "city": "Boston",
              "abbreviation": "BOS",
              "conference": "East",
              "division": "Atlantic",
              "id": 2
          },
          {
              "team_name": "Clippers",
              "city": "LA",
              "abbreviation": "LAC",
              "conference": "West",
              "division": "Pacific",
              "id": 13
          },
          {
              "team_name": "Grizzlies",
              "city": "Memphis",
              "abbreviation": "MEM",
              "conference": "West",
              "division": "Southwest",
              "id": 15
          }
        ]

        const tableBodyRowElements = cy.get('tbody').find('tr');
        tableBodyRowElements.each((tr, index) => {
          cy.get(tr).find('td').first().should('have.text', sortedRows[index]['team_name']);
        });
      })
    })

    describe('When user sorts table in descending order', () => {
      beforeEach(() => {
        cy.get('th').first().find('#app-table-sort-descending-icon').click();
      })

      it('Should sort table in ascending', () => {
        let sortedRows = [
          {
              "team_name": "Wizards",
              "city": "Washington",
              "abbreviation": "WAS",
              "conference": "East",
              "division": "Southeast",
              "id": 30
          },
          {
              "team_name": "Warriors",
              "city": "Golden State",
              "abbreviation": "GSW",
              "conference": "West",
              "division": "Pacific",
              "id": 10
          },
          {
              "team_name": "Trail Blazers",
              "city": "Portland",
              "abbreviation": "POR",
              "conference": "West",
              "division": "Northwest",
              "id": 25
          },
          {
              "team_name": "Timberwolves",
              "city": "Minnesota",
              "abbreviation": "MIN",
              "conference": "West",
              "division": "Northwest",
              "id": 18
          },
          {
              "team_name": "Thunder",
              "city": "Oklahoma City",
              "abbreviation": "OKC",
              "conference": "West",
              "division": "Northwest",
              "id": 21
          },
          {
              "team_name": "Suns",
              "city": "Phoenix",
              "abbreviation": "PHX",
              "conference": "West",
              "division": "Pacific",
              "id": 24
          },
          {
              "team_name": "Spurs",
              "city": "San Antonio",
              "abbreviation": "SAS",
              "conference": "West",
              "division": "Southwest",
              "id": 27
          }
        ]

        const tableBodyRowElements = cy.get('tbody').find('tr');
        tableBodyRowElements.each((tr, index) => {
          cy.get(tr).find('td').first().should('have.text', sortedRows[index]['team_name']);
        });
      })
    })

})