import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FiLogOut,
  FiHome,
  FiCalendar,
  FiDollarSign,
  FiMessageSquare,
  FiUsers,
  FiImage,
  FiInbox,
  FiFileText,
  FiBook,
} from "react-icons/fi";

// Navigation items configuration
const NAVIGATION_ITEMS = [
  { to: "/portal/dashboard", label: "Dashboard", icon: FiHome },
  { to: "/portal/bookings", label: "Bookings", icon: FiBook },
  { to: "/portal/invoices", label: "Invoices", icon: FiFileText },
  { to: "/portal/inbox", label: "Inbox", icon: FiInbox },
  { to: "/portal/calendar", label: "Calendar", icon: FiCalendar },
  { to: "/portal/events", label: "Events", icon: FiUsers },
  { to: "/portal/financial", label: "Financial", icon: FiDollarSign },
  { to: "/portal/gallery", label: "Gallery", icon: FiImage },
  { to: "/portal/feedback", label: "Feedback", icon: FiMessageSquare },
];

// Navigation Item Component
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

// Logo Component
const Logo = ({ onClick }) => (
  <div className="sidebar__logo-container">
    <NavLink to="/portal/dashboard" className="sidebar__logo" onClick={onClick}>
      <img
        src="/logos/VentixeLogo.svg"
        alt="Ventixe logo"
        className="sidebar__logo-icon"
      />
      <span className="sidebar__logo-text">Ventixe</span>
    </NavLink>
  </div>
);

// Promo Banner Component
const PromoBanner = () => (
  <div className="sidebar__promo">
    <div className="sidebar__promo-card">
      <img
        src="/icons/PromoBannerSideIcon.svg"
        alt="New Features"
        className="sidebar__promo-image"
      />
      <p className="sidebar__promo-title">
        Experience enhanced features and a smoother interface with the latest
        update
      </p>
      <button className="sidebar__promo-button">Try New Version</button>
    </div>
  </div>
);

// Sign Out Button Component
const SignOutButton = ({ onClick }) => (
  <button className="sidebar__signout-button" onClick={onClick}>
    <span className="sidebar__signout-icon">
      <FiLogOut />
    </span>
    <span className="sidebar__signout-text">Sign Out</span>
  </button>
);

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const handleNavClick = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };

  const handleSignOut = () => {
    // Add sign out logic here
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
