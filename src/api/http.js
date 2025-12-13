const BASE_URL = "https://youtube-music.f8team.dev";

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
