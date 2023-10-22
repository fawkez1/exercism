// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  // converting playlist to a set. a set cannot have duplicates!
  const newSet = new Set(playlist);
  // converting the set to an array again, because you cannot return a set.
  const newArray = Array.from(newSet);
  return newArray;

  
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  if (playlist.includes(track)){
    return true;
  }
  else return false;
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  if (!playlist.includes(track)){
  playlist.push(track);
  }
  return playlist;
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  let index = playlist.indexOf(track);
  if (index !== -1){
    playlist.splice(index, 1);
  }
  return playlist;
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
// Function to list artists in a playlist
export function listArtists(playlist) {
  // Empty array to store artist names
  let artistPlaylist = [];
 
  // Iterate through each song in the playlist
  playlist.forEach(song => {
      // Split the song title by the artist name
      let splitSong = song.split(' - ');
 
      // Add the artist name to the artistPlaylist array
      artistPlaylist.push(splitSong[1]);
  });
  // remove duplicaes by transforming the array into a set
  artistPlaylist = [...new Set(artistPlaylist)];
 
  // Return the artistPlaylist array
  return artistPlaylist;
 }
