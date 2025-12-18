export const state = {
  auth: {
    user: null,
    isLoggedIn: false,
  },

  player: {
    currentSong: null,
    isPlaying: false,
  },
};

export function setAuth(user) {
  state.auth.user = user;
  state.auth.isLoggedIn = !!user;
  window.dispatchEvent(new Event("auth-change"));
}

export function setCurrentSong(song) {
  state.player.currentSong = song;
  state.player.isPlaying = true;
  window.dispatchEvent(new Event("player-change"));
}
