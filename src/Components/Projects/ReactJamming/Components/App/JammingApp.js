import './JammingApp.css';
import React from 'react';
import SearchBar from "../SearchBar/searchbar"
import SearchResults from "../SearchResults/searchresults"
import Playlist from "../Playlist/playlist"
import Spotify from "../../util/Spotify";


class Jamming extends React.Component {
  constructor(props){

    super(props);

    this.state = {
      searchResults: [],
      playlistName: "Playlist Name",
      playlistTracks: []
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this)
  }

  addTrack(track) {
    const keyArray = [];
    const savedPlaylistTracks = this.state.playlistTracks;
    for (let i = 0; i < this.state.playlistTracks.length; i++) {
      keyArray.push(this.state.playlistTracks[i].id)
    }
    if ((keyArray.includes(track.id))===false) {
      savedPlaylistTracks.push(track)
    }
    this.setState({playlistTracks: savedPlaylistTracks})
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)
    this.setState({playlistTracks: tracks})
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

  savePlaylist(){
    const uriArray = this.state.playlistTracks.map(track => track.uri)
    Spotify.savePlaylist(this.state.playlistName,uriArray).then(() => {
      this.setState ({
        playlistName: "New Playlist",
        playlistTracks: []
      })
    })
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults})
    })
  }

  render() {
    return (
      <div>
        <div className="AppJamming">
          <SearchBar 
            onSearch={this.search}
          />
          <div 
            className="App-playlist"
          >
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd = {this.addTrack}
            />
            <Playlist 
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    )
  }
}


export default Jamming;
