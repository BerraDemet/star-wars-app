import Header from "./assets/components/Header";
import ShipLists from "./assets/components/ShipLists";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShipDetails from "./assets/components/ShipDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="header-container">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<ShipLists />} />
        <Route path="/ships/:name" element={<ShipDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
