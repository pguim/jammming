const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const redirectUri = 'http://localhost:5173/'; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.
let accessToken;

const Spotify = {
  getAccessToken () {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  searchItem (search) {
    if (!search) return

    if (!accessToken) {
      Spotify.getAccessToken()
    }

    const endPoint = 'https://api.spotify.com/v1/search?'
    const params = `q=${encodeURI(search)}&type=track`
    const query = endPoint + params
    const options = {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      }
    }
    console.log(query)

    fetch(query, options).then(res => JSON.stringify(res)).then(data => console.log(data)).catch(err => console.error(err))

  }

};

export default Spotify;
