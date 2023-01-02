import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import AppDrawer from "../../components/app-drawer/AppDrawer";
import AppTable from "../../components/app-table/AppTable";
import SearchBar from "../../components/search-bar/SearchBar";
import { getNbaTeams, getNbaTeamGames } from "../../services/teams";
import './NbaTeams.scoped.scss'

const NbaTeams = () => {
    const [teamsData, setTeamsData] = useState(null);
    const [teams, setTeams] = useState(null);
    const [teamGameDetails, setTeamGameDetails] = useState(null);
    const [showDrawer, setShowDrawer] = useState(false);
    const [showDrawerLoader, setShowDrawerLoader] = useState(false);

    useEffect(() => {
        fetchNbaTeams();
    },[]);

    const fetchNbaTeams = () => {
        getNbaTeams().then((response) => {
            const formattedTeams = response['data'].map((team) => getFormattedTeam(team));
            setTeams(formattedTeams);

            const data = {
                headers: [
                    {name: 'team_name', label: 'Team Name'},
                    {name: 'city', label: 'City'},
                    {name: 'abbreviation', label: 'Abbreviation'},
                    {name: 'conference', label: 'Conference'},
                    {name: 'division', label: 'Division'},
                ],
                body: formattedTeams,
                pagination: {}
            };

            data['pagination'] = {
                current_page : 1,
                total_pages : Math.ceil(response['data'].length / 7)
            }
            
            setTeamsData(data);
        })
    }
    
    const getFormattedTeam = (team) => {
        const teamDetails = getDefaultTeamDetails();
        teamDetails['team_name'] = team['name'];
        teamDetails['city'] = team['city'];
        teamDetails['abbreviation'] = team['abbreviation'];
        teamDetails['conference'] = team['conference'];
        teamDetails['division'] = team['division'];
        teamDetails['id'] = team['id']
        return teamDetails;
    };

    const getDefaultTeamDetails = () => {
        return {
            team_name: '',
            city: '',
            abbreviation: '',
            conference: '',
            division: '',
        }
    };

    const getDefaultGameDetails = () => {
        return {
            date: '',
            season: '',
            home_team_full_name: '',
            home_team_name: '',
            home_team_score: '',
            visitor_team_name: '',
            visitor_team_score: '',
        }
    };

    const filterTeams = (teamName) => {
        if(teamName && teamName.trim().length){
            const searchResults = teams.filter((team) => team['team_name'].toLowerCase().includes(teamName.toLowerCase()));
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
        getNbaTeamGames([team['id']]).then(response => {
            const gameDetails =  getFormattedGame(response['data'][0]);
            setTeamGameDetails({...gameDetails});
            setShowDrawer(true);
        }).finally(() => setShowDrawerLoader(false));
    }

    const closeDrawer = () => {
        setShowDrawer(false);
    }

    const getFormattedGame = (game) => {
        const teamDetails = getDefaultGameDetails();
        teamDetails['date'] = getFormattedDate(game['date']);
        teamDetails['season'] = game['season'];
        teamDetails['home_team_full_name'] = game['home_team']['full_name'];
        teamDetails['home_team_name'] = game['home_team']['name'];
        teamDetails['home_team_score'] = game['home_team_score'];
        teamDetails['visitor_team_name'] = game['visitor_team']['full_name'];
        teamDetails['visitor_team_score'] = game['visitor_team_score'];
        return teamDetails;
    };

    const getFormattedDate = (date) => {
        return date.split('T')[0];
    }

    return(
        <Row className="justify-content-center">
            <Col xl={10} className="py-5">
                <SearchBar search={filterTeams} />
            </Col>
            <Col xl={10}>
                <AppTable table={teamsData} pagination handleRowClick={fetchTeamGames} />
            </Col>
            {
                showDrawer && (
                    <AppDrawer direction='right' width='350px' close={closeDrawer}>
                        <div className="team-game-detail">
                            <div className="team-game-detail-title">Team Full Name</div>
                            <div className="team-game-detail-value">{teamGameDetails['home_team_full_name']}</div>
                        </div>
                        <div className="team-game-detail">
                            <div className="team-game-detail-title">Total Games in {teamGameDetails['season']}</div>
                            <div className="team-game-detail-value">88</div>
                        </div>
                        <div className="team-game-detail-section-title">Random Game Details:</div>
                        <div className="team-game-detail">
                            <div className="team-game-detail-title">Date</div>
                            <div className="team-game-detail-value">{teamGameDetails['date']}</div>
                        </div>
                        <div className="team-game-detail">
                            <div className="team-game-detail-title">Home Team</div>
                            <div className="team-game-detail-value">{teamGameDetails['home_team_name']}</div>
                        </div>
                        <div className="team-game-detail">
                            <div className="team-game-detail-title">Home Team Score</div>
                            <div className="team-game-detail-value">{teamGameDetails['home_team_score']}</div>
                        </div>
                        <div className="team-game-detail">
                            <div className="team-game-detail-title">Visitor Team</div>
                            <div className="team-game-detail-value">{teamGameDetails['visitor_team_name']}</div>
                        </div>
                        <div className="team-game-detail">
                            <div className="team-game-detail-title">Visitor Team Score</div>
                            <div className="team-game-detail-value">{teamGameDetails['visitor_team_score']}</div>
                        </div>
                    </AppDrawer>
                )
            }
        </Row>
    )
}

export default NbaTeams;