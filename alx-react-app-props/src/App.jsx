import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';
import UserDetails from './components/UserDetails';
import UserInfo from './components/UserInfo';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div>
      <WelcomeMessage />
            <Header />
            <MainContent />
            <Footer />
            <UserProfile />
    <UserContext.Provider value={userData}>
      <ProfilePage />
      <UserDetails />
      <UserInfo />
    </UserContext.Provider>
    </div>
  );
}

export default App;
