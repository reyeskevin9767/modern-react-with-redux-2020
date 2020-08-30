// Action Creator
export const selectSong = (song) => {
  // Return an action
  return {
    // type is required, payload is optional
    type: 'SONG_SELECTED',
    payload: song,
  };
};


