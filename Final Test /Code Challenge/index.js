import { LinkShortener } from "./components/link-shortener.js";

const app = document.getElementById('app');
const a = new LinkShortener();
app.appendChild(a.render());