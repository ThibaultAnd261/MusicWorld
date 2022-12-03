const Credentials = () => {
    return {
        TOKEN_URL: "https://accounts.spotify.com/api/token",
        BASE_URL: "https://api.spotify.com/",
        CLIENT_ID: process.env.REACT_APP_CLIENT_ID,
        CLIENT_SECRET: process.env.REACT_APP_CLIENT_SECRET
    };
};

export default Credentials;