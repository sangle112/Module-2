const BASE_URL = "https://youtube-music.f8team.dev/api";

export async function request(url, options = {}) {
  const token = localStorage.getItem("access_token");

  const res = await fetch(BASE_URL + url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  if (!res.ok) throw new Error("API error");
  return res.json();
}
// import.meta.env.VITE_BASE_URL; // Use this line to get the base URL from environment variables
// export const BASE_URL = import.meta.env.VITE_BASE_URL;// IGNORE ---
