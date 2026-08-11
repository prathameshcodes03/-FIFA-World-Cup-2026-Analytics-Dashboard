import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const getStats = () => {
    return axios.get(`${API}/api/stats`);
};

export const getGoals = () => {
    return axios.get(`${API}/api/stats/goals`);
};

export const getAttendance = () => {
    return axios.get(`${API}/api/stats/attendance`);
};

export const getMatches = () => {
    return axios.get(`${API}/api/matches`);
};

export const getTeams = () => {
    return axios.get(`${API}/api/teams`);
};

export const getTeamStats = (team) => {
    return axios.get(`${API}/api/teams/${team}/stats`);
};

export const getMatchesByTeam = (team) => {
    return axios.get(`${API}/api/matches/team/${team}`);
};

export const getMatchesByRound = (round) => {
    return axios.get(`${API}/api/matches/round/${round}`);
};