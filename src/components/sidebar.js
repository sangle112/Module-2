import router from "../router";

export default function Sidebar() {
  const nav = document.createElement("nav");
  nav.className = "w-56 bg-zinc-900 p-4 hidden md:block";

  nav.innerHTML = `
    <ul class="space-y-3">
      <li><a href="/" data-link>🏠 Home</a></li>
      <li><a href="/explore" data-link>🔥 Explore</a></li>
      <li><a href="/search" data-link>🔍 Search</a></li>
    </ul>
  `;

  nav.addEventListener("click", (e) => {
    const link = e.target.closest("[data-link]");
    if (!link) return;
    e.preventDefault();
    router.navigate(link.getAttribute("href"));
  });

  return nav;
}
