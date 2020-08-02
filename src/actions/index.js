// Action Creator
export const selectSong = (song) => {
	// Return an actino
	return {
		type: 'SONG_SELECTED',
		payload: song
	};
};

