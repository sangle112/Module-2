export default function Header() {
  const header = document.createElement("div");
  header.className = "h-14 flex items-center px-4 border-b border-gray-800";

  header.innerHTML = `
    <h1 class="font-bold text-lg">YouTube Music</h1>
  `;
  return header;
}
