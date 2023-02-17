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
        return axios(baseUrl + '/v1/browse/new-releases?limit=32', {
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
    },
    async getArtist(token,id){
        return axios(baseUrl + '/v1/artists/'+id,{
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token } 
        })
    },
    async getArtistTopTracks(token,id){
        return axios(baseUrl + '/v1/artists/'+id+'/top-tracks?market=FR',{
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token } 
        })
    },
    async getArtistAlbums(token,id){
        return axios(baseUrl + '/v1/artists/'+id+'/albums',{
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token } 
        })
    },
    async getArtistRelatedArtists(token,id){
        return axios(baseUrl + '/v1/artists/'+id+'/related-artists',{
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token } 
        })
    },
    async getArtistDiscography(token,id,type){ // type = album ? single ? appears_on ? compilation ?
        return axios(baseUrl + '/v1/artists/'+id+'/albums?limit=50'+type,{
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token } 
        })
    },
    async getTrack(token,id){
        return axios(baseUrl + '/v1/tracks/'+id, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token } 
        })
    },
    async search(token,q,type){
        return axios(baseUrl + '/v1/search?q='+q+"&type="+ type +"&limit=10", {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token } 
        })
    }
}

export default Service;