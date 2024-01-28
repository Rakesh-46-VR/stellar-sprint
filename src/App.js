// src/App.js
import React, { useEffect, useState } from "react";
import AppRouter from './routes/AppRouter';
import "./App.css"
import Footer from './components/Footer';

function App() {
  const [shouldShowFooter, setShouldShowFooter] = useState(true);

  useEffect(() => {
    const checkForElement = () => {
      const element = document.getElementById('LSform');
      setShouldShowFooter(!element); // Invert the logic: Show footer if element not found
    };

    // Initial check
    checkForElement();

    // Listen for changes (assuming mutation observer for simplicity, you might need to adjust this)
    const observer = new MutationObserver(checkForElement);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);



  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <AppRouter />
      </main>
      {shouldShowFooter && <Footer />}  
    </div>
  );
}

export default App;
