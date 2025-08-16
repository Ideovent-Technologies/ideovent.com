import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blogs" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <style>
        {`
          .custom-navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 50;
            transition: all 0.3s ease-in-out;
            padding: 12px 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: transparent;
          }

          .custom-navbar.scrolled {
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.2);
          }

          .custom-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .custom-logo {
            height: 55px;
            display: flex;
            align-items: center;
          }

          .custom-logo img {
            height: 90px;
            max-height: 100px;
            object-fit: contain;
          }

          .custom-nav-links {
            display: flex;
            gap: 20px;
            align-items: center;
          }

          .custom-nav-link {
            text-decoration: none;
            font-size: 16px;
            font-weight: 500;
            color: black;
            transition: color 0.3s ease-in-out;
            position: relative;
          }

          .custom-nav-link:hover,
          .custom-nav-link.active {
            color: #007bff;
          }

          /* Dropdown Container */
          .custom-dropdown {
            position: relative;
          }
          
          /* Dropdown Menu */
          .custom-dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
            display: flex;
            flex-direction: column;
            min-width: 220px;
            padding: 10px 0;
            z-index: 100;
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
          }

         /* Hidden by default */
.custom-dropdown-menu {
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px) scale(0.95);
  transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1);
  transform-origin: top center;

  /* Glassmorphism styling */
  background: rgba(255, 255, 255, 0.7); /* semi-transparent */
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);
  
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  padding: 0.75rem 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Show on Hover */
.custom-dropdown:hover .custom-dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
}

          /* Dropdown Links */
          .custom-dropdown-menu a {
            text-decoration: none;
            padding: 10px 16px;
            font-size: 15px;
            font-weight: 500;
            color: black;
            transition: background 0.3s ease, color 0.3s ease;
          }

          .custom-dropdown-menu a:hover {
            background: #f0f0f0;
            color: #007bff;
          }

          .custom-get-started {
            background: #007bff;
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            font-size: 14px;
            font-weight: 600;
            text-decoration: none;
            transition: background 0.3s ease-in-out;
          }

          .custom-get-started:hover {
            background: #0056b3;
          }

          /* Mobile Menu */
          .custom-menu-button {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: black;
            display: none;
          }

          .custom-mobile-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(10px);
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            text-align: center;
            transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
            opacity: 0;
            pointer-events: none;
          }

          .custom-mobile-menu.open {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);
          }

          .custom-mobile-menu a, .custom-mobile-menu button {
            font-size: 18px;
            font-weight: 500;
            color: white;
            text-decoration: none;
            background: none;
            border: none;
            cursor: pointer;
            transition: color 0.3s;
          }

          .custom-mobile-menu a:hover {
            color: #007bff;
          }
          .custom-mobile-menu button:hover {
            color: #007bff;
          }

          /* Mobile submenu */
          .mobile-services-dropdown {
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding-left: 20px;
            margin-top: 8px;
          }

          .mobile-services-dropdown a {
            font-size: 16px;
            color: white; /* Submenu links are white */
            text-decoration: none;
            transition: none;
          }
          .mobile-services-dropdown.closed {
            display: none;
          }
          
          .mobile-services-dropdown a:hover {
            color: #007bff; /* Submenu links turn blue on hover */
          }

          /* Responsive */
          @media (max-width: 768px) {
            .custom-nav-links {
              display: none;
            }
            .custom-menu-button {
              display: block;
            }
            .custom-logo img {
              height: 80px;
            }
          }
        `}
      </style>

      <header className={`custom-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="custom-container">
          <Link to="/" className="custom-logo" onClick={closeMenu}>
            <img
              src={`${import.meta.env.BASE_URL}ideovent.png`}
              alt="Ideovent Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="custom-nav-links">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`custom-nav-link ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Services with Submenu */}
            <div className="custom-dropdown">
              <Link
                to="/services"
                className={`custom-nav-link ${
                  location.pathname.startsWith("/services") ? "active" : ""
                }`}
              >
                Services
              </Link>
              <div className="custom-dropdown-menu">
                <Link to="/services/software" onClick={closeMenu}>Software Development</Link>
                <Link to="/services/website" onClick={closeMenu}>Website Development</Link>
                <Link to="/services/mobile" onClick={closeMenu}>Mobile App Development</Link>
                <Link to="/services/marketing" onClick={closeMenu}>Digital Marketing</Link>
                <Link to="/services/graphics" onClick={closeMenu}>Graphics Design</Link>
                <Link to="/services/domain" onClick={closeMenu}>Domain & Hosting</Link>
                <Link to="/services/erp-crm" onClick={closeMenu}>ERP & CRM Development</Link>
                <Link to="/services/maintenance" onClick={closeMenu}>Maintenance Services</Link>
                <Link to="/services/more" onClick={closeMenu}>Explore More Services</Link>
              </div>
            </div>

            <Link to="/contact" className="custom-get-started">
              Grow My Brand
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="custom-menu-button" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`custom-mobile-menu ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`custom-nav-link ${
                location.pathname === item.path ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
          {/* Mobile services dropdown */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="custom-nav-link"
            >
              Services <ChevronDown size={16} />
            </button>
            <div className={`mobile-services-dropdown ${mobileServicesOpen ? "" : "closed"}`}>
              <Link to="/services/software" onClick={closeMenu}>Software Development</Link>
              <Link to="/services/website" onClick={closeMenu}>Website Development</Link>
              <Link to="/services/mobile" onClick={closeMenu}>Mobile App Development</Link>
              <Link to="/services/marketing" onClick={closeMenu}>Digital Marketing</Link>
              <Link to="/services/graphics" onClick={closeMenu}>Graphics Design</Link>
              <Link to="/services/domain" onClick={closeMenu}>Domain & Hosting</Link>
              <Link to="/services/erp-crm" onClick={closeMenu}>ERP & CRM Development</Link>
              <Link to="/services/maintenance" onClick={closeMenu}>Maintenance Services</Link>
              <Link to="/services/more" onClick={closeMenu}>Explore More Services</Link>
            </div>
          </div>
          <Link to="/contact" className="custom-get-started" onClick={closeMenu}>
            Grow My Brand
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;