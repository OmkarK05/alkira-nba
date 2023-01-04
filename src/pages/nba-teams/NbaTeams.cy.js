import React from "react";
import NbaTeams from "./NbaTeams.js";
import "../../services/axiosInterpreter";

describe("<NbaTeams />", () => {
  let table = {
    "data": [
      {
        "id": 1,
        "abbreviation": "ATL",
        "city": "Atlanta",
        "conference": "East",
        "division": "Southeast",
        "full_name": "Atlanta Hawks",
        "name": "Hawks"
      },
      {
        "id": 2,
        "abbreviation": "BOS",
        "city": "Boston",
        "conference": "East",
        "division": "Atlantic",
        "full_name": "Boston Celtics",
        "name": "Celtics"
      },
      {
        "id": 3,
        "abbreviation": "BKN",
        "city": "Brooklyn",
        "conference": "East",
        "division": "Atlantic",
        "full_name": "Brooklyn Nets",
        "name": "Nets"
      },
      {
        "id": 4,
        "abbreviation": "CHA",
        "city": "Charlotte",
        "conference": "East",
        "division": "Southeast",
        "full_name": "Charlotte Hornets",
        "name": "Hornets"
      },
      {
        "id": 5,
        "abbreviation": "CHI",
        "city": "Chicago",
        "conference": "East",
        "division": "Central",
        "full_name": "Chicago Bulls",
        "name": "Bulls"
      },
      {
        "id": 6,
        "abbreviation": "CLE",
        "city": "Cleveland",
        "conference": "East",
        "division": "Central",
        "full_name": "Cleveland Cavaliers",
        "name": "Cavaliers"
      },
      {
        "id": 7,
        "abbreviation": "DAL",
        "city": "Dallas",
        "conference": "West",
        "division": "Southwest",
        "full_name": "Dallas Mavericks",
        "name": "Mavericks"
      },
      {
        "id": 8,
        "abbreviation": "DEN",
        "city": "Denver",
        "conference": "West",
        "division": "Northwest",
        "full_name": "Denver Nuggets",
        "name": "Nuggets"
      },
      {
        "id": 9,
        "abbreviation": "DET",
        "city": "Detroit",
        "conference": "East",
        "division": "Central",
        "full_name": "Detroit Pistons",
        "name": "Pistons"
      },
      {
        "id": 10,
        "abbreviation": "GSW",
        "city": "Golden State",
        "conference": "West",
        "division": "Pacific",
        "full_name": "Golden State Warriors",
        "name": "Warriors"
      },
      {
        "id": 11,
        "abbreviation": "HOU",
        "city": "Houston",
        "conference": "West",
        "division": "Southwest",
        "full_name": "Houston Rockets",
        "name": "Rockets"
      },
      {
        "id": 12,
        "abbreviation": "IND",
        "city": "Indiana",
        "conference": "East",
        "division": "Central",
        "full_name": "Indiana Pacers",
        "name": "Pacers"
      },
      {
        "id": 13,
        "abbreviation": "LAC",
        "city": "LA",
        "conference": "West",
        "division": "Pacific",
        "full_name": "LA Clippers",
        "name": "Clippers"
      },
      {
        "id": 14,
        "abbreviation": "LAL",
        "city": "Los Angeles",
        "conference": "West",
        "division": "Pacific",
        "full_name": "Los Angeles Lakers",
        "name": "Lakers"
      },
      {
        "id": 15,
        "abbreviation": "MEM",
        "city": "Memphis",
        "conference": "West",
        "division": "Southwest",
        "full_name": "Memphis Grizzlies",
        "name": "Grizzlies"
      },
      {
        "id": 16,
        "abbreviation": "MIA",
        "city": "Miami",
        "conference": "East",
        "division": "Southeast",
        "full_name": "Miami Heat",
        "name": "Heat"
      },
      {
        "id": 17,
        "abbreviation": "MIL",
        "city": "Milwaukee",
        "conference": "East",
        "division": "Central",
        "full_name": "Milwaukee Bucks",
        "name": "Bucks"
      },
      {
        "id": 18,
        "abbreviation": "MIN",
        "city": "Minnesota",
        "conference": "West",
        "division": "Northwest",
        "full_name": "Minnesota Timberwolves",
        "name": "Timberwolves"
      },
      {
        "id": 19,
        "abbreviation": "NOP",
        "city": "New Orleans",
        "conference": "West",
        "division": "Southwest",
        "full_name": "New Orleans Pelicans",
        "name": "Pelicans"
      },
      {
        "id": 20,
        "abbreviation": "NYK",
        "city": "New York",
        "conference": "East",
        "division": "Atlantic",
        "full_name": "New York Knicks",
        "name": "Knicks"
      },
      {
        "id": 21,
        "abbreviation": "OKC",
        "city": "Oklahoma City",
        "conference": "West",
        "division": "Northwest",
        "full_name": "Oklahoma City Thunder",
        "name": "Thunder"
      },
      {
        "id": 22,
        "abbreviation": "ORL",
        "city": "Orlando",
        "conference": "East",
        "division": "Southeast",
        "full_name": "Orlando Magic",
        "name": "Magic"
      },
      {
        "id": 23,
        "abbreviation": "PHI",
        "city": "Philadelphia",
        "conference": "East",
        "division": "Atlantic",
        "full_name": "Philadelphia 76ers",
        "name": "76ers"
      },
      {
        "id": 24,
        "abbreviation": "PHX",
        "city": "Phoenix",
        "conference": "West",
        "division": "Pacific",
        "full_name": "Phoenix Suns",
        "name": "Suns"
      },
      {
        "id": 25,
        "abbreviation": "POR",
        "city": "Portland",
        "conference": "West",
        "division": "Northwest",
        "full_name": "Portland Trail Blazers",
        "name": "Trail Blazers"
      },
      {
        "id": 26,
        "abbreviation": "SAC",
        "city": "Sacramento",
        "conference": "West",
        "division": "Pacific",
        "full_name": "Sacramento Kings",
        "name": "Kings"
      },
      {
        "id": 27,
        "abbreviation": "SAS",
        "city": "San Antonio",
        "conference": "West",
        "division": "Southwest",
        "full_name": "San Antonio Spurs",
        "name": "Spurs"
      },
      {
        "id": 28,
        "abbreviation": "TOR",
        "city": "Toronto",
        "conference": "East",
        "division": "Atlantic",
        "full_name": "Toronto Raptors",
        "name": "Raptors"
      },
      {
        "id": 29,
        "abbreviation": "UTA",
        "city": "Utah",
        "conference": "West",
        "division": "Northwest",
        "full_name": "Utah Jazz",
        "name": "Jazz"
      },
      {
        "id": 30,
        "abbreviation": "WAS",
        "city": "Washington",
        "conference": "East",
        "division": "Southeast",
        "full_name": "Washington Wizards",
        "name": "Wizards"
      }
    ],
  };
  let teamGame = {
    "data" :  [
      {
        "id": 47179,
        "date": "2019-01-30T00:00:00.000Z",
        "home_team": {
          "id": 2,
          "abbreviation": "BOS",
          "city": "Boston",
          "conference": "East",
          "division": "Atlantic",
          "full_name": "Boston Celtics",
          "name": "Celtics"
        },
        "home_team_score": 126,
        "period": 4,
        "postseason": false,
        "season": 2018,
        "status": "Final",
        "time": " ",
        "visitor_team": {
          "id": 4,
          "abbreviation": "CHA",
          "city": "Charlotte",
          "conference": "East",
          "division": "Southeast",
          "full_name": "Charlotte Hornets",
          "name": "Hornets"
        },
        "visitor_team_score": 94
      },
    ]
  }
  beforeEach(() => {
    cy.intercept("https://www.balldontlie.io/api/v1/teams", table).as("getNbaTeams")
    cy.mount(<NbaTeams />);
    cy.wait("@getNbaTeams");
  })

  it("Check if table is rendered", () => {
    const table = cy.get("#app-table");
    table.should("exist");
  });

  it("Shoudl show only 1 row in table", () => {
    let searchBar = cy.get("#search-bar-input-field");
    searchBar.type("Hawks");
    cy.get("tbody").find("tr").should("have.length", 1);
  });

  it("Should show only Hawks row", () => {
    let searchBar = cy.get("#search-bar-input-field");
    searchBar.type("Hawks");        
    cy.get("tbody").find("tr").find("td").first().should("have.text", "Hawks");
  })

  describe("When user click on any table row", () => {
    beforeEach(() => {
      cy.intercept("https://www.balldontlie.io/api/v1/games?team_ids=1", teamGame).as("getNbaTeamGames")
      cy.get("tbody").find("tr").first().click()
      cy.wait("@getNbaTeamGames");
    })

    it("Should open drawer", () => {
      cy.get("#app-drawer").should("exist");
    });

    it("Should render title", () => {
      cy.get("#app-drawer-header-block").find("#app-drawer-header-title").should("have.text", "Celtics");
    });

    it("Should render team full name", () => {
      cy.get("#app-drawer-team-full-name").find("#app-drawer-team-full-name-title").should("have.text", "Team Full Name");
      cy.get("#app-drawer-team-full-name").find("#app-drawer-team-full-name-value").should("have.text", "Boston Celtics");
    });

    it("Should render team game detail", () => {
      cy.get("#app-drawer-team-game-detail").find("#app-drawer-team-game-detail-title").should("have.text", "Total Games in 2018");
      cy.get("#app-drawer-team-game-detail").find("#app-drawer-team-game-detail-value").should("have.text", "88");
    });

    it("Should render team game detail date", () => {
      cy.get("#team-game-detail-date").find("#team-game-detail-date-title").should("have.text", "Date");
      cy.get("#team-game-detail-date").find("#team-game-detail-date-value").should("have.text", "2019-01-30");
    });

    it("Should render team game detail home team name", () => {
      cy.get("#team-game-detail-home-team").find("#team-game-detail-home-team-title").should("have.text", "Home Team");
      cy.get("#team-game-detail-home-team").find("#team-game-detail-home-team-value").should("have.text", "Celtics");
    });

    it("Should render team game detail home team score", () => {
      cy.get("#team-game-detail-home-team-score").find("#team-game-detail-home-team-score-title").should("have.text", "Home Team Score");
      cy.get("#team-game-detail-home-team-score").find("#team-game-detail-home-team-score-value").should("have.text", "126");
    });

    it("Should render team game detail visitor team name", () => {
      cy.get("#team-game-detail-visitor-team").find("#team-game-detail-visitor-team-title").should("have.text", "Visitor Team");
      cy.get("#team-game-detail-visitor-team").find("#team-game-detail-visitor-team-value").should("have.text", "Charlotte Hornets");
    });

    it("Should render team game detail visitor team score", () => {
      cy.get("#team-game-detail-visitor-team-score").find("#team-game-detail-visitor-team-score-title").should("have.text", "Visitor Team Score");
      cy.get("#team-game-detail-visitor-team-score").find("#team-game-detail-visitor-team-score-value").should("have.text", "94");
    });


  })
})