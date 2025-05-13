import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <p>
        Welcome to your dashboard. Here you can see all your events at a glance.
      </p>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Events</h3>
          <p className="stat-number">12</p>
        </div>
        <div className="stat-card">
          <h3>Upcoming Events</h3>
          <p className="stat-number">5</p>
        </div>
        <div className="stat-card">
          <h3>Completed Events</h3>
          <p className="stat-number">7</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
