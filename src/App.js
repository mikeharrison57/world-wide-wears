// Components
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Error from "./components/Error/Error";

// Functions and Hooks
import { useState, useEffect } from "react"; 
import { fetchSaleItems } from "./utils/api-calls";

const App = () => {
  const [products, setProducst] = useState([]);
  const [error, setError] = useState(false);

  return (
    <main>
      <Navbar />
      <Banner />
    </main>
  );
};

export default App;
