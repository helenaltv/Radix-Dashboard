import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">Your Logo</div>
      <nav>
        <ul className="menu">
          <li>Overview</li>
          <li>Products</li>
          <li>Customers</li>
          <li>Settings</li>
        </ul>
      </nav>
      <div className="search-box">
        <input type="text" placeholder="Search" />
      </div>
      <div className="avatar">
        <img src="path/to/avatar.jpg" alt="Avatar" />
      </div>
    </header>
  );
};
export default Header;
