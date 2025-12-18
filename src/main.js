import "./style.css";
import { initRouter } from "./router";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import PlayerBar from "./components/player";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="flex h-screen bg-black text-white">
    <aside id="sidebar"></aside>
    <main class="flex-1 overflow-y-auto">
      <header id="header"></header>
      <section id="page-content" class="p-4"></section>
    </main>
  </div>
  <div id="player"></div>
`;

document.querySelector("#header").appendChild(Header());
document.querySelector("#sidebar").appendChild(Sidebar());
document.querySelector("#player").appendChild(PlayerBar());

initRouter();
