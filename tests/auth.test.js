import { ENDPOINT, login, register } from "../api.js";

ENDPOINT.location = "http://localhost:8080"

try {
  await login({ email: "test@gmail.com", password: "1234" });
} catch (error) {
  console.log(error);
}
