import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import AppDrawer from "../../components/app-drawer/AppDrawer";
import AppLoader from "../../components/app-loader/AppLoader";
import AppTable from "../../components/app-table/AppTable";
import SearchBar from "../../components/search-bar/SearchBar";
import { getNbaTeams, getNbaTeamGames } from "../../services/teams";
import "./NbaTeams.scoped.scss"

const NbaTeams = () => {
  const [teamsData, setTeamsData] = useState(null);
  const [teams, setTeams] = useState(null);
  const [teamGameDetails, setTeamGameDetails] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showDrawerLoader, setShowDrawerLoader] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState("");

  useEffect(() => {
    fetchNbaTeams();
  },[]);

  const fetchNbaTeams = () => {
    setShowDrawerLoader(true);
    setLoaderMessage("Getting Teams...");
    getNbaTeams().then((response) => {
      const headers =  [
        {name: "team_name", label: "Team Name"},
        {name: "city", label: "City"},
        {name: "abbreviation", label: "Abbreviation"},
        {name: "conference", label: "Conference"},
        {name: "division", label: "Division"},
      ];
      const formattedTeams = response["data"].map((team) => convertTeamIntoTableRow(team));
      setTeams(formattedTeams);
      const data = {
        headers,
        body: formattedTeams,
        pagination: {}
      };

      data["pagination"] = {
        current_page : 1,
        total_pages : Math.ceil(response["data"].length / 7)
      }
            
      setTeamsData(data);
    }).finally(() => setShowDrawerLoader(false))
  }
    
  const convertTeamIntoTableRow = (team) => {
    const row = {
      id: team["id"],
      cells: [],
    };
    row["cells"].push({ "value": team["name"] });
    row["cells"].push({ "value": team["city"] });
    row["cells"].push({ "value": team["abbreviation"] });
    row["cells"].push({ "value": team["conference"] });
    row["cells"].push({ "value": team["division"] });
    return row;
  };
  
  const getDefaultGameDetails = () => {
    return {
      date: "",
      season: "",
      home_team_full_name: "",
      home_team_name: "",
      home_team_score: "",
      visitor_team_name: "",
      visitor_team_score: "",
    }
  };

  const filterTeams = (teamName) => {
    if(teamName && teamName.trim().length){
      const searchResults = teams.filter((team) => team["cells"][0]["value"].toLowerCase().includes(teamName.toLowerCase()));
      setTeamsData({
        ...teamsData,
        body: searchResults,
        pagination: {
          current_page : 1,
          total_pages : Math.ceil(searchResults.length / 7)
        }
      })
    } else {
      setTeamsData({
        ...teamsData,
        body: teams,
        pagination: {
          current_page : 1,
          total_pages : Math.ceil(teams.length / 7)
        }
      })  
    }
  };

  const fetchTeamGames = (team) => {
    setShowDrawerLoader(true);
    setLoaderMessage("Getting Team Details...");
    getNbaTeamGames([team["id"]]).then(response => {
      const gameDetails =  getFormattedGame(response["data"][0]);
      setTeamGameDetails({...gameDetails});
      setShowDrawer(true);
    }).finally(() => setShowDrawerLoader(false));
  }

  const closeDrawer = () => {
    setShowDrawer(false);
    setTeamGameDetails(null);
  }

  const getFormattedGame = (game) => {
    const teamDetails = getDefaultGameDetails();
    teamDetails["date"] = getFormattedDate(game["date"]);
    teamDetails["season"] = game["season"];
    teamDetails["home_team_full_name"] = game["home_team"]["full_name"];
    teamDetails["home_team_name"] = game["home_team"]["name"];
    teamDetails["home_team_score"] = game["home_team_score"];
    teamDetails["visitor_team_name"] = game["visitor_team"]["full_name"];
    teamDetails["visitor_team_score"] = game["visitor_team_score"];
    return teamDetails;
  };

  /**
     * Method to get date from UTC date format
     * @param date {String} - UTC date
     * @returns {String} - date in YYYY-MM-DD format
     */
  const getFormattedDate = (date) => {
    return date.split("T")[0];
  }

  return(
    <Row className="justify-content-center py-4 px-3 position-relative g-0">
      <Col xl={10}>
        <p className="nba-teams-title text-primary font-weight-bold pb-2 font-largest">NBA Teams</p>
      </Col>
      <Col xl={10} className="mb-4 pb-2">
        <SearchBar search={filterTeams} />
      </Col>
      <Col xl={10}>
        <AppTable table={teamsData} pagination handleRowClick={fetchTeamGames} />
      </Col>
      {
        showDrawer && (
          <AppDrawer direction='right' width='350px' header={teamGameDetails["home_team_name"]} close={closeDrawer}>
            <div id="app-drawer-team-full-name" className="team-game-detail">
              <div id="app-drawer-team-full-name-title" className="team-game-detail-title">Team Full Name</div>
              <div id="app-drawer-team-full-name-value" className="team-game-detail-value">{teamGameDetails["home_team_full_name"]}</div>
            </div>
            <div id="app-drawer-team-game-detail" className="team-game-detail">
              <div id="app-drawer-team-game-detail-title" className="team-game-detail-title">Total Games in {teamGameDetails["season"]}</div>
              <div id="app-drawer-team-game-detail-value" className="team-game-detail-value">88</div>
            </div>
            <div className="team-game-detail-section-title">Random Game Details:</div>
            <div id="team-game-detail-date" className="team-game-detail">
              <div id="team-game-detail-date-title" className="team-game-detail-title font-wight-bold">Date</div>
              <div id="team-game-detail-date-value" className="team-game-detail-value font-wight-bold">{teamGameDetails["date"]}</div>
            </div>
            <div id="team-game-detail-home-team" className="team-game-detail">
              <div id="team-game-detail-home-team-title" className="team-game-detail-title font-wight-bold">Home Team</div>
              <div id="team-game-detail-home-team-value" className="team-game-detail-value font-wight-bold">{teamGameDetails["home_team_name"]}</div>
            </div>
            <div id="team-game-detail-home-team-score" className="team-game-detail">
              <div id="team-game-detail-home-team-score-title" className="team-game-detail-title font-wight-bold">Home Team Score</div>
              <div id="team-game-detail-home-team-score-value" className="team-game-detail-value font-wight-bold">{teamGameDetails["home_team_score"]}</div>
            </div>
            <div id="team-game-detail-visitor-team" className="team-game-detail">
              <div id="team-game-detail-visitor-team-title" className="team-game-detail-title font-wight-bold">Visitor Team</div>
              <div id="team-game-detail-visitor-team-value" className="team-game-detail-value font-wight-bold">{teamGameDetails["visitor_team_name"]}</div>
            </div>
            <div id="team-game-detail-visitor-team-score" className="team-game-detail">
              <div id="team-game-detail-visitor-team-score-title" className="team-game-detail-title font-wight-bold">Visitor Team Score</div>
              <div id="team-game-detail-visitor-team-score-value" className="team-game-detail-value font-wight-bold">{teamGameDetails["visitor_team_score"]}</div>
            </div>
          </AppDrawer>
        )
      }
      {showDrawerLoader && <AppLoader fullScreen message={loaderMessage} />}
    </Row>
  )
}

export default NbaTeams;