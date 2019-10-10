import React from "react";
import { WelcomeSection } from './componentStyles';

export default function WelcomePage() {
  return (
    <WelcomeSection className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <div>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </div>        
      </header>
    </WelcomeSection>
  );
}