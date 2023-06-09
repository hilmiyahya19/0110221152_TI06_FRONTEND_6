/**
 * Membuat component Header.
 * Component Header menampilkan navigasi.
 */
function Header() {
  return (
    <nav>
      <ul>
          <li><a class="active" href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default Header;
