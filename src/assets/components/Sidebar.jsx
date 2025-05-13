import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaThLarge,
  FaCalendarAlt,
  FaDollarSign,
  FaStar,
  FaUsers,
  FaImage,
  FaEnvelope,
  FaFileInvoiceDollar,
  FaBook,
  FaSignOutAlt,
} from "react-icons/fa";

const NAVIGATION_ITEMS = [
  {
    to: "/portal/dashboard",
    label: "Dashboard",
    icon: FaThLarge,
  },
  {
    to: "/portal/bookings",
    label: "Bookings",
    icon: FaBook,
  },
  {
    to: "/portal/invoices",
    label: "Invoices",
    icon: FaFileInvoiceDollar,
  },
  {
    to: "/portal/inbox",
    label: "Inbox",
    icon: FaEnvelope,
  },
  {
    to: "/portal/calendar",
    label: "Calendar",
    icon: FaCalendarAlt,
  },
  {
    to: "/portal/events",
    label: "Events",
    icon: FaUsers,
  },
  {
    to: "/portal/financial",
    label: "Financials",
    icon: FaDollarSign,
  },
  {
    to: "/portal/gallery",
    label: "Gallery",
    icon: FaImage,
  },
  {
    to: "/portal/feedback",
    label: "Feedback",
    icon: FaStar,
  },
];

const NavigationItem = ({ item, onClick }) => {
  const { to, label, icon: Icon } = item;

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `sidebar__nav-item ${isActive ? "sidebar__nav-item--active" : ""}`
      }
      onClick={onClick}
    >
      <span className="sidebar__nav-icon">
        <Icon />
      </span>
      <span className="sidebar__nav-label">{label}</span>
    </NavLink>
  );
};

const Logo = ({ onClick }) => (
  <div className="sidebar__logo-container">
    <NavLink to="/portal/dashboard" className="sidebar__logo" onClick={onClick}>
      <img
        src="/logos/VentixeLogo.svg"
        alt="Ventixe logo"
        className="sidebar__logo-icon"
      />
      <span>Ventixe</span>
    </NavLink>
  </div>
);

const PromoBanner = () => (
  <div className="sidebar__promo">
    <div className="sidebar__promo-card">
      <img
        src="/icons/PhoneIcon.svg"
        alt="New Features"
        className="sidebar__promo-image"
      />
      <p className="sidebar__promo-title">
        Experience enhanced features and a smoother interface with the latest
        version of Ventixe
      </p>
      <button className="sidebar__promo-button">Try New Version</button>
    </div>
  </div>
);

const SignOutButton = ({ onClick }) => (
  <button className="sidebar__signout-button" onClick={onClick}>
    <span className="sidebar__signout-icon">
      <FaSignOutAlt />
    </span>
    <span className="sidebar__signout-text">Sign Out</span>
  </button>
);

const Sidebar = ({ isOpen, onClose }) => {
  const handleNavClick = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };

  const handleSignOut = () => {
    console.log("Signing out...");
    handleNavClick();
  };

  return (
    <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
      <Logo onClick={handleNavClick} />

      <nav className="sidebar__nav">
        {NAVIGATION_ITEMS.map((item, index) => (
          <NavigationItem
            key={`nav-item-${index}`}
            item={item}
            onClick={handleNavClick}
          />
        ))}
      </nav>

      <PromoBanner />

      <div className="sidebar__footer">
        <SignOutButton onClick={handleSignOut} />
      </div>
    </aside>
  );
};

export default Sidebar;