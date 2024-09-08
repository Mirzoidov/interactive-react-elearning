import React from "react";
// Global styles
import GlobalStyles from "./components/GlobalStyle";
// import pages
import AboutUs from "./pages/AboutUs";
function App() {
  return (
    <div className="App">
      <GlobalStyles />  {/* Import global styles */}
      <AboutUs />
    </div>
  );
}

export default App;
