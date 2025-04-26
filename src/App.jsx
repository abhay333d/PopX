import React, { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import LoginPage from "./components/LoginPage";
import CreateAccountPage from "./components/CreateAccountPage";
import AccountSettingsPage from "./components/AccountSettingsPage";

function App() {
  const [currentPage, setCurrentPage] = useState("welcome");
  const [userData, setUserData] = useState({});

  const renderPage = () => {
    switch (currentPage) {
      case "welcome":
        return <WelcomePage navigate={setCurrentPage} />;
      case "login":
        return (
          <LoginPage navigate={setCurrentPage} setUserData={setUserData} />
        );
      case "create":
        return (
          <CreateAccountPage
            navigate={setCurrentPage}
            setUserData={setUserData}
          />
        );
      case "settings":
        return (
          <AccountSettingsPage navigate={setCurrentPage} userData={userData} />
        );
      default:
        return <WelcomePage navigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {renderPage()}
    </div>
  );
}

export default App;
