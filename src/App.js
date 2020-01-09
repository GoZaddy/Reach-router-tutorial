import React from "react";

import { Router, Link } from "@reach/router";

function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to="/">Home</Link>
        <Link to="dashboard">Dashboard</Link>
      </div>
      <Router>
        <Home path="/" />
        <Dashboard path="dashboard">
          <DashboardIndex path = "/"/>
          <Route1 path="route1" />
          <Message path="message/:message" />
        </Dashboard>
        <FourOFour default />
      </Router>
    </>
  );
}

const Home = () => {
  return (
    <div>
      <h1>This is the home route</h1>
    </div>
  );
};

const Dashboard = ({ children }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link to="route1">Route1</Link>
        </li>
        <li>
          <Link to="message/hello" state={{ fullMessage: "Hey What's up" }}>
            Message
          </Link>
        </li>
      </ul>
      <div>{children}</div>
    </div>
  );
};

const DashboardIndex = () => {
  return(
    <h1>Welcome to the Dashboard</h1>
  );
}

const Route1 = () => {
  return (
    <div>
      <h1>This is Route 1</h1>
    </div>
  );
};
const Message = ({
  message,
  location: {
    state: { fullMessage }
  }
}) => {
  return (
    <div>
      <h1>{message}</h1>
      <p>{fullMessage}</p>
    </div>
  );
};

const FourOFour = () => {
  return (
    <div>
      <h1>Route not found</h1>
    </div>
  );
};

export default App;
