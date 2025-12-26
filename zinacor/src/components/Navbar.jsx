const Navbar = () => {
  return (
    <nav data-aos="fade-down">
      <div className="nav-container">
        <div className="logo">
          <img src="https://delightful-manatee-8e9d66.netlify.app/assets/logo-f0ccee2f.svg" alt="Zinacor" />
        </div>

        <ul className="nav-links">
          <li>Menu</li>
          <li>Product</li>
          <li>Calculator</li>
          <li>Contact</li>
        </ul>

        <div className="hamburger">
          <button>
            <svg viewBox="0 0 512 512" width="20">
              <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
