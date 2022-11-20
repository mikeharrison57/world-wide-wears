// Components
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";

// Functions and Hooks
import { useState, useEffect } from 'react'; 
import { fetchSaleItems } from "./utils/api-calls";

const App = () => {

  

  return (
    <main>
      <Navbar />
      <Banner />
    </main>
  );
}

export default App;
