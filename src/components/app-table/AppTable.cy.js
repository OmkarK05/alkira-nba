import React from "react"
import AppTable from "./AppTable";

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
          "id": 1,
          "cells": [
              {
                  "value": "Hawks"
              },
              {
                  "value": "Atlanta"
              },
              {
                  "value": "ATL"
              },
              {
                  "value": "East"
              },
              {
                  "value": "Southeast"
              }
          ]
      },
      {
          "id": 2,
          "cells": [
              {
                  "value": "Celtics"
              },
              {
                  "value": "Boston"
              },
              {
                  "value": "BOS"
              },
              {
                  "value": "East"
              },
              {
                  "value": "Atlantic"
              }
          ]
      },
      {
          "id": 3,
          "cells": [
              {
                  "value": "Nets"
              },
              {
                  "value": "Brooklyn"
              },
              {
                  "value": "BKN"
              },
              {
                  "value": "East"
              },
              {
                  "value": "Atlantic"
              }
          ]
      },
      {
          "id": 4,
          "cells": [
              {
                  "value": "Hornets"
              },
              {
                  "value": "Charlotte"
              },
              {
                  "value": "CHA"
              },
              {
                  "value": "East"
              },
              {
                  "value": "Southeast"
              }
          ]
      },
      {
          "id": 5,
          "cells": [
              {
                  "value": "Bulls"
              },
              {
                  "value": "Chicago"
              },
              {
                  "value": "CHI"
              },
              {
                  "value": "East"
              },
              {
                  "value": "Central"
              }
          ]
      },
      {
          "id": 6,
          "cells": [
              {
                  "value": "Cavaliers"
              },
              {
                  "value": "Cleveland"
              },
              {
                  "value": "CLE"
              },
              {
                  "value": "East"
              },
              {
                  "value": "Central"
              }
          ]
      },
      {
          "id": 7,
          "cells": [
              {
                  "value": "Mavericks"
              },
              {
                  "value": "Dallas"
              },
              {
                  "value": "DAL"
              },
              {
                  "value": "West"
              },
              {
                  "value": "Southwest"
              }
          ]
      },
      {
          "id": 8,
          "cells": [
              {
                  "value": "Nuggets"
              },
              {
                  "value": "Denver"
              },
              {
                  "value": "DEN"
              },
              {
                  "value": "West"
              },
              {
                  "value": "Northwest"
              }
          ]
      },
      {
          "id": 9,
          "cells": [
              {
                  "value": "Pistons"
              },
              {
                  "value": "Detroit"
              },
              {
                  "value": "DET"
              },
              {
                  "value": "East"
              },
              {
                  "value": "Central"
              }
          ]
      },
      {
          "id": 10,
          "cells": [
              {
                  "value": "Warriors"
              },
              {
                  "value": "Golden State"
              },
              {
                  "value": "GSW"
              },
              {
                  "value": "West"
              },
              {
                  "value": "Pacific"
              }
          ]
      },
      {
          "id": 11,
          "cells": [
              {
                  "value": "Rockets"
              },
              {
                  "value": "Houston"
              },
              {
                  "value": "HOU"
              },
              {
                  "value": "West"
              },
              {
                  "value": "Southwest"
              }
          ]
      },
      {
          "id": 12,
          "cells": [
              {
                  "value": "Pacers"
              },
              {
                  "value": "Indiana"
              },
              {
                  "value": "IND"
              },
              {
                  "value": "East"
              },
              {
                  "value": "Central"
              }
          ]
      },
      {
          "id": 13,
          "cells": [
              {
                  "value": "Clippers"
              },
              {
                  "value": "LA"
              },
              {
                  "value": "LAC"
              },
              {
                  "value": "West"
              },
              {
                  "value": "Pacific"
              }
          ]
      },
      {
          "id": 14,
          "cells": [
              {
                  "value": "Lakers"
              },
              {
                  "value": "Los Angeles"
              },
              {
                  "value": "LAL"
              },
              {
                  "value": "West"
              },
              {
                  "value": "Pacific"
              }
          ]
      },
      {
          "id": 15,
          "cells": [
              {
                  "value": "Grizzlies"
              },
              {
                  "value": "Memphis"
              },
              {
                  "value": "MEM"
              },
              {
                  "value": "West"
              },
              {
                  "value": "Southwest"
              }
          ]
      },
      {
          "id": 16,
          "cells": [
              {
                  "value": "Heat"
              },
              {
                  "value": "Miami"
              },
              {
                  "value": "MIA"
              },
              {
                  "value": "East"
              },
              {
                  "value": "Southeast"
              }
          ]
      },
      {
          "id": 17,
          "cells": [
              {
                  "value": "Bucks"
              },
              {
                  "value": "Milwaukee"
              },
              {
                  "value": "MIL"
              },
              {
                  "value": "East"
              },
              {
                  "value": "Central"
              }
          ]
      },
      {
          "id": 18,
          "cells": [
              {
                  "value": "Timberwolves"
              },
              {
                  "value": "Minnesota"
              },
              {
                  "value": "MIN"
              },
              {
                  "value": "West"
              },
              {
                  "value": "Northwest"
              }
          ]
      },
      {
          "id": 19,
          "cells": [
              {
                  "value": "Pelicans"
              },
              {
                  "value": "New Orleans"
              },
              {
                  "value": "NOP"
              },
              {
                  "value": "West"
              },
              {
                  "value": "Southwest"
              }
          ]
      },
      {
          "id": 20,
          "cells": [
              {
                  "value": "Knicks"
              },
              {
                  "value": "New York"
              },
              {
                  "value": "NYK"
              },
              {
                  "value": "East"
              },
              {
                  "value": "Atlantic"
              }
          ]
      },
      {
          "id": 21,
          "cells": [
              {
                  "value": "Thunder"
              },
              {
                  "value": "Oklahoma City"
              },
              {
                  "value": "OKC"
              },
              {
                  "value": "West"
              },
              {
                  "value": "Northwest"
              }
          ]
      },
      {
          "id": 22,
          "cells": [
              {
                  "value": "Magic"
              },
              {
                  "value": "Orlando"
              },
              {
                  "value": "ORL"
              },
              {
                  "value": "East"
              },
              {
                  "value": "Southeast"
              }
          ]
      },
      {
          "id": 23,
          "cells": [
              {
                  "value": "76ers"
              },
              {
                  "value": "Philadelphia"
              },
              {
                  "value": "PHI"
              },
              {
                  "value": "East"
              },
              {
                  "value": "Atlantic"
              }
          ]
      },
      {
          "id": 24,
          "cells": [
              {
                  "value": "Suns"
              },
              {
                  "value": "Phoenix"
              },
              {
                  "value": "PHX"
              },
              {
                  "value": "West"
              },
              {
                  "value": "Pacific"
              }
          ]
      },
      {
          "id": 25,
          "cells": [
              {
                  "value": "Trail Blazers"
              },
              {
                  "value": "Portland"
              },
              {
                  "value": "POR"
              },
              {
                  "value": "West"
              },
              {
                  "value": "Northwest"
              }
          ]
      },
      {
          "id": 26,
          "cells": [
              {
                  "value": "Kings"
              },
              {
                  "value": "Sacramento"
              },
              {
                  "value": "SAC"
              },
              {
                  "value": "West"
              },
              {
                  "value": "Pacific"
              }
          ]
      },
      {
          "id": 27,
          "cells": [
              {
                  "value": "Spurs"
              },
              {
                  "value": "San Antonio"
              },
              {
                  "value": "SAS"
              },
              {
                  "value": "West"
              },
              {
                  "value": "Southwest"
              }
          ]
      },
      {
          "id": 28,
          "cells": [
              {
                  "value": "Raptors"
              },
              {
                  "value": "Toronto"
              },
              {
                  "value": "TOR"
              },
              {
                  "value": "East"
              },
              {
                  "value": "Atlantic"
              }
          ]
      },
      {
          "id": 29,
          "cells": [
              {
                  "value": "Jazz"
              },
              {
                  "value": "Utah"
              },
              {
                  "value": "UTA"
              },
              {
                  "value": "West"
              },
              {
                  "value": "Northwest"
              }
          ]
      },
      {
          "id": 30,
          "cells": [
              {
                  "value": "Wizards"
              },
              {
                  "value": "Washington"
              },
              {
                  "value": "WAS"
              },
              {
                  "value": "East"
              },
              {
                  "value": "Southeast"
              }
          ]
      }
  ],
  "pagination": {
      "current_page": 1,
      "total_pages": 5
  }
};

describe("<AppTable />", () => {
  beforeEach(() => {
    cy.mount(<AppTable table={dummyTable} pagination />)
  })

  it("Should have headers", () => {
    const headerElements = cy.get(".table-header-cell-title");
    headerElements.each((ele, index) => {
      expect(ele.text()).to.equals(dummyTable["headers"][index]["label"]);
    });
  })

  it("Should have headers with sort ascending icon", () => {
    const headerElements = cy.get("th");
    headerElements.each((ele,) => {
      cy.get(ele).find("#app-table-sort-ascending-icon").should("exist");
    });
  })

  it("Should have headers with sort descending icon", () => {
    const headerElements = cy.get("th");
    headerElements.each((ele) => {
      cy.get(ele).find("#app-table-sort-descending-icon").should("exist");
    });
  })

  it("Should have rows", () => {
    const tableBodyRowElements = cy.get("tbody").find("tr");
    tableBodyRowElements.should("have.length", 7);
  })

  it("Should have pagination button next", () => {
    const tableBodyRowElements = cy.get("#app-table-pagination-next-button");
    tableBodyRowElements.should("exist");
  })

  it("Should have pagination button previous", () => {
    const tableBodyRowElements = cy.get("#app-table-pagination-previous-button");
    tableBodyRowElements.should("exist");
  })

  it("Should display pagination 1 of 5", () => {
    cy.get("#app-table-pagination-text").should("have.text", "1in5");
  })

  describe("When user click pagiantion next button", () => {
    beforeEach(() => {
      cy.get("#app-table-pagination-next-button").click();
    });

    it("Should show next page 7 rows on clicking pagination next", () => {
      const tableBodyRowElements = cy.get("tbody").find("tr");
      tableBodyRowElements.should("have.length", 7);
    })

    it("Should show next page rows data on clicking pagination next", () => {
      const tableBodyRowElements = cy.get("tbody").find("tr");
      let tableRows = dummyTable["body"].slice(7, 14);
      tableBodyRowElements.each((tr, index) => {
        cy.get(tr).find("td").first().should("have.text", tableRows[index]['cells'][0]['value']);
      });
    })

    it("Should display pagination 2 of 5", () => {
      cy.get("#app-table-pagination-text").should("have.text", "2in5");
    })

    describe("When user clicks pagiantion previous button", () => {
      beforeEach(() => {
        cy.get("#app-table-pagination-previous-button").click();
      });
  
      it("Should show previous page 7 rows on clicking pagination next", () => {
        const tableBodyRowElements = cy.get("tbody").find("tr");
        tableBodyRowElements.should("have.length", 7);
      })
  
      it("Should show previous page rows data on clicking pagination next", () => {
        const tableBodyRowElements = cy.get("tbody").find("tr");
        let tableRows = dummyTable["body"].slice(0, 7);
        tableBodyRowElements.each((tr, index) => {
          cy.get(tr).find("td").first().should("have.text", tableRows[index]['cells'][0]['value']);
        });
      })
  
      it("Should display pagination 1 of 5", () => {
        cy.get("#app-table-pagination-text").should("have.text", "1in5");
      })
    })
  })

  describe("When user sorts table in ascending order", () => {
    beforeEach(() => {
      cy.get("th").first().find("#app-table-sort-ascending-icon").click();
    })

    it("Should sort table in ascending", () => {
      let sortedRows = [
        {
            "id": 23,
            "cells": [
                {
                    "value": "76ers"
                },
                {
                    "value": "Philadelphia"
                },
                {
                    "value": "PHI"
                },
                {
                    "value": "East"
                },
                {
                    "value": "Atlantic"
                }
            ]
        },
        {
            "id": 17,
            "cells": [
                {
                    "value": "Bucks"
                },
                {
                    "value": "Milwaukee"
                },
                {
                    "value": "MIL"
                },
                {
                    "value": "East"
                },
                {
                    "value": "Central"
                }
            ]
        },
        {
            "id": 5,
            "cells": [
                {
                    "value": "Bulls"
                },
                {
                    "value": "Chicago"
                },
                {
                    "value": "CHI"
                },
                {
                    "value": "East"
                },
                {
                    "value": "Central"
                }
            ]
        },
        {
            "id": 6,
            "cells": [
                {
                    "value": "Cavaliers"
                },
                {
                    "value": "Cleveland"
                },
                {
                    "value": "CLE"
                },
                {
                    "value": "East"
                },
                {
                    "value": "Central"
                }
            ]
        },
        {
            "id": 2,
            "cells": [
                {
                    "value": "Celtics"
                },
                {
                    "value": "Boston"
                },
                {
                    "value": "BOS"
                },
                {
                    "value": "East"
                },
                {
                    "value": "Atlantic"
                }
            ]
        },
        {
            "id": 13,
            "cells": [
                {
                    "value": "Clippers"
                },
                {
                    "value": "LA"
                },
                {
                    "value": "LAC"
                },
                {
                    "value": "West"
                },
                {
                    "value": "Pacific"
                }
            ]
        },
        {
            "id": 15,
            "cells": [
                {
                    "value": "Grizzlies"
                },
                {
                    "value": "Memphis"
                },
                {
                    "value": "MEM"
                },
                {
                    "value": "West"
                },
                {
                    "value": "Southwest"
                }
            ]
        }
      ]

      const tableBodyRowElements = cy.get("tbody").find("tr");
      tableBodyRowElements.each((tr, index) => {
        cy.get(tr).find("td").first().should("have.text", sortedRows[index]['cells'][0]['value']);
      });
    })
  })

  describe("When user sorts table in descending order", () => {
    beforeEach(() => {
      cy.get("th").first().find("#app-table-sort-descending-icon").click();
    })

    it("Should sort table in descending", () => {
      let sortedRows = [
        {
            "id": 30,
            "cells": [
                {
                    "value": "Wizards"
                },
                {
                    "value": "Washington"
                },
                {
                    "value": "WAS"
                },
                {
                    "value": "East"
                },
                {
                    "value": "Southeast"
                }
            ]
        },
        {
            "id": 10,
            "cells": [
                {
                    "value": "Warriors"
                },
                {
                    "value": "Golden State"
                },
                {
                    "value": "GSW"
                },
                {
                    "value": "West"
                },
                {
                    "value": "Pacific"
                }
            ]
        },
        {
            "id": 25,
            "cells": [
                {
                    "value": "Trail Blazers"
                },
                {
                    "value": "Portland"
                },
                {
                    "value": "POR"
                },
                {
                    "value": "West"
                },
                {
                    "value": "Northwest"
                }
            ]
        },
        {
            "id": 18,
            "cells": [
                {
                    "value": "Timberwolves"
                },
                {
                    "value": "Minnesota"
                },
                {
                    "value": "MIN"
                },
                {
                    "value": "West"
                },
                {
                    "value": "Northwest"
                }
            ]
        },
        {
            "id": 21,
            "cells": [
                {
                    "value": "Thunder"
                },
                {
                    "value": "Oklahoma City"
                },
                {
                    "value": "OKC"
                },
                {
                    "value": "West"
                },
                {
                    "value": "Northwest"
                }
            ]
        },
        {
            "id": 24,
            "cells": [
                {
                    "value": "Suns"
                },
                {
                    "value": "Phoenix"
                },
                {
                    "value": "PHX"
                },
                {
                    "value": "West"
                },
                {
                    "value": "Pacific"
                }
            ]
        },
        {
            "id": 27,
            "cells": [
                {
                    "value": "Spurs"
                },
                {
                    "value": "San Antonio"
                },
                {
                    "value": "SAS"
                },
                {
                    "value": "West"
                },
                {
                    "value": "Southwest"
                }
            ]
        }
      ]

      const tableBodyRowElements = cy.get("tbody").find("tr");
      tableBodyRowElements.each((tr, index) => {
        cy.get(tr).find("td").first().should("have.text", sortedRows[index]['cells'][0]['value']);
      });
    })
  })

})