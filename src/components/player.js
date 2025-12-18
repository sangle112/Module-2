import { state } from "../store/state";

export default function PlayerBar() {
  const bar = document.createElement("div");
  bar.className =
    "fixed bottom-0 left-0 right-0 h-16 bg-zinc-800 px-4 flex items-center";

  function render() {
    bar.innerHTML = state.player.currentSong
      ? `🎵 ${state.player.currentSong.title}`
      : "Chưa phát bài nào";
  }

  window.addEventListener("player-change", render);
  render();

  return bar;
}
