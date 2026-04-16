export default function renderNavbar(data) {
  const header = document.querySelector("header");
  header.innerHTML = `<nav class="navbar">
      <a class="nav-link" href="./">Home</a>
      </nav>`;
}