let userAccessToken;
const clientID = '97bb66261073435095ce8d52c7d63f2a';
const redirectURI = "https://coxnswebsite.surge.sh/projects/jamming";


const Spotify = {
    getAccessToken(){
        if (userAccessToken){
            return userAccessToken
        }
        const userAccessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
        const tokenExpiresInMatch = window.location.href.match(/expires_in=([^&]*)/)

        if (userAccessTokenMatch && tokenExpiresInMatch){
            userAccessToken = userAccessTokenMatch[1];
            const expiresInTime = Number(tokenExpiresInMatch[1]);
            window.setTimeout(() => userAccessToken = '', expiresInTime * 1000)
            window.history.pushState("Access Token",null,"/");
            return userAccessToken;
        } else {
            const accessURL = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientID}&scope=playlist-modify-public&redirect_uri=${redirectURI}`
            window.location = accessURL
        }
    },

    search(term){
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,{
            headers:{
                Authorization: `Bearer ${accessToken}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return [];
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name, 
                uri: track.uri
            }))
        })
    },

    savePlaylist(name,trackURIs){
        if (!name || !trackURIs.length){
            return
        }
        const accessToken = Spotify.getAccessToken();
        const headers = {Authorization: `Bearer ${accessToken}`}
        let userId;

        return fetch('https://api.spotify.com/v1/me', {
            headers: headers}
        ).then(response => response.json()
        ).then(jsonResponse => {
            userId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                headers: headers,
                method: "POST",
                body: JSON.stringify({name: name})
            }).then(response => response.json()
            ).then(jsonResponse => {
                 const playlistId = jsonResponse.id;
                 return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,{
                     headers: headers,
                     method: "POST",
                     body: JSON.stringify({uris: trackURIs})
                 })
            })
        })
    }
    }

export default Spotify