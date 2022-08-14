export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://spotify-clone-27c9b.web.app/";
const clientId = "7d5d32bdc29b4d16897c45c15ba6e3d6";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenfromUrl = () => {
      return  window.location.hash
    .substring(1)
    .split('&')
    .reduce((inital,item) => {
        let parts = item.split('=');
        inital[parts[0]] = decodeURIComponent(parts[1]);

        return inital;
    },{});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;