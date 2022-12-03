/*import axios from "axios";

import Credentials from "../Credentials";
import {useEffect, useState} from "react";

const axiosInstance = axios.create({
        baseURL: Credentials.TOKEN_URL,
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + btoa(Credentials.CLIENT_ID + ':' + Credentials.CLIENT_SECRET)
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
}
.then(tokenResp => {
        //setToken(token.data.access_token);
        //token = token.data.access_token;
    console.log("test");
    })


)

const axiosInstance = () => axios(Credentials.TOKEN_URL, {
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(Credentials.CLIENT_ID + ':' + Credentials.CLIENT_SECRET)
    },
    data: 'grant_type=client_credentials',
    method: 'POST'
})
    .then(tokenResponse => {
        console.log("test ok")
    })

export default {axiosInstance};*/