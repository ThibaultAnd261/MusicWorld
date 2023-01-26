import axios from "axios";
const baseUrl = "https://api.spotify.com";

let Service = {
    async categorie(token) {
        return axios(baseUrl + '/v1/browse/categories', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        })
    },
    async release(token) {
        return axios(baseUrl + '/v1/browse/new-releases', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        })
    },
    async featuredPlay(token) {
        return axios(baseUrl + '/v1/browse/featured-playlists', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        })
    },
    async recommendations(token) {
        return axios(baseUrl + '/v1/recommendations/available-genre-seeds', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        })
    },
    async getAlbum(token,id){
        return axios(baseUrl + '/v1/albums/'+id, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        })
    }
}

export default Service;