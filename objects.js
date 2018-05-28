var playlist = {whitenyhousten: "I will always Love You"}
function updatePlaylist(playlist,Teddy,Ethiopia){
  playlist[Teddy] = 'Ethiopa'
  return playlist
}
function removeFromPlaylist(playlist,whitenyhousten){
  delete playlist.whitenyhousten;
  return playlist
}
