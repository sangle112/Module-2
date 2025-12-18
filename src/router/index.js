import Navigo from "navigo";

import HomePage from "../pages/homePage";
import ExplorePage from "../pages/explorePage";
import SearchPage from "../pages/searchPage";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registerPage";
import AlbumDetailPage from "../pages/albumDetailPage";
import PlaylistDetailPage from "../pages/playlistDetailPage";

const router = new Navigo("/", { hash: false });

export function initRouter() {
  router
    .on("/", HomePage)
    .on("/explore", ExplorePage)
    .on("/search", SearchPage)
    .on("/login", LoginPage)
    .on("/register", RegisterPage)
    .on("/album/:slug", AlbumDetailPage)
    .on("/playlist/:slug", PlaylistDetailPage)
    .resolve();
}

export default router;
// chia tách file router để dễ quản lý khi dự án lớn hơn
