import axios from "axios";

export async function getNbaTeams() {
    try {
        const response = await axios.get('https://www.balldontlie.io/api/v1/teams');
        return Promise.resolve(response);
    } catch (err){
        return Promise.reject(err);
    }
}

export async function getNbaTeamGames(teamIds) {
    try {
        const response = await axios.get(`https://www.balldontlie.io/api/v1/games?team_ids=${teamIds}`);
        return Promise.resolve(response);
    } catch (err){
        return Promise.reject(err);
    }
}
