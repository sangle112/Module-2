export default function Loader() {
  const div = document.createElement("div");
  div.className = "text-center py-10";
  div.innerHTML = "⏳ Đang tải...";
  return div;
}
