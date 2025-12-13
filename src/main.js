import "./style.css";
import router from "./router";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import PlayerBar from "./components/PlayerBar";

const app = document.querySelector("#app");

document.body.innerHTML = `
  <div class="flex h-screen bg-zinc-900 text-white">
    <div id="sidebar"></div>
    <div class="flex-1 flex flex-col">
      <div id="header"></div>
      <main id="app" class="flex-1 overflow-y-auto p-6"></main>
    </div>
  </div>
  <div id="player"></div>
`;

document.querySelector("#sidebar").appendChild(Sidebar());
document.querySelector("#header").appendChild(Header());
document.querySelector("#player").appendChild(PlayerBar());

router.resolve();
