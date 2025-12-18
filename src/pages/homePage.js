import Loader from "../components/loader";
import { httpRequest } from "../api/http";

export default async function HomePage() {
  const container = document.querySelector("#page-content");
  container.innerHTML = "";
  container.appendChild(Loader());

  try {
    const data = await httpRequest("/home/albums-for-you");

    container.innerHTML = `
      <h2 class="text-xl mb-4">Albums for you</h2>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        ${data.data
          .map(
            (item) => `
          <div>
            <img src="${item.thumbnail}" class="rounded mb-2"/>
            <p class="text-sm">${item.title}</p>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  } catch (err) {
    container.innerHTML = "❌ Lỗi tải dữ liệu";
  }
}
