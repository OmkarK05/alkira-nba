import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import AppTable from "../../components/app-table/AppTable";
import SearchBar from "../../components/search-bar/SearchBar";
import { getNbaTeams } from "../../services/teams";

const NbaTeams = () => {
    const [teamsData, setTeamsData] = useState(null);
    const [teams, setTeams] = useState(null);
    const [teamSearchResults, setTeamSearchResults] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchNbaTeams();
    },[]);

    const fetchNbaTeams = () => {
        getNbaTeams().then((response) => {
            const formattedTeams = response['data'].map((team) => getTeamDetails(team));
            setTeams(formattedTeams);

            const data = {
                headers: [
                    {name: 'team_name', label: 'Team Name'},
                    {name: 'city', label: 'City'},
                    {name: 'abbreviation', label: 'Abbreviation'},
                    {name: 'conference', label: 'Conference'},
                    {name: 'division', label: 'Division'},
                ],
                body: [],
                pagination: {}
            };

            data['body'] = formattedTeams.slice((currentPage - 1) * 7, currentPage * 7);

            data['pagination'] = {
                current_page : currentPage,
                total_pages : Math.ceil(response['data'].length / 7)
            }
            
            console.log(data);
            setTeamsData(data);
        })
    }
    
    const getTeamDetails = (team) => {
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

    const filterTeams = (teamName) => {
        setCurrentPage(1);
        setTeamSearchResults(null);
        if(teamName && teamName.trim().length){
            const searchResults = teams.filter((team) => team['team_name'].toLowerCase().includes(teamName.toLowerCase()));
            setTeamSearchResults(searchResults);
            setTeamsData({
                ...teamsData,
                body: searchResults.slice(0, 7),
                pagination: {
                    current_page : 1,
                    total_pages : Math.ceil(searchResults.length / 7)
                }
            })
        } else {
            setTeamsData({
                ...teamsData,
                body: teams.slice(0, 7),
                pagination: {
                    current_page : 1,
                    total_pages : Math.ceil(teams.length / 7)
                }
            })  
        }
    };

    const handlePagination = (pagination) => {
        let pageNumber = currentPage;
        if(pagination === 'next') pageNumber += 1;
        if(pagination === 'prev') pageNumber -= 1;

        setTeamsData({
            ...teamsData,
            body: (teamSearchResults ? teamSearchResults : teams).slice((pageNumber - 1) * 7, pageNumber * 7),
            pagination: {
                ...teamsData['pagination'],
                current_page : pageNumber,
            }
        })  

        setCurrentPage(pageNumber);
        console.log((teamSearchResults ? teamSearchResults : teams).slice((pageNumber - 1) * 7, pageNumber * 7));
    }

    return(
        <Row className="justify-content-center">
            <Col xl={10} className="py-5">
                <SearchBar search={filterTeams} />
            </Col>
            <Col xl={10}>
                <AppTable table={teamsData} pagination handlePagination={handlePagination} />
            </Col>
        </Row>
    )
}

export default NbaTeams;