export const ENDPOINT = {
  location: "",
};

async function sendJson(uri, payload) {
  let res = await fetch(ENDPOINT.location + uri, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  let data = await res.json();
  if (data.error) {
    throw new Error(data.error);
  }
  return data;
}

export async function login({ email, password }) {
  let { token } = await sendJson("/login", { email, password });
  localStorage.setItem("jwtAuthToken", token);
}

export function register({ name, email, password, imageURI }) {
  return sendJson("/register", { name, email, password, imageURI });
}
